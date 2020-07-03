// The fetch API is not implemented in Node.
// You need to use an external module for that, like node-fetch.
// https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined

const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        console.log(todos.length);
    })
    .catch(error => {
        console.warn('Failed!', error);
    });