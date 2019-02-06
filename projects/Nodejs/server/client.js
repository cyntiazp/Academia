'use strict';
const net = require('net');
let newClient = net.connect(8080, 'localhost', () => {
    console.log(' Enter your username');
    process.stdin.on('data', data => {
        console.log( `\n ${data} Write a message:`);
        //event on terminal
        newClient.write(data);
    });
    newClient.on('data', data => {
        process.stdout.write(data)
    });
});