const readline = require('readline');

const keyboard = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let width;
let height;

keyboard.question('Qual a altura?', (response) => {
    height = response;
    keyboard.question('Qual a largura?', (response) => {
        width = response;
        if (width == height) {
            type = 'Quadrado';
        } else {
            type = 'Retângulo';
        }
        console.log(`O ${type} tem área ${width * height}`)
        keyboard.close();
    })
})