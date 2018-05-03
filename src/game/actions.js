// game actions

import { Hero } from './entities';
import { HeroActions } from '../actions/hero';

export class Movement {
  static createAction(entity, direction, level) {
    const eTile = level.tiles[entity.position.x][entity.position.y];
    const dTile = eTile.nesw[direction];

    if (dTile && (dTile.type === 'floor' || dTile.type === 'door')) {
      // valid move
      return { type: Movement._getActionType(entity), direction };
    } else {
      return null;
    }
  }

  static movePosition(position, direction) {
    switch (direction) {
      case 'north':
        return { x: position.x, y: position.y - 1 };
      
      case 'east':
        return { x: position.x + 1, y: position.y };
      
      case 'south':
        return { x: position.x, y: position.y + 1 };
      
      case 'west':
        return { x: position.x - 1, y: position.y };
      
      default:
        console.error('Unknown movement direction', direction);
        return position;
    }
  }

  static _getActionType(entity) {
    switch (entity.type) {
      case Hero.type:
        return HeroActions.move;
      
      default:
        return 'UNKNOWN_ENTITY_MOVE_ACTION';
    }
  }
}
