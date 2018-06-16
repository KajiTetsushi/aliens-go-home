import { connect } from 'react-redux';

import App from '../App';
import {
  leaderboardLoaded, signedIn,
  moveObjects, startGame
} from '../actions/index';

const mapStateToProps = state => ({
  angle: state.angle,
  gameState: state.gameState,
  currentPlayer: state.currentPlayer,
  players: state.players,
});

const mapDispatchToProps = dispatch => ({
  leaderboardLoaded: (players) => {
    dispatch(leaderboardLoaded(players));
  },
  signedIn: (player) => {
    dispatch(signedIn(player));
  },
  moveObjects: mousePosition => {
    dispatch(moveObjects(mousePosition));
  },
  startGame: () => {
    dispatch(startGame());
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
