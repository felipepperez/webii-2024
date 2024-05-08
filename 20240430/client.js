const WebSocket = require('ws');
const readline = require('readline');

const client = new WebSocket('ws://localhost:8080');

const teclado = readline.createInterface({ input: process.stdin, output: process.stdout });

client.on('open', () => {
    teclado.question('Digite seu nome: ', (name) => {
        client.send(JSON.stringify({ name }));
        sendMessage();
    });
});

client.on('message',(message)=>{
    console.log(`${message}`);
})

function sendMessage(){
    teclado.question('', (message) => {
        client.send(JSON.stringify({ message }))
        sendMessage();
    });
}


