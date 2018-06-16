import { flyingObjectLifespan } from '../utils/constants';
import { calculateAngle } from '../utils/formulas';
import { getCurrentTime } from '../utils/helpers';
import createFlyingObjects from './createFlyingObjects';

const moveObjects = (state, action) => {
  // Store a `mousePosition` value even if the action doesn't pass one.
  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0,
  };

  // Create flying objects if needed.
  const newState = createFlyingObjects(state);

  // Destroy flying objects which have lived for longer than 4s in the game.
  const now = getCurrentTime();
  const flyingObjects = newState.gameState.flyingObjects.filter(flyingObject => (
    (now - flyingObject.createdAt) < flyingObjectLifespan
  ));

  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      flyingObjects,
    },
    angle,
  };
}

export default moveObjects;
