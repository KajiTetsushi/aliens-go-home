import {
  LEADERBOARD_LOADED, SIGNED_IN,
  MOVE_OBJECTS, START_GAME
} from '../actions';
import moveObjects  from './moveObjects';
import startGame from './startGame';

const initialGameState = {
  started: false,
  kills: 0,
  lives: 3,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
  currentPlayer: null,
  players: null,
};

const initialState = {
  angle: 45,
  gameState: initialGameState,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LEADERBOARD_LOADED:
      return {
        ...state,
        players: action.players,
      };

    case SIGNED_IN:
      return {
        ...state,
        currentPlayer: action.player,
      };

    case MOVE_OBJECTS:
      return moveObjects(state, action);

    case START_GAME:
      return startGame(state, initialGameState);

    default:
      return state;
  }
}

export default reducer;
