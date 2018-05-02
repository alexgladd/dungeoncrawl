// hero actions

export const HeroActions = {
  teleport: 'HERO_TELEPORT'
};

export const teleportHero = (position) => ({
  type: HeroActions.teleport,
  position
});
