const fs = require('fs')
const path = require('path')

// File system


// создание папки
// fs.mkdir(path.join(`${__dirname}`, 'net'), err => {
// 	if (err) throw new Error(err)
// 	console.log('Папка создана');
// })


// создание файла
// fs.writeFile(
// 	path.join(__dirname, 'net', 'myFile.txt'),
// 	"Hello world1",
// 	err => {
// 		if (err) throw err
// 		console.log('файл слоздан')
// 	}
// )

// добавлоение нового содержимого к файлу
// fs.appendFile(
// 	path.join(__dirname, 'net', 'myFile.txt'),
// 	" Append file",
// 	err => {
// 		if (err) throw err
// 		console.log(' append слоздан')
// 	}
// )


// чтение документа

// fs.readFile(
// 	path.join(__dirname, 'net', 'myFile.txt'),
// 	(err, data) => {
// 		if (err) throw err
// 		console.log(data) // <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 31 0a 41 70 70 65 6e 64 20 66 69 6c 65>
// 		// Чтобы не была такая непонятная запись, делаем вот что
// 		console.log(Buffer.from(data).toString()) //Hello world1 Append file
// 	}
// )
// ИЛИ ПРОСТО УКАЗАТЬ КОРДИРОВКУ


// Переименование файла. Сделал самостоятельно, по логике, получилоось с первого раза
// fs.rename(
// 	path.join(__dirname, 'net', 'myFile.txt'),
// 	path.join(__dirname, 'net', 'myFile2.txt'),
// 	(err) => {
// 		if (err) throw err
// 		console.log('файл переименован');
// 	}
// )