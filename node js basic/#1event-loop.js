// const crypto = require('crypto')

// const start = Date.now()

// // Вызываются по 4 опреации за один раз
// crypto.pbkdf2('1234hhss', '5', 2000000, 64, 'sha512', () => {
// 	console.log('1 end', Date.now() - start);
// })
// crypto.pbkdf2('1234hhss', '5', 2000000, 64, 'sha512', () => {
// 	console.log('2 end', Date.now() - start);
// })
// crypto.pbkdf2('1234hhss', '5', 2000000, 64, 'sha512', () => {
// 	console.log('3 end', Date.now() - start);
// })
// crypto.pbkdf2('1234hhss', '5', 2000000, 64, 'sha512', () => {
// 	console.log('4 end', Date.now() - start);
// })
// crypto.pbkdf2('1234hhss', '5', 2000000, 64, 'sha512', () => {
// 	console.log('1 end', Date.now() - start);
// })
// crypto.pbkdf2('1234hhss', '6', 2000000, 64, 'sha512', () => {
// 	console.log('1 end', Date.now() - start);
// })
// crypto.pbkdf2('1234hhss', '7', 2000000, 64, 'sha512', () => {
// 	console.log('1 end', Date.now() - start);
// })
// crypto.pbkdf2('1234hhss', '8', 2000000, 64, 'sha512', () => {
// 	console.log('1 end', Date.now() - start);
// })
// crypto.pbkdf2('1234hhss', '9', 2000000, 64, 'sha512', () => {
// 	console.log('1 end', Date.now() - start);
// })
// crypto.pbkdf2('1234hhss', '10', 2000000, 64, 'sha512', () => {
// 	console.log('1 end', Date.now() - start);
// })

// Бесконечный цикл промисов

// let count = 0
// function recursivePromise(promise) {
// 	return promise.then(() => {
// 		console.log('promise', count += 1);
// 		recursivePromise(Promise.resolve())
// 	})
// }
// recursivePromise(Promise.resolve())

// setTimeout(() => console.log('timeout'), 0)