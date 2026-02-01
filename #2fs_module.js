const fs = require('fs')
const path = require('path')

// File system


// создание папки
// fs.mkdir(path.join(`${__dirname}`, 'net'), err => {
// 	if (err) throw new Error(err)
// 	console.log('Папка создана');
// })


fs.writeFile(
	path.join(__dirname, 'net', 'myFile.txt'),
	"Hello world1",
	err => {
		if (err) throw err
		console.log('файл слоздан')
	}
)

fs.appendFile(
	path.join(__dirname, 'net', 'myFile.txt'),
	"\nAppend file",
	err => {
		if (err) throw err
		console.log('append слоздан')
	}
)