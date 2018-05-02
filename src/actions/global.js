// global actions

export const GlobalActions = {
  newGame: 'GLOBAL_NEW_GAME',
  nextLevel: 'GLOBAL_NEXT_LEVEL'
};

export const startNewGame = () => ({
  type: GlobalActions.newGame
});

export const loadNextLevel = () => ({
  type: GlobalActions.nextLevel
});
