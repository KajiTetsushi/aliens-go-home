import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Auth0 from 'auth0-web';

import { getCanvasPosition } from './utils/formulas';
import Canvas, { id } from './components/Canvas';

Auth0.configure({
  domain: 'kajitetsushi.auth0.com',
  clientID: 'LkN09ik8wIakBx3ytVFyMQO5yv7tb5Ls',
  redirectUri: 'http://localhost:3000/',
  responseType: 'token id_token',
  scope: 'openid profile manage:points',
});

class App extends Component {
  componentDidMount() {
    const self = this;

    Auth0.handleAuthCallback();
    Auth0.subscribe(auth => {
      console.log(auth);
    });

    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosiiton);
    }, 10);

    window.onresize = this.resizeCanvas;
    window.onresize();
  }

  resizeCanvas = () => {
    const cnv = document.getElementById(id);
    cnv.style.width = `${window.innerWidth}px`;
    cnv.style.height = `${window.innerHeight}px`;
  }

  trackMouse = event => {
    this.canvasMousePosiiton = getCanvasPosition(event);
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        gameState={this.props.gameState}
        startGame={this.props.startGame}
        trackMouse={this.trackMouse}
      />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
    flyingObjects: PropTypes.arrayOf(PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
      }).isRequired,
      id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  moveObjects: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default App;
