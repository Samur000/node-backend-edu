const http = require('http');
const port = 3500;



http.createServer((req, res) => {
	const url = req.url
	res.setHeader("Content-Type", "text/html; charset=utf-8;")
	console.log(`URL: ${url}`);

	switch (url) {
		case '/':
			res.write('<h2>Main</h2>');
			console.log('main page');
			process.stdout.write('main page\n')
			break;
		case '/contact':
			res.write('<h2>Contact</h2>');
			console.log('contact page');
			break;
		default:
			res.write('<h2>This page is not found. 404</h2>');
			console.log('404 page');
			break;
	}
	res.end()
}).listen(port, () => {
	console.log(`server is listening om port: https://localhost:${port}`);
})