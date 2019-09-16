/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import Counter from './counter';

export default class GetText {
  constructor(inputFile) {
    this.inputFile = inputFile;
    // this.letterBtn = document.querySelector('[data-id=letterBtn]');
    // this.symbolBtn = document.querySelector('[data-id=symbolBtn]');
    // this.numberBtn = document.querySelector('[data-id=numberBtn]');
  }

  create() {
    if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
      console.error('The File APIs are not fully supported in this browser.');
    }

    this.addEventListener();
  }

  addEventListener() {
    this.inputFile.addEventListener('change', (evt) => {
      this.handleFileSelect(evt);
    });
  }

  handleFileSelect(evt) {
    const inputFile = evt.target.files[0];
    if (!inputFile.type.match('text.*')) {
      return alert(`${inputFile.name} is not a valid text file.`);
    }
    const reader = new FileReader();
    reader.readAsText(inputFile);

    reader.onload = function () {
      const textToArray = reader.result;
      console.log(`Символов в тексте: ${textToArray.length}`);
      // console.log(textToArray);

      const counter = new Counter(textToArray);
      counter.create();
    };
  }
}
