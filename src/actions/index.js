export const LEADERBOARD_LOADED = 'LEADERBOARD_LOADED';
export const SIGNED_IN = 'SIGNED_IN';
// ... MOVE_OBJECTS and START_GAME ...

export const leaderboardLoaded = players => ({
  type: LEADERBOARD_LOADED,
  players,
});

export const signedIn = player => ({
  type: SIGNED_IN,
  player,
});


export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const moveObjects = mousePosition => ({
  type: MOVE_OBJECTS,
  mousePosition,
});

export const START_GAME = 'START_GAME';
export const startGame = () => ({
  type: START_GAME,
});

