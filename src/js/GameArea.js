export default class GameArea {
  constructor(element) {
    this._element = element;
  }

  init() {
    const goblinImg = document.createElement('img');
    goblinImg.classList.add('area__img');
    goblinImg.src = '../img/goblin.png';
    goblinImg.alt = 'Гоблин';
    const goblinDiv = document.createElement('div');
    goblinDiv.classList.add('area__img-wrapper');
    goblinDiv.append(goblinImg);

    const area = document.querySelectorAll('.area__item');

    for (const cell of area) {
      if (cell.firstElementChild) {
        cell.firstElementChild.remove();
      }
    }

    const randomCell = Math.floor(Math.random() * area.length);

    area[randomCell].append(goblinDiv);
  }
}
