import {
  createInterval, flyingObjectsStarterYAxis, maxFlyingObjects,
  flyingObjectsStarterPositions
} from '../utils/constants';

import {
  getCurrentTime
} from '../utils/helpers';

/**
 * Self-updating reducer.
 * It doesn't need to receive any incoming actions because it's meant to always execute
 * every time a 'MOVE_OBJECTS' action has been triggered, which should be 10ms.
 */
export default function createFlyingObjects(state) {
  // If the game is not running, do nothing.
  if (!state.gameState.started) return state;

  // If the game is running, decide whether it should create new flying objects.
  const now = getCurrentTime();
  const { lastObjectCreatedAt, flyingObjects } = state.gameState;
  const createNewObject = (
    now - (lastObjectCreatedAt).getTime() > createInterval &&
    flyingObjects.length < maxFlyingObjects
  );

  // If it should not create new flying objects yet, do nothing.
  if (!createNewObject) return state;

  // Create a flying object at any of the starting X-axis positions.
  // The position is decided randomly, and it chooses a position
  // from 0 to (flyingObjectsStarterPositions.length - 1).
  const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
  const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];
  const newFlyingObject = {
    position: {
      x: flyingObjectPosition,
      y: flyingObjectsStarterYAxis,
    },
    createdAt: now,
    id: now,
  };

  // Update the state with the new flying object.
  return {
    ...state,
    gameState: {
      ...state.gameState,
      flyingObjects: [
        ...state.gameState.flyingObjects,
        newFlyingObject,
      ],
      lastObjectCreatedAt: new Date(),
    },
  };
}
