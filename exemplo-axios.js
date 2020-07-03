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
        console.log('a)', response.data.length);
    })
    .catch(function (error) {
        console.log(error);
    });


//
// async / await
//
(async () => {
    let response = await axios.get(config.url);
    console.log('b)', response.data.length);
})()


//
// async / await
//
const request = async () => {
    let response = await axios.get(config.url);
    console.log('c)', response.data.length);
    return response.data;
};

request().then(response => console.log('d)', response.length));


//
// async / await
//
async function getData() {
    try {
        let response = await axios.get(config.url);
        console.log('e)', response.data.length);
        const data = await response.data;
        return data;
    } catch (e) {
        console.error(e);
    }
}

getData().then(response => console.log('f)', response.length));


//
// async / await
//
const sendGetRequest = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('g)', response.data.length);
        return response.data;
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendGetRequest().then(response => console.log('f)', response.length));