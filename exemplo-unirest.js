var unirest = require('unirest');

var req = unirest('GET', 'https://jsonplaceholder.typicode.com/todos')
	.end(function (res) {
		if (res.error) throw new Error(res.error);
		console.log(res.raw_body);
	});