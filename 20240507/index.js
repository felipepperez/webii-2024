const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
})

const users = [];
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('users', users);

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('data', (data) => {
        users.push(data);
        io.emit('user', data);
    });
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
})