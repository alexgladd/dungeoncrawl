// game entities (anything that exists in the map)

// export const EntityTypes = {
//   hero: 'ENTITY_HERO',
//   monster: 'ENTITY_MONSTER',
//   item: 'ENTITY_ITEM'
// };

export class Entity {
  constructor(type, position={x:0,y:0}) {
    this.type = type;
    this.position = position;
  }

  static fromState(entityState) {
    return new Entity('UNKNOWN', entityState.position);
  }
}

export class Hero extends Entity {
  constructor(position) {
    super(Hero.type, position);
  }

  static fromState(heroState) {
    return new Hero(heroState.position);
  }
}
Hero.type = 'ENTITY_HERO';
