export default class GameEnd {
  constructor() {
    this.missedClicks = 0;
    this.hitClicks = 0;
  }

  checkLose() {
    if (this.missedClicks >= 5) {
      alert(`Вы проиграли. Вы попали ${this.hitClicks} раз и промахнулись ${this.missedClicks} раз по цели.`);
      this.hitClicks = 0;
      this.missedClicks = 0;
    }
  }

  checkWin() {
    if (this.hitClicks >= 5) {
      alert(`Вы выиграли! Вы попали ${this.hitClicks} раз и промахнулись ${this.missedClicks} раз по цели.`);
      this.hitClicks = 0;
      this.missedClicks = 0;
    }
  }
}
