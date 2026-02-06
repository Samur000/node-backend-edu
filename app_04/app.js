// const http = require('http');
// const fs = require('fs').promises
// const path = require('path');
// const port = 4500;

// const mimeTypes = {
// 	'.html': 'text/html',
// 	'.js': 'text/javascript',
// 	'.css': 'text/css',
// 	'.json': 'application/json',
// 	'.png': 'image/png',
// 	'.jpg': 'image/jpg',
// 	'.gif': 'image/gif',
// 	'.svg': 'image/svg+xml',
// 	'.wav': 'audio/wav',
// 	'.mp4': 'video/mp4',
// 	'.woff': 'application/font-woff',
// 	'.ttf': 'application/font-ttf',
// 	'.eot': 'application/vnd/ms-fontobject',
// 	'.otf': 'application/font-otf',
// 	'.wasm': 'application/wasm',
// }

// function staticFile(res, filePath, ext) {
// 	res.setHeader("Content-Type", mimeTypes[ext] || 'text/plain')
// 	console.log(`URL: ./public${filePath}`);
// 	fs.readFile(`./public${filePath}`)
// 		.then(data => res.end(data))
// 		.catch(() => {
// 			res.statusCode = 404
// 			res.end()
// 		})
// }

// console.log(`Server ir runnimg... http://localhost:4500`);
// http.createServer(async (req, res) => {
// 	if (req.url === '/') {
// 		fs.readFile('./public/index.html', 'utf-8')
// 			.then(data => res.end(data))
// 			.catch(() => {
// 				res.statusCode = 404
// 				res.end()
// 			})

// 	} else if (req.url === '/contacts') {
// 		fs.readFile('./public/contacts.html', 'utf-8')
// 			.then(data => res.end(data))
// 			.catch(() => {
// 				res.statusCode = 404
// 				res.end()
// 			})

// 	} else {
// 		const extName = String(path.extname(req.url)).toLowerCase()
// 		if (extName in mimeTypes) {
// 			staticFile(res, req.url, extName)
// 		} else {
// 			res.statusCode = 404
// 			res.end(`<h1>This asdPAGE is not found. Error code: 404</h1>`)
// 		}
// 	}
// }).listen(port)


const http = require('http');
const fs = require('fs')
const path = require('path');
const port = 4500;

const mimeTypes = {
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.css': 'text/css',
	'.json': 'application/json',
	'.png': 'image/png',
	'.jpg': 'image/jpg',
	'.gif': 'image/gif',
	'.svg': 'image/svg+xml',
	'.wav': 'audio/wav',
	'.mp4': 'video/mp4',
	'.woff': 'application/font-woff',
	'.ttf': 'application/font-ttf',
	'.eot': 'application/vnd/ms-fontobject',
	'.otf': 'application/font-otf',
	'.wasm': 'application/wasm',
}

function staticFile(res, filePath, ext) {
	res.setHeader("Content-Type", mimeTypes[ext] || 'text/plain')
	console.log(`URL: ./public${filePath}`);
	 fs.readFile(`./public${filePath}`, (err, data) => {
		if (err) {
			res.statusCode = 404;
			res.end();
		} else {
			res.end(data);
		}
	})

}

console.log(`Server ir runnimg... http://localhost:4500`);
http.createServer(async (req, res) => {
	if (req.url === '/') {
		await fs.readFile('./public/index.html', 'utf-8', (err, data) => {
			if (err) {
				res.statusCode = 404
				res.end()
				return
			}
			res.end(data)
		})
	} else if (req.url === '/contacts') {
		await fs.readFile('./public/contacts.html', 'utf-8', (err, data) => {
			if (err) {
				res.statusCode = 404
				res.end()
				return
			}
			res.end(data)

		})
	} else {
		const extName = String(path.extname(req.url)).toLowerCase()
		if (extName in mimeTypes) {
			staticFile(res, req.url, extName)
		} else {
			res.statusCode = 404
			res.end(`<h1>This asdPAGE is not found. Error code: 404</h1>`)
		}
	}
}).listen(port)