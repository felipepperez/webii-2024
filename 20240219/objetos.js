let carro = new Object();
carro.modelo = "Argo";
carro.marca = "Fiat";
carro.revisoes = ["2024-02-01", "2024-01-25"];
carro.info = () => {
    console.log(carro.modelo + ' ' + carro.marca + ' - ' + carro.revisoes.length);
}

carro.info();

let carroLiteral = {
    modelo: "Argo",
    marca: "Fiat",
    revisoes: ["2024-02-01", "2024-01-25"],
    info: () => {
        console.log(carroLiteral.modelo + ' ' + carroLiteral.marca + ' - ' + carroLiteral.revisoes.length);
    }
}

carroLiteral.info();

console.log(carroLiteral["modelo"]);
console.log(carroLiteral.modelo);

console.log(typeof carroLiteral.revisoes);
delete carroLiteral.revisoes;
console.log(typeof carroLiteral.revisoes);