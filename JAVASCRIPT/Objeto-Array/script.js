// const carro = {
//     marca: "Ferrari",
//     modelo: "La Frrari",
//     ano: 2020,
//     cor: "Vermelho"
// };

// console.log(carro);
// console.log(carro.marca);
// console.log(carro.modelo);
// console.log(carro.ano);

// carro.preco = 2_000_000;

// console.log(carro.preco);

// carro.cor = "Preto";

// console.log(carro.cor);
// console.log(carro);








// const carro = [
//     {
//         marca : "Ferrari",
//         modelo : "F40",
//         ano : 2000
//     },
//     {
//         marca : "BMW",
//         modelo : "M4",
//         ano : 2027
//     },
//     {
//         marca : "Audi",
//         modelo : "RS6",
//         ano : 2025
//     }
// ];

// console.log(carro);
// console.log(carro[1].modelo)


// carro.forEach((veiculo) => {
//     console.log(`${veiculo.marca} - ${veiculo.modelo} - ${veiculo.ano}`);
// });








// const carros = [
//     {
//         marca : "Ferrari",
//         modelo : "F40",
//         ano : 2000
//     },
//     {
//         marca : "BMW",
//         modelo : "M4",
//         ano : 2027
//     },
//     {
//         marca : "Audi",
//         modelo : "RS6",
//         ano : 2025
//     }
// ];

// const carroEncontrado = carros.find((carro) => {
//     return carro.modelo === "BMW";
// });

// console.log(carroEncontrado.marca);








// const carros = [
//     { marca: "Ferrari", modelo: "F40", ano: 2000 },
//     { marca: "BMW", modelo: "M4", ano: 2027 },
//     { marca: "Audi", modelo: "RS6", ano: 2025 },
//     { marca: "BMW", modelo: "M3", ano: 2024 }
// ];

// const carrosRecentes = carros.filter((carro) => {
//     return carro.ano >= 2025;
// });

// console.log(carrosRecentes);







// const carros = [
//     { marca: "Ferrari", modelo: "F40", ano: 2000 },
//     { marca: "BMW", modelo: "M4", ano: 2027 },
//     { marca: "Audi", modelo: "RS6", ano: 2025 }
// ];

// const marcas = carros.map((carro) => {
//     return carro.marca;
// });

// console.log(marcas);








// const carros = [
//     { marca: "Ferrari", modelo: "F40", ano: 2000 },
//     { marca: "BMW", modelo: "M4", ano: 2027 },
//     { marca: "Audi", modelo: "RS6", ano: 2025 }
// ];

// const info = carros.map((carro) => {
//     return `${carro.marca} - ${carro.modelo}`;
// });

// console.log(info)







// const carros = [
//     { marca: "Ferrari", modelo: "F40", ano: 2000 },
//     { marca: "BMW", modelo: "M4", ano: 2027 },
//     { marca: "Audi", modelo: "RS6", ano: 2025 }
// ]

// const carrosRecentes = carros.filter((carro) => {
//     return carro.ano >= 2025;
// });

// const modelosRecentes = carrosRecentes.map((carro) => {
//     return carro.modelo;
// });

// console.log(modelosRecentes);







// const carros = [
//     { marca: "Ferrari", modelo: "F40", ano: 2000 },
//     { marca: "BMW", modelo: "M4", ano: 2027 },
//     { marca: "Audi", modelo: "RS6", ano: 2025 }
// ];

// const temCarroAntigo = carros.some((carro) => {
//     return carro.ano < 2010;
// });

// console.log(temCarroAntigo)






// const carros = [
//     { marca: "Ferrari", modelo: "F40", ano: 2000 },
//     { marca: "BMW", modelo: "M4", ano: 2027 },
//     { marca: "Audi", modelo: "RS6", ano: 2025 }
// ];

// const todosTemMarca = carros.every((carro) => {
//     return carro.marca;
// });

// console.log(todosTemMarca)





// const numeros = [5, 10, 15, 20];

// const soma = numeros.reduce((total, numero) => {
//     return total + numero;
// }, 0);

// console.log(soma);