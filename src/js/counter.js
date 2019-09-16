import { counterLetterArr, counterNumberArr, counterSymbolArr } from './counterArrs';
import CreateTable from './createTable';

export default class Counter {
  constructor(textArr) {
    this.textArr = textArr;
    this.counterRR = document.querySelector('[data-id=counter]');
  }

  create() {
    for (let i = 0; i < this.textArr.length; i += 1) {
      const el = this.textArr[i];

      for (let j = 0; j < counterLetterArr.length; j += 1) {
        if (el === counterLetterArr[j][0]) {
          counterLetterArr[j][2] += 1;
        } else if (el === counterLetterArr[j][1]) {
          counterLetterArr[j][3] += 1;
        }
      }

      for (let j = 0; j < counterNumberArr.length; j += 1) {
        if (el === counterNumberArr[j][0]) {
          counterNumberArr[j][1] += 1;
        }
      }

      for (let j = 0; j < counterSymbolArr.length; j += 1) {
        if (el === counterSymbolArr[j][0]) {
          counterSymbolArr[j][2] += 1;
        }
      }
    }

    new CreateTable(counterLetterArr).create();
    this.counterRR.textContent = `Всего символов: ${this.textArr.length}`;
  }
}
