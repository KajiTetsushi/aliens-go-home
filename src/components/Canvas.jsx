import React from 'react';
import PropTypes from 'prop-types';

import CannonBall from './CannonBall';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CurrentScore from './CurrentScore';
import Ground from './Ground';
import Sky from './Sky';

const Canvas = (props) => {
  // Position circle at the bottom (offset upwards by 100px) center of the screen.
  const viewBox = [
    window.innerWidth / -2,   // min-x  : canvas leftmost position
    100 - window.innerHeight, // min-y  : canvas topmost position
    window.innerWidth,        // width  : canvas width
    window.innerHeight        // height : canvas height
  ];

  // SVG puts its elements down in layers (so, it's an ogre, then?).
  // #shadow is used by CurrentScore to get some shadows.
  return (
    <svg
      id="aliens-go-home-canvas"
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
      <CurrentScore score={15} />
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
