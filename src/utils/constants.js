// very wide to provide a full-screen feeling
export const skyAndGroundWidth = 5000;

// start button width
export const gameWidth = 800;
export const gameHeight = 1200;

// new flying objects every interval duration in milliseconds
export const createInterval = 1000;

// no more than this number of objects on screen
export const maxFlyingObjects = 4;

// flying objects start at this "altitude" in the Y axis.
// ideally, spawn in a place above the browser viewport 
// so that the players don't see the flying objects pop out of nowhere.
export const flyingObjectsStarterYAxis = -1100;

// possible starting X-axis positions the flying objects will spawn in
export const flyingObjectsStarterPositions = [
  -300,
  -150,
  150,
  300,
];

export const flyingObjectLifespan = 4000;
