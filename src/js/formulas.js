import {
  counterLetterArr,
  counterNumberArr,
  counterSymbolArr,
  fullSymbolsArr,
} from './counterArrs';

export default class Formulas {
  constructor(textArr) {
    this.container = document.querySelector('[data-id=formulas]');
    this.btnsContainer = document.querySelector('[data-id=btnsContainer]');
    this.textArr = textArr;
    this.simbolsCount = textArr.length; // кол-во знаков в тексте
  }

  create() {
    this.calculate();
  }

  calculate() {
    this.btnsContainer.innerHTML = `
    <br>
    <span>рассчёт по</span>
    <a href="#" class="btnSmall" data-id="formulasA">Вариант A</a>
    <a href="#" class="btnSmall" data-id="formulasB">Вариант B</a>
    <a href="#" class="btnSmall" data-id="formulasC">Вариант C</a>`;

    this.addListeners();
  }

  addListeners() {
    this.formulasA = document.querySelector('[data-id=formulasA]');
    this.formulasB = document.querySelector('[data-id=formulasB]');
    this.formulasC = document.querySelector('[data-id=formulasC]');

    this.formulasA.addEventListener('click', () => {
      this.formulasA.classList.add('active');
      this.formulasB.classList.remove('active');
      this.formulasC.classList.remove('active');
      this.clearVariables();

      for (let i = 0; i < counterNumberArr.length; i += 1) {
        // его встреяаемость в тексте * ширина знака
        this.summ = this.summ + counterNumberArr[i][1] * counterNumberArr[i][2];
      }

      for (let i = 0; i < counterSymbolArr.length; i += 1) {
        // его встреяаемость в тексте * ширина знака
        this.summ = this.summ + counterSymbolArr[i][2] * counterSymbolArr[i][3];
      }

      for (let i = 0; i < counterLetterArr.length; i += 1) {
        // его встреяаемость в тексте * ширина знака
        this.summ = this.summ + counterLetterArr[i][2] * counterLetterArr[i][4]
        + counterLetterArr[i][3] * counterLetterArr[i][5];
      }

      this.summ = Math.ceil(this.summ); // округлили до целых

      this.Ey = ((this.summ) / this.simbolsCount).toFixed(3);

      this.linesCount = Math.ceil(160 / (12 * 0.3528));

      this.lineAverageLength = (117 / this.Ey).toFixed();

      this.pageVolume = this.lineAverageLength * this.linesCount;

      this.pagesCount = Math.ceil(this.simbolsCount / this.pageVolume);

      this.container.innerHTML = `
      _________________________________________
      <p>средняя ширина знаков ${this.Ey}мм</p>
      <p>кол-во строк на странице: ${this.linesCount}</p>
      <p>средняя длина строки (кол-во знаков в строке): ${this.lineAverageLength}</p>
      <p>Ёмкость страницы: ${this.pageVolume} символов</p>
      <p>кол-во страниц в книге: ${this.pagesCount}</p>`;
    });

    this.formulasB.addEventListener('click', () => {
      this.formulasB.classList.add('active');
      this.formulasA.classList.remove('active');
      this.formulasC.classList.remove('active');
      this.clearVariables();

      // перебор каждой буквы в тексте
      for (let i = 0; i < this.textArr.length; i += 1) {
        const el = this.textArr[i];

        // перебор каждой буквы из массива
        for (let j = 0; j < fullSymbolsArr.length; j += 1) {
          // находим красную строку
          if (fullSymbolsArr[j][0] === fullSymbolsArr[89][0] && el === fullSymbolsArr[89][0]) {
            this.paragraphCount += 1;
            this.paragraphsLength[this.paragraphCount] += 10; // абзацный отступ
          } else if (el === fullSymbolsArr[j][0]) {
            if (!this.paragraphsLength[this.paragraphCount]) {
              this.paragraphsLength[this.paragraphCount] = 0;
            }
            this.paragraphsLength[this.paragraphCount] += fullSymbolsArr[j][1];
          }
        }
      }

      for (let i = 0; i < this.paragraphsLength.length; i += 1) {
        this.paragraphLength += this.paragraphsLength[i];
      }

      console.log(`${this.paragraphLength}`);
      // 117mm - это длина строки
      this.linesInParagraphCount = Math.floor(this.paragraphLength / 117);
      console.log(`число строк в тексте ${this.linesInParagraphCount}`);

      this.linesInText = this.linesInParagraphCount * this.paragraphsLength.length;

      this.linesCount = Math.ceil(160 / (12 * 0.3528));
      this.pagesCount = Math.ceil(this.linesInParagraphCount / this.linesCount);

      this.container.innerHTML = `
      _________________________________________
      <p>считаем с учётом абзацного отступа (10мм)</p>
      <p>Обры строки: ${this.paragraphCount}</p>
      <p>Кол-во абзацев: ${this.paragraphsLength.length}</p>
      <p>Длина абзацев всех целиком: ${this.paragraphLength}</p>
      <p>Число строк в тексте ${this.linesInParagraphCount}</p>
      <p>Число страниц в книге: ${this.pagesCount}</p>`;
    });

    this.formulasC.addEventListener('click', () => {
      this.formulasA.classList.remove('active');
      this.formulasB.classList.remove('active');
      this.formulasC.classList.add('active');
      this.clearVariables();

      const contentEl = document.createElement('div'); // тут текст поделённый на абзацы
      contentEl.classList = 'content hyphens';

      let bigTextArr = '';

      for (let i = 0; i < this.simbolsCount; i += 1) {
        const element = this.textArr[i];
        // находим красную строку
        if (element !== fullSymbolsArr[89][0] && i !== this.simbolsCount - 1) {
          bigTextArr += element;
        } else {
          const spanEl = document.createElement('span');
          spanEl.classList = 'textPart';
          spanEl.textContent = bigTextArr;

          contentEl.appendChild(spanEl);
          bigTextArr = '';
        }
      }

      this.container.appendChild(contentEl); // текст сюда

      console.log(`Высота блока с текстом: ${this.container.offsetHeight}`);
      console.log(`Страниц: ${this.container.offsetHeight / 605}`);
    });
  }

  clearVariables() {
    this.Ey = null; // мат ожидание средней ширины знаков || Ey
    this.simbolWidth = null; // ширина символа || WX
    this.simbolFrequency = null; // частота встречаемости символа в тексте || pi
    this.summ = 0;
    this.lineAverageLength = null; // средняя длина строки (колв-во знаков в строке) || nср
    this.linesCount = null; // кол-во строк на странице || Lо
    this.pageVolume = null; // объём страницы || Eстр
    this.pagesCount = null; // кол-во страниц в книге
    this.paragraphCount = 0;
    this.paragraphsLength = []; // длина абзацев
    this.paragraphLength = 0; // длина абзаца
    this.linesInParagraphCount = null; // кол-во строк в абзаце
    this.linesInText = null; // кол-во строк в тексте
  }
}
