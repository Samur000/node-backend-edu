const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
	const url = req.url
	res.setHeader("Content-Type", "text/html; charset=utf-8;")
	console.log(`URL: ${url}`);

	switch (url) {
		case '/':
			let data = fs.readFileSync('./index.html', {encoding: 'utf-8', flag: 'r'})
			res.write(data);
			console.log('main page');
			break;
		case '/contact':
			res.write('<h2>Contact</h2>');
			console.log('contact page');
			break;
		default:
			res.write('<h2>This page is not found. 404</h2>');
			console.log('404 page');
	} 
	res.end()
}).listen(port, () => console.log(`server is listening om port: https://localhost:${port}`))