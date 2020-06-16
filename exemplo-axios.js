var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',
    headers: {}
};

axios(config)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
