import { calculateAngle } from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';

const moveObjects = (state, action) => {
  // Store a `mousePosition` value even if the action doesn't pass one.
  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0,
  };

  // Create flying objects if needed.
  const newState = createFlyingObjects(state);

  const { x, y } = mousePosition;
  const angle = calculateAngle(0, 0, x, y);

  return {
    ...newState,
    angle,
  };
}

export default moveObjects;
