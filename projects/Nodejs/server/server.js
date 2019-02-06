'use strict';

const server = require('net').createServer();
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

server.on('connection', socket => {
    console.log(`client conected`);
    let username = false;
    /* console.log(socket); */
    socket.on('data', data => {
        /* console.log(decoder.write(data)); */
        let msg = decoder.write(data).trim();
        if (!username) {
            username = msg;
            if (username === 'maria') {
                socket.write(' Sorry Maria, you can´t be here.');
                socket.end();
            }
            process.stdout.write(` ${username} is joined\n`);

        } else if (username === 'admin' || 'ADMIN' || 'Admin') {
                process.stdout.write(`\n ADMIN says: ${msg}\n`);

            }  else {
              process.stdout.write(`\n ${username} says: ${msg}\n`); 
        }
        
        if (msg === 'logout') {
            socket.end();
        }
    });
    socket.on('end', () => {
        console.log('Byeee');
    });
});
server.listen(8080, () => {
    console.log(`Server listening on port ${8080}`);
});