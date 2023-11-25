import GameArea from './GameArea';
import GameLogic from './GameLogic';
import GameEnd from './GameEnd';

document.addEventListener('DOMContentLoaded', () => {
  const gameArea = new GameArea(document.querySelector('.area'));

  const gameEnd = new GameEnd();

  const gameLogic = new GameLogic(gameEnd);
  gameLogic.userClick();
  gameLogic.hammerHover();

  setInterval(gameArea.init, 1000);
})
