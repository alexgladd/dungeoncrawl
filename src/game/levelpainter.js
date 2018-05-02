// level painter

class LevelPainter {
  constructor(canvas) {
    this.ctx = canvas.getContext('2d', { alpha: false });
  }

  repaint(level) {
    // clear
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    // base tiles
    for (let x = 0; x < level.tiles.length; x++) {
      for (let y = 0; y < level.tiles[x].length; y++) {
        const tile = level.tiles[x][y];
        this._paintTile(x, y, tile, level.tileSize);
      }
    }

    // rooms
    this.ctx.fillStyle = 'gray';
    level.rooms.forEach(room => {
      this._paintRoom(room, level.tileSize);
    });

    // spawn/exit
    this._paintTile(level.spawnLocation.x, level.spawnLocation.y, { type: 'spawn' }, level.tileSize);
    this._paintTile(level.exitLocation.x, level.exitLocation.y, { type: 'exit' }, level.tileSize);
  }

  _paintTile(x, y, tile, tileSize) {
    let tileColor;
    switch (tile.type) {
      case 'wall':
        tileColor = 'black';
        break;
      
      case 'floor':
      case 'door':
        tileColor = 'dimgray';
        break;
      
      case 'spawn':
        tileColor = 'lightgreen';
        break;
      
      case 'exit':
        tileColor = 'red';
        break;
      
      default:
        tileColor = 'white';
    }

    this.ctx.fillStyle = tileColor;
    this.ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
  }

  _paintRoom(room, tileSize) {
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(room.x * tileSize, room.y * tileSize, room.width * tileSize, room.height * tileSize);
  }
}

export default LevelPainter;
