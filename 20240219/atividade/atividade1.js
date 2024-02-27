const readline = require('readline');

const keyboard = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let unitPrice;
let quantity;
let discount;

keyboard.question('Qual o preço unitário?', (response) => {
    unitPrice = response;
    keyboard.question('Qual a quantidade?', (response) => {
        quantity = response;
        keyboard.question('Qual o desconto?', (response) => {
            discount = response;
            console.log('O valor total é: ' + (unitPrice * quantity - discount));
            keyboard.close();
        })
    })
})