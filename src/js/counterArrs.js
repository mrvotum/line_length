const counterLetterArr = [
  ['А', 'а', 0, 0, 2.356, 1.869], // Аа 0
  ['Б', 'б', 0, 0, 2.133, 1.864], // Бб 1
  ['В', 'в', 0, 0, 2.208, 1.703], // Вв 2
  ['Г', 'г', 0, 0, 1.844, 1.385], // Гг 3
  ['Д', 'д', 0, 0, 2.617, 1.935], // Дд 4
  ['Е', 'е', 0, 0, 1.997, 1.761], // Ее 5
  ['Ё', 'ё', 0, 0, 1.997, 1.761], // Ёё 6
  ['Ж', 'ж', 0, 0, 3.539, 2.646], // Жж 7
  ['З', 'з', 0, 0, 2.245, 1.641], // Зз 8
  ['И', 'и', 0, 0, 2.480, 1.943], // Ии 9
  ['Й', 'й', 0, 0, 2.480, 1.943], // Йй 10
  ['К', 'к', 0, 0, 2.278, 1.769], // Кк 11
  ['Л', 'л', 0, 0, 2.476, 1.881], // Лл 12
  ['М', 'м', 0, 0, 2.939, 2.299], // Мм 13
  ['Н', 'н', 0, 0, 2.410, 1.914], // Нн 14
  ['О', 'о', 0, 0, 2.642, 1.881], // Оо 15
  ['П', 'п', 0, 0, 2.410, 0.914], // Пп 16
  ['Р', 'р', 0, 0, 2.158, 1.922], // Рр 17
  ['С', 'с', 0, 0, 2.369, 1.720], // Сс 18
  ['Т', 'т', 0, 0, 2.162, 1.563], // Тт 19
  ['У', 'у', 0, 0, 2.274, 1.712], // Уу 20
  ['Ф', 'ф', 0, 0, 2.910, 2.642], // Фф 21
  ['Х', 'х', 0, 0, 2.356, 1.691], // Хх 22
  ['Ц', 'ц', 0, 0, 2.571, 2.009], // Цц 23
  ['Ч', 'ч', 0, 0, 2.150, 1.703], // Чч 24
  ['Ш', 'ш', 0, 0, 3.551, 2.683], // Шш 25
  ['Щ', 'щ', 0, 0, 3.708, 2.778], // Щщ 26
  ['Ъ', 'ъ', 0, 0, 2.650, 1.939], // Ъъ 27
  ['Ы', 'ы', 0, 0, 2.861, 2.261], // Ыы 28
  ['Ь', 'ь', 0, 0, 2.100, 1.654], // Ьь 29
  ['Э', 'э', 0, 0, 2.373, 1.724], // Ээ 30
  ['Ю', 'ю', 0, 0, 3.543, 2.509], // Юю 31
  ['Я', 'я', 0, 0, 2.332, 1.823]  // Яя 32
];

const counterNumberArr = [
  ['0', 0, 2.162],
  ['1', 0, 2.162], 
  ['2', 0, 2.162], 
  ['3', 0, 2.166], 
  ['4', 0, 2.162], 
  ['5', 0, 2.162], 
  ['6', 0, 2.162], 
  ['7', 0, 2.162], 
  ['8', 0, 2.162], 
  ['9', 0, 2.162]
];

const counterSymbolArr = [
  ['.', 'Точка', 0, 0.819],        // 0
  [',', 'Запятая', 0, 0.819],      // 1
  ['!', 'Восклицательный', 0, 0.819],            // 2
  ['?', 'Вопросительный', 0, 1.749], 		   // 3
  [' ', 'Пробел', 0, 1.200], 	   // 4
  ['-', 'Тире', 0, 1.616], 		   // 5
  ['–', 'Среднее тире', 0, 2.340], // 6
  ['—', 'Длинное тире', 0, 3.142], // 7
  ['"', 'Кавычки', 0, 1.253],      // 8
  ['(', 'Открывающая скоб', 0, 1.364],            // 9
  [')', 'Закрывающая скоб', 0, 1.364],           // 10
  [':', 'Двоеточие', 0, 0.819],           // 11
  [';', 'Точка с запятой', 0, 0.819]            // 12
];

export {counterLetterArr, counterNumberArr, counterSymbolArr};