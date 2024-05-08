const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

let id = 1;
let clients = [];
server.on('connection', ws => {
    const id_connection = id++;
    console.log(`conectou client ${id_connection} !`);
    ws.on('message', message => {
        const data = JSON.parse(message);
        if (data.name) {
            clients.push({ id: id_connection, name: data.name });
        }
        if (data.message) {
            console.log(`received: ${clients.find((client) => id_connection == client.id).name} ${data.message}`);
            for (client of server.clients) {
                //if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(`${clients.find((client) => id_connection == client.id).name}: ${data.message}`);
                //}
            } 
        }
    })
})