// reducers

import { combineReducers } from 'redux';
import game from './game';
import hero from './hero';
import level from './level';

const allReducers = combineReducers({
  game,
  hero,
  level
});

export default allReducers;
