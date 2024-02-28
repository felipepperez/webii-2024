const http = require('http');
const colors = require('colors');
const url = require('url');
const fs = require('fs');

const dir = __dirname;

let webadr = 'http://localhost:3000/index.html?ano=2019&mes=maio';
let q = new URL(webadr);
console.log('host='.red, q.host);
console.log('pathname='.red, q.pathname);
console.log('search='.red, q.search);
q.searchParams.forEach((value, key) => {
    console.log('%s='.red, key, value);
});

const server = http.createServer((req, res) => {
    console.log('Requisção recebida');
    console.log('request.method='.yellow, req.method);
    console.log('request.url='.yellow, req.url);
    let q = new URL(req.url, `${req.protocol}://${req.headers.host}/`);
    console.log('host='.red, q.host);
    console.log('pathname='.red, q.pathname);
    console.log('search='.red, q.search);
    q.searchParams.forEach((value, key) => {
        console.log('%s='.red, key, value);
    });

    try {
        let file = fs.readFileSync(dir + '\\www' + q.pathname);
        res.write(file);
        res.end();
    } catch (error) {
        console.log(error);
        if (q.pathname == "/json") {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            let carro = {
                modelo: "Argo",
                marca: "Fiat",
                ano: 2019,
                revisoes: ["2018-05-10", "2018-08-25"]
            }
            res.end(JSON.stringify(carro));
        } else {
            let file = fs.readFileSync(dir + '/www/index.html');

            res.writeHead(200, { 'Content-Type': 'text-html' });
            res.write(file);
            res.end();
        }
    }


})

server.listen(3000);