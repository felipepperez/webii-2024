const WebSocket = require('ws');
const moment = require('moment');

const colors = require('colors');

let rand = Math.floor(Math.random() * 5 + 1) * 1000;
console.log(rand);
setTimeout(() => {
    const client = new WebSocket('ws://localhost:8080');

    client.on('open', () => {
        setInterval(() => {
            client.send(`client ${id} - ${moment().format('DD/MM/YYYY - hh:mm:ss')}`);
        }, rand);
    })

    let id;
    const regex = /client (\d+) - \d{2}\/\d{2}\/\d{4} - \d{2}:\d{2}:\d{2}/;
    client.on('message', message => {
        if (!id) {
            id = message;
            console.log(`cliente ${id}`);
        } else {
            const match = message.toString('utf-8').match(regex);
            const sender = parseInt(match[1]);
            console.log(messageColors(sender,`${message}`));
        }
    })
}, rand);

function messageColors(id, message) {
    switch (id) {
        case 1:
            return colors.green(message);
        case 2:
            return colors.red(message);
        case 3:
            return colors.yellow(message);
        default:
            return colors.blue(message);
    }
}
