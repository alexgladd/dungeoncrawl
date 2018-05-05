// game actions

export class Movement {
  static createAction(entity, direction, level) {
    const eTile = level.tiles[entity.position.x][entity.position.y];
    const dTile = eTile.nesw[direction];

    if (dTile && (dTile.type === 'floor' || dTile.type === 'door')) {
      // valid move
      return direction ;
    } else {
      return null;
    }
  }

  static movePosition(position, direction) {
    switch (direction) {
      case Movement.NORTH:
        return { x: position.x, y: position.y - 1 };
      
      case Movement.EAST:
        return { x: position.x + 1, y: position.y };
      
      case Movement.SOUTH:
        return { x: position.x, y: position.y + 1 };
      
      case Movement.WEST:
        return { x: position.x - 1, y: position.y };
      
      default:
        console.error('Unknown movement direction', direction);
        return position;
    }
  }
}

Movement.NORTH = 'north';
Movement.SOUTH = 'south';
Movement.EAST = 'east';
Movement.WEST = 'west';
