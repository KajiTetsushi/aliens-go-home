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
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';

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
      <FlyingObject position={{x: -150, y: -300}}/>
      <FlyingObject position={{x: 150, y: -300}}/>
      <CurrentScore score={15} />
      <Heart position={{x: -300, y: 35}} />
      <StartGame onClick={() => console.log('Aliens, Go Home!')} />
      <Title />
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
