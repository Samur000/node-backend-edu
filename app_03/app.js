const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 4500;

const mineTypes = {
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
	res.setHeader("Content-Type", mineTypes[ext])
	fs.readFile(`./public${filePath}`,  (error, data) => {
		if (error) {
			res.statusCode = 404
			// res.end()
		}
		console.log(`url FILE === ./public${filePath}`);
		res.end(data)
	})
}

http.createServer((req, res) => {
	const url = req.url
	console.log(`URL: ${url}`);

	switch (url) {
		case '/':
			console.log('main page');
			staticFile(res, '/index.html', '.html')
			break;
		case '/contact':
			console.log('contact page');
			res.write('<h2>Contacts  БЛЯ</h2>')
			res.end()
			break
		default:
			const extname = String(path.extname(url)).toLocaleLowerCase()
			if (extname in mineTypes) {
				staticFile(res, url, extname)
			} else {
				res.statusCode = 404
				res.end()
			}
			break;
	}

}).listen(port)