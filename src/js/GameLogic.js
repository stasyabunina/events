export default class GameLogic {
  constructor(gameEnd) {
    this.gameEnd = gameEnd;
  }

  userClick() {
    const area = document.querySelectorAll('.area__item');

    for (const cell of area) {
      cell.addEventListener('click', (e) => {
        if (e.target.className === 'area__img') {
          this.gameEnd.hitClicks = this.gameEnd.hitClicks + 1;
          cell.innerHTML = '';
        } else {
          this.gameEnd.missedClicks = this.gameEnd.missedClicks + 1;
          cell.innerHTML = '';
        }

        this.gameEnd.checkWin();
        this.gameEnd.checkLose()

        this.userProgress();
      })
    }
  }

  userProgress() {
    const userWins = document.querySelector('.user__wins');
    const userLoses = document.querySelector('.user__loses');

    userWins.textContent = `${this.gameEnd.hitClicks}`;
    userLoses.textContent = `${this.gameEnd.missedClicks}`;
  }

  hammerHover() {
    const hammer = document.querySelector('.cursor');
    const area = document.querySelectorAll('.area__item');

    for (const cell of area) {
      cell.addEventListener('mousemove', (e) => {
        if (e.target.className === 'area__img') {
          cell.style.cursor = 'none';
          hammer.style.display = 'block';
          hammer.style.top = `${event.pageY}px`;
          hammer.style.left = `${event.pageX}px`;
        } else {
          cell.style.cursor = 'auto';
          hammer.style.display = 'none';
        }
      })
    }
  }
}


