// game input handling

import { Hero } from './entities';
import { Movement } from './actions';

class Input {
  static handleInput(evt, hero, level) {
    // keyboard event handling
    switch (evt.key) {
      case 'ArrowUp':
      case 'w':

      case 'ArrowDown':
      case 's':

      case 'ArrowLeft':
      case 'a':

      case 'ArrowRight':
      case 'd':

      default:
        return null;
    }
  }

  static _handleDirection(direction, hero, level) {
    const targetPosition = Movement.movePosition(hero.position, direction);

    // TODO look for moster to attack

    // TODO look for item to pick up

    // try to move
    const heroTile = level.tiles[hero.position.x][hero.position.y];
    const destTile = heroTile.nesw[direction];
  }
}

Input.Type = {
  move: 'INPUT_RESULT_MOVEMENT',
  attack: 'INPUT_RESULT_ATTACK',
  pickup: 'INPUT_RESULT_PICKUP'
};

export default Input;
