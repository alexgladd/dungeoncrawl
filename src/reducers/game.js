// game state reducer

import { GlobalActions } from '../actions/global';
import { GameStates } from '../actions/game';

const defaultGameState = {
  state: GameStates.new,
  floor: 9,
  turn: 0,
  score: 0
};

const gameReducer = (state=defaultGameState, action) => {
  switch (action.type) {
    case GlobalActions.newGame:
      return defaultGameState;

    default:
      return state;
  }
}

export default gameReducer;
