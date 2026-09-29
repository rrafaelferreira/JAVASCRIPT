
// find() Procura o primeiro elemento que atende à condição, para quando encontra o primeiro true.
// filter() Retorna todos os elementos que atendem à condição. O resultado é sempre um array.
// map() Transforma cada item e cria um novo array.
// some() Verifica se pelo menos um elemento atende à condição. Retorna: true ou false
// every() Verifica se todos os elementos atendem à condição.
// reduce() Percorre o array acumulando um resultado.




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



// Find()

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



// Filter()

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



// Map()

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



// Filter() e Map()

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



// Some()

// const carros = [
//     { marca: "Ferrari", modelo: "F40", ano: 2000 },
//     { marca: "BMW", modelo: "M4", ano: 2027 },
//     { marca: "Audi", modelo: "RS6", ano: 2025 }
// ];

// const temCarroAntigo = carros.some((carro) => {
//     return carro.ano < 2010;
// });

// console.log(temCarroAntigo)



// Every()

// const carros = [
//     { marca: "Ferrari", modelo: "F40", ano: 2000 },
//     { marca: "BMW", modelo: "M4", ano: 2027 },
//     { marca: "Audi", modelo: "RS6", ano: 2025 }
// ];

// const todosTemMarca = carros.every((carro) => {
//     return carro.marca;
// });

// console.log(todosTemMarca)



// Reduce()

// const numeros = [5, 10, 15, 20];
// const soma = numeros.reduce((total, numero) => {
//     return total + numero;
// }, 0);

// console.log(soma);




////////////////////////////////////////////DESESTRUTURACAO DE OBJETO//////////////////////////////////////////// 

// const computador = {
//     processador: "Ryzen 7",
//     memoria: "32GB",
//     placaVideo: "RTX 5070",
//     armazenamento: "1TB"
// };

// const {processador, placaVideo} = computador

// console.log(processador)
// console.log(placaVideo)





////////////////////////////////////////////DESESTRUTURACAO DE ARRAY////////////////////////////////////////////


// - em objetos, a desestruturação usa o nome da propriedade
// - em arrays, a desestruturação usa a posição


// const frutas = ["Maçã", "Banana", "Uva", "Manga"];

// const [primeiraFruta, segundaFruta] = frutas

// console.log(primeiraFruta)
// console.log(segundaFruta)






////////////////////////////////////////////SPREAD////////////////////////////////////////////

// Ele serve para “espalhar” os valores de um array ou objeto.



// const linguagens = ["JavaScript", "Python", "Java"];
// const novasLinguagens = [...linguagens, "C#", "PHP"];

// console.log(novasLinguagens)






// const carro = {
//     marca: "Ferrari",
//     modelo: "F40",
//     cor: "Vermelho"
// };
// console.log(carro)
// const carroAtualizado = {
//     ...carro,
//     cor: "Preto"
// };

// console.log(carroAtualizado)



////////////////////////////////////////////Rest Operator////////////////////////////////////////////

// Em vez de espalhar valores, ele junta os valores restantes.



// const linguagens = ["JavaScript", "Python", "Java", "C#", "PHP"];
// const [primeiro, ...outras] = linguagens

// console.log(primeiro);
// console.log(outras);







// function mostrarNomes(...nomes){
//     console.log(nomes);
// }

// mostrarNomes("Joao", "Rafael", "Caio", "Lis");







// function mostrarNomes(...nomes){
//     nomes.forEach((nome) => {
//         console.log(`Nome: ${nome}`);
//     });
// }
//  mostrarNomes("Joao", "Rafael", "Caio", "Lis");







// function calcularMedia(...numeros) {

//     const soma = numeros.reduce((total, numero) => {
//         return total + numero;
//     }, 0);

//     return soma / numeros.length;
// }

// console.log(calcularMedia(10, 8, 6));








// function calcularDesconto(preco, desconto = 10) {
//     const valorDesconto = preco * desconto / 100;

//     return preco - valorDesconto;
// }

// console.log(calcularDesconto(100,20));