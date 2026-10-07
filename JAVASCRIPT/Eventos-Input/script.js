// const busca = document.querySelector("#busca");
// const resultado = document.querySelector("#resultado");

// const produtos = [
//     "tv",
//     "geladeira",
//     "armario",
//     "notebook"
// ];



// busca.addEventListener("input", (event) =>{
//     const textoDigitado = event.target.value;  
//     console.log(`Voce digitou: ${textoDigitado}`);

//     const produtosFiltrados = produtos.filter((produto) => {
//         return produto.includes(textoDigitado);
//     });

//     resultado.innerHTML = "";

//     produtosFiltrados.forEach((produto) => {
//         const item = document.createElement("p");
//         item.textContent = produto;
//         resultado.append(item);
//     })
//     console.log(produtosFiltrados);
// });





const produtos = [
    { id: 1, nome: "TV", preco: 1200 },
    { id: 2, nome: "Geladeira", preco: 2500 },
    { id: 3, nome: "Notebook", preco: 3500 },
    { id: 4, nome: "Armario", preco: 900 }
];