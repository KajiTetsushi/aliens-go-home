import React from 'react';
import PropTypes from 'prop-types';

import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
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

  return (
    <svg
      id="aliens-go-home-canvas"
      onMouseMove={props.trackMouse}
      preserveAspectRatio="xMaxYMax none" // uniform scaling
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle} />
      <CannonBase />
    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;
