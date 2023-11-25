import GameArea from './GameArea';

document.addEventListener('DOMContentLoaded', () => {
  const gameArea = new GameArea(document.querySelector('.area'));

  setInterval(gameArea.goblinMoves, 1000);
})
