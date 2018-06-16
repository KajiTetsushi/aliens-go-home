import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { getCanvasPosition } from './utils/formulas';
import Canvas, { id } from './components/Canvas';

class App extends Component {
  componentDidMount() {
    const self = this;
    setInterval(() => {
      self.props.moveObjects(self.canvasMousePosiiton);
    }, 10);

    window.onresize = () => {
      const cnv = document.getElementById(id);
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  trackMouse = event => {
    this.canvasMousePosiiton = getCanvasPosition(event);
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        trackMouse={this.trackMouse}
      />
    );
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
};

export default App;
