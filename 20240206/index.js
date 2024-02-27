const readline = require('readline');

console.time("repl");
console.log("Hello World");

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(each => {
    console.log(each);
})

const argv = process.argv.slice(2);
argv.forEach((each, index) => {
    console.log("\x1b[33m%s: \x1b[31m%s\x1b[0m", index, each);
})

console.timeEnd("repl");

const teclado = readline.createInterface({ input: process.stdin, output: process.stdout });

teclado.question('Digite seu nome: ',(resposta)=>{
    console.log("\x1b[33m%s\x1b[0m",resposta);
    teclado.close();
});