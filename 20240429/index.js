const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

let id = 1;
server.on('connection', ws => {
    console.log(`conectou client ${id} !`);
    ws.send(id++);
    ws.on('message', message => {
        console.log(`received: ${message}`);
        for (client of server.clients) {
            //if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            //}
        }
    })
})