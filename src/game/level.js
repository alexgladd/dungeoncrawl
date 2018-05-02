// game level logic

import DungeonFactory from 'dungeon-factory';

class Level {
  constructor(rooms, tiles) {
    this.rooms = rooms;
    this.tiles = tiles;
  }

  get spawnLocation() {
    if (!this._spawnLocation) {
      this._createLocations();
    }

    return this._spawnLocation;
  }

  get exitLocation() {
    if (!this._exitLocation) {
      this._createLocations();
    }

    return this._exitLocation;
  }

  _createLocations() {
    this._spawnRoomIdx = Math.floor(Math.random() * this.rooms.length);
    const spawnRoom = this.rooms[this._spawnRoomIdx];
    const spawnMid = Level.getRoomMiddle(spawnRoom);

    let greatestDistance = 0.0;
    let exitRoom;
    for(let i = 0; i < this.rooms.length; i++) {
      if (i === this._spawnRoomIdx) continue;

      const room = this.rooms[i];
      const roomMid = Level.getRoomMiddle(room);
      const distance = Math.sqrt(Math.abs(roomMid.x - spawnMid.x) + Math.abs(roomMid.y - spawnMid.y));

      if (distance > greatestDistance) {
        greatestDistance = distance;
        exitRoom = room;
      }
    }

    this._spawnLocation = Level.getRoomMiddle(spawnRoom, true);
    this._exitLocation = Level.getRoomMiddle(exitRoom, true);
  }

  static getRoomMiddle(room, toInt=false) {
    if (toInt) {
      return {
        x: room.x + Math.floor(room.width / 2.0),
        y: room.y + Math.floor(room.height / 2.0)
      };
    } else {
      return {
        x: room.x + room.width / 2.0,
        y: room.y + room.height / 2.0
      };
    }
  }

  static randomRoomLocation(room) {
    return {
      x: room.x + Math.floor(Math.random() * room.width),
      y: room.y + Math.floor(Math.random() * room.height)
    };
  }

  static createRandom(width, height) {
    const level = DungeonFactory.generate({ width, height });
    return new Level(level.rooms, level.tiles);
  }
}

export default Level;
