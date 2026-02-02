const http = require('http')
const port = 4000;

const data = {
	userName: 'Samur',
	password: '123qwerty'
}


const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8;")
	console.log(`URL: ${req.url}`);
	if (req.url === '/getdata') {
		res.write(JSON.stringify(data))
	} else {
		res.write('HW')
	}



	console.log(req.method);
	res.end()
}).listen(port, () => {
	console.log(`server is listening om port: https://localhost:${port}`);
})