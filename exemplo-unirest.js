var unirest = require('unirest');

var req = unirest('GET', 'http://localhost:3000')
    .end(function (res) {
        if (res.error) throw new Error(res.error);
        console.log(res.raw_body);
    });