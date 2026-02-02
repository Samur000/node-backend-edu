const http = require('http');
const fs = require('fs');
const port = 4500;

http.createServer((req, res) => {
	const url = req.url
	res.setHeader("Content-Type", "text/html; charset=utf-8;")
	console.log(`URL: ${url}`);

	switch (url) {
		case '/':
			let data = fs.readFileSync('./public/index.html', { encoding: 'utf-8', flag: 'r' })
			res.write(data);
			console.log('main page');
			res.end()
			break;
		case '/contact':
			res.write('<h2>Contact</h2>');
			console.log('contact page');
			res.end()
			break;
		default:
			if (url.includes('/images')) {
				fs.readFile('./public' + url, {}, (error, data) => {
					if (error) { }

					console.log('========== GET ========');
					res.setHeader("Content-Type", "image/png")
					res.write(data)
					res.end()
				})
			} else {
				res.write('<h2>This page is not found. 404</h2>');
				console.log('404 page');
				res.end()
			}
	}

}).listen(port, () => console.log(`server is listening om port: https://localhost:${port}`))