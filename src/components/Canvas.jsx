import React from 'react';
import PropTypes from 'prop-types';

// gameplay
import CannonBall from './CannonBall';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import FlyingObject from './FlyingObject';
import Ground from './Ground';
import Sky from './Sky';

// ui
import CurrentScore from './CurrentScore';
import Leaderboard from './Leaderboard';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';

import { signIn } from 'auth0-web';

export const id = 'aliens-go-home-canvas';

const Canvas = (props) => {
  // Position circle at the bottom (offset upwards by 100px) center of the screen.
  const gameHeight = 1200;
  const viewBox = [
    window.innerWidth / -2,   // min-x  : canvas leftmost position
    100 - gameHeight,         // min-y  : canvas topmost position
    window.innerWidth,        // width  : canvas width
    gameHeight                // height : canvas height
  ];

  // SVG puts its elements down in layers (so, it's an ogre, then?).
  // #shadow is used by CurrentScore to get some shadows.
  return (
    <svg
      id={id}
      onMouseMove={props.trackMouse}
      preserveAspectRatio="xMaxYMax none" // uniform scaling
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle} />
      <CannonBase />
      <CannonBall position={{x: 0, y: -100}}/>
      {props.gameState.flyingObjects.map(flyingObject => (
        <FlyingObject
          key={flyingObject.id}
          position={flyingObject.position}
        />
      ))}
      <CurrentScore score={15} />
      <Heart position={{x: -300, y: 35}} />
      {!props.gameState.started && (
        <g>
          <StartGame onClick={props.startGame} />
          <Title />
          <Leaderboard
            authenticate={signIn}
            currentPlayer={props.currentPlayer}
            leaderboard={props.players}
          />
        </g>
      )}
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  currentPlayer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
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
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })),
  startGame: PropTypes.func.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

Canvas.defaultProps = {
  currentPlayer: null,
  players: null,
};

export default Canvas;
