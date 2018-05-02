// level state reducer

import { GlobalActions } from '../actions/global';
import Level from '../game/level';

const defaultLevelState = {
  width: 51,
  height: 51,
  tileSize: 12,
  rooms: null,
  tiles: null,
  spawnLocation: null,
  exitLocation: null
};

const levelReducer = (state=defaultLevelState, action) => {
  switch (action.type) {
    case GlobalActions.newGame:
      return defaultLevelState;

    case GlobalActions.nextLevel:
      const level = Level.createRandom(state.width, state.height);
      return {
        ...state,
        rooms: level.rooms,
        tiles: level.tiles,
        spawnLocation: level.spawnLocation,
        exitLocation: level.exitLocation
      };

    default:
      return state;
  }
}

export default levelReducer;
