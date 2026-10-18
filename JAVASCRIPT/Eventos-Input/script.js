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





// const produtos = [
//     { id: 1, nome: "TV", preco: 1200 },
//     { id: 2, nome: "Geladeira", preco: 2500 },
//     { id: 3, nome: "Notebook", preco: 3500 },
//     { id: 4, nome: "Armario", preco: 900 }
// ];



const resultado = document.querySelector("#resultado");

const produtos = [
    { nome: "TV", preco: 1200 },
    { nome: "Notebook", preco: 3500 },
    { nome: "Geladeira", preco: 2500 }
];


function criarCard(produto)  {
    
    const card = document.createElement("div");
    const nome = document.createElement("p");
    const preco = document.createElement("p");

    nome.textContent = produto.nome;
    preco.textContent = `R$ ${produto.preco}`;
    
    card.append(nome, preco);

    return card;
}

function renderizarProdutos(lista){
    resultado.innerHTML = "";

    if(lista.length === 0){
        const mensagem = document.createElement("p")
        mensagem.textContent = "Nenhum produto encontrado";
        resultado.append(mensagem);
        
        return;
    }

    lista.forEach((produto) => {
        const card = criarCard(produto);
        
        resultado.append(card);
    });
}

renderizarProdutos(produtos);