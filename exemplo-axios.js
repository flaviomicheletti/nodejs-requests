const axios = require('axios');

const config = {
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos',
    headers: {}
};

//
// promisse
//
axios(config)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });

//
// async / await
//
(async () => {
    let res = await axios.get(config.url);
    console.log(res.data);
})()

// request = async () => {
//     let res = await axios.get(config.url);
//     return res.data;
// };
