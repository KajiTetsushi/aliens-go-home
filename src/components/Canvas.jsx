import React from 'react';

import Ground from './Ground';
import Sky from './Sky';

const Canvas = () => {
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
      preserveAspectRatio="xMaxYMax none" // uniform scaling
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};

export default Canvas;
