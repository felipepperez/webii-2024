const express = require('express');
const app = express();

const multer = require('multer');

let users = [
    {
        username: 'felipe',
        password: 'senha',
        logged: false
    },
    {
        username: 'perez',
        password: 'senha',
        logged: false
    }
];

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.post('/login', multer().none(), (req, res) => {
    let logged;
    const { username, password } = req.body;
    for (user of users) {
        if (user.username = username && user.password == password){
            user.logged = true;
            logged = user;
        }
    }
    if(logged){
        res.redirect('/logado');
    }else{
        res.redirect('/login.html');
    }
})

app.get('/logado', (req, res) => {
    res.send('Bem vindo seu logado!');
})

app.get('/informacoes/:ano/:mes', (req, res) => {
    res.send(`<h1>O ano é ${req.params.ano} e o mês é ${req.params.mes}</h1>`)
})

app.use(express.static('www'));

app.listen(3000);