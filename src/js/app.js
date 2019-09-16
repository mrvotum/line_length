import GetText from './getText';

const inputFile = document.querySelector('[data-id=inputFile]');

const readText = new GetText(inputFile);
readText.create();
