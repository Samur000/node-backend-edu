const path = require('path')

// console.log(path.basename(__filename)); //Имя текущего файла с расширением.
// console.log(path.basename(__dirname)); //Имя текущей папки.
// console.log(path.dirname(__filename)); //Путь к папке, в которой лежит файл.
// console.log(path.dirname(__dirname)); //Путь к родительской папке текущей директории.

// console.log(path.); 
// console.log(path.extname(__filename)); // расширение файла

// console.log(path.parse(__filename)); // инфа о директории в виде объекта
// console.log(path.parse(__filename).root); // самая начальноая директори, или название диска
// console.log(path.parse(__filename).dir); // полный путь к директории
// console.log(path.parse(__filename).base); // полное название файла
// console.log(path.parse(__filename).ext); // расширение файла, аналог(строка 9)
// console.log(path.parse(__filename).name); // название файла без расширения


console.log(path.join(__dirname, '/src', 'script.js')); //генерация пути
console.log(path.resolve(__dirname, '/src', 'script.js')); //генерация пути