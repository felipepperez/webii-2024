let carroLiteral = {
    modelo: "Argo",
    marca: "Fiat",
    revisoes: ["2024-02-01", "2024-01-25"],
    info: () => {
        console.log(carroLiteral.modelo + ' ' + carroLiteral.marca + ' - ' + carroLiteral.revisoes.length);
    }
}

let acesso = false;

module.exports = carroLiteral;