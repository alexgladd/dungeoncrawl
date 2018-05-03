// hero actions

export const HeroActions = {
  move: 'HERO_MOVE',
  teleport: 'HERO_TELEPORT'
};

export const moveHero = (direction) => ({
  type: HeroActions.move,
  direction
});

export const teleportHero = (position) => ({
  type: HeroActions.teleport,
  position
});
