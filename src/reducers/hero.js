// hero state reducer

import { GlobalActions } from '../actions/global';
import { HeroActions } from '../actions/hero';
import { Movement } from '../game/actions';

const testHeroState = {
  name: 'John Smith',
  position: null
};

const heroReducer = (state=testHeroState, action) => {
  switch (action.type) {
    case GlobalActions.newGame:
      return null;
    
    case GlobalActions.nextLevel:
      return { ...state, position: null };
    
    case HeroActions.move:
      return { ...state, position: Movement.movePosition(state.position, action.direction) }
    
    case HeroActions.teleport:
      return { ...state, position: action.position };

    default:
      return state;
  }
}

export default heroReducer;
