/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import { counterNumberArr, counterSymbolArr } from './counterArrs';

export default class createTable {
  constructor(counterArr) {
    this.counterArr = counterArr;
    this.lettersTable = document.querySelector('[data-id=lettersTable]');
    this.rowFrom = 0; // строка от 0 до 11
    this.rowTo = 11;
  }

  create() {
    console.log('рисуем таблицу');

    this.createButtons();

    while (this.rowTo <= this.counterArr.length) {
      const rowBoldEl = document.createElement('div');
      rowBoldEl.className = 'rowBold';

      this.createBoldRow(rowBoldEl);
    }
  }

  createButtons() {
    const header = document.querySelector('[data-id=header]');

    const divEl = document.createElement('div');
    divEl.className = 'btnsHolder';
    divEl.innerHTML = `
    <a href="#" class="btn" data-id="letterBtn">Буквы</a>
    <a href="#" class="btn" data-id="symbolBtn">Символы</a>
    <a href="#" class="btn" data-id="numberBtn">Цифры</a>`;

    header.appendChild(divEl);

    this.letterBtn = document.querySelector('[data-id=letterBtn]');
    this.symbolBtn = document.querySelector('[data-id=symbolBtn]');
    this.numberBtn = document.querySelector('[data-id=numberBtn]');

    this.addEventListeners();
  }

  createBoldRow(rowBoldEl) {
    for (let i = 1; i < 3; i += 1) {
      this.createRow(rowBoldEl, i);
    }

    this.rowFrom += 11;
    this.rowTo += 11;
  }

  createBoldRowNumber(rowBoldEl, arr) {
    for (let i = 1; i < 3; i += 1) {
      this.createRowNumber(rowBoldEl, i, arr);
    }

    this.rowFrom += 11;
    this.rowTo += 11;
  }

  createBoldRowSymbol(tableEl, arr) {
    for (let i = 1; i < 3; i += 1) {
      this.createRowSymbol(tableEl, i, arr);
    }

    this.rowFrom += 11;
    this.rowTo += 2;
  }

  createRow(rowBoldEl, rowCount) {
    const rowEl = document.createElement('div');
    const hooks = ['', ''];
    let k = null;

    if (rowCount % 2) {
      // нечётный, первая строка
      rowEl.className = 'row letter';
      k = 0;
    } else {
      rowEl.className = 'row';
      k = 2;
      hooks[0] = '(';
      hooks[1] = ')';
    }

    for (let i = this.rowFrom; i < this.rowTo; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.className = 'cell';
      cellEl.innerHTML = `${this.counterArr[i][k]}${hooks[0]}${this.counterArr[i][k + 1]}${hooks[1]}`;

      rowEl.appendChild(cellEl);
    }
    rowBoldEl.appendChild(rowEl);

    (rowCount % 2) ? this.lettersTable.appendChild(rowBoldEl) : this.lettersTable.appendChild(rowBoldEl);
  }

  createRowNumber(rowBoldEl, rowCount, arr) {
    const rowEl = document.createElement('div');
    let k = null;

    if (rowCount % 2) {
      // нечётный, первая строка
      rowEl.className = 'row letter';
      k = 0;
    } else {
      rowEl.className = 'row';
      k = 1;
    }

    for (let i = 0; i < 10; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.className = 'cell';
      cellEl.innerHTML = `${arr[i][k]}`;

      rowEl.appendChild(cellEl);
    }
    rowBoldEl.appendChild(rowEl);

    (rowCount % 2) ? this.lettersTable.appendChild(rowBoldEl) : this.lettersTable.appendChild(rowBoldEl);
  }

  createRowSymbol(tableEl, rowCount, arr) {
    const rowEl = document.createElement('tr');
    let k = null;

    if (rowCount % 2) {
      // нечётный, первая строка
      rowEl.className = 'boldRow';
      k = 1;
    } else {
      rowEl.className = 'tableRow';
      k = 2;
    }

    for (let i = this.rowFrom; i < this.rowTo; i += 1) {
      const cellEl = document.createElement('td');
      cellEl.className = 'tableCell';
      cellEl.innerHTML = `${arr[i][k]}`;

      rowEl.appendChild(cellEl);
    }
    tableEl.appendChild(rowEl);

    (rowCount % 2) ? this.lettersTable.appendChild(tableEl) : this.lettersTable.appendChild(tableEl);
  }

  addEventListeners() {
    this.letterBtn.addEventListener('click', () => {
      this.clearTable();
      this.rowFrom = 0;
      this.rowTo = 11;

      while (this.rowTo <= this.counterArr.length) {
        const rowBoldEl = document.createElement('div');
        rowBoldEl.className = 'rowBold';

        this.createBoldRow(rowBoldEl);
      }
    });

    this.numberBtn.addEventListener('click', () => {
      this.clearTable();
      const rowBoldEl = document.createElement('div');
      rowBoldEl.className = 'rowBold';

      this.createBoldRowNumber(rowBoldEl, counterNumberArr);
    });

    this.symbolBtn.addEventListener('click', () => {
      this.clearTable();
      this.rowFrom = 0;
      this.rowTo = 11;

      while (this.rowTo <= counterSymbolArr.length) {
        const tableEl = document.createElement('table');
        tableEl.className = 'symbolsTable';

        this.createBoldRowSymbol(tableEl, counterSymbolArr);
      }
    });
  }

  clearTable() {
    const childCount = this.lettersTable.childElementCount;
    for (let i = 0; i < childCount; i += 1) {
      this.lettersTable.firstElementChild.remove();
    }
  }
}
