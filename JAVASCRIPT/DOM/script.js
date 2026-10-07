// ## Código atual comentado

// ```javascript
// // ========================
// // DADOS DOS PRODUTOS
// // ========================

// // Array de objetos contendo os produtos disponíveis.
// // Cada produto possui um ID único, nome e preço.
// const itens = [
//     { id: 1, nome: "tv", preco: 10 },
//     { id: 2, nome: "geladeira", preco: 20 },
//     { id: 3, nome: "armario", preco: 30 }
// ];


// // ========================
// // ELEMENTOS DO HTML
// // ========================

// // Elemento onde os cards dos produtos serão adicionados.
// const produto = document.querySelector("#produto");

// // Array que representa o estado atual do carrinho.
// // Quando adicionamos ou removemos produtos,
// // esse array é alterado.
// const carrinho = [];

// // Elementos responsáveis pelas informações do carrinho.
// const totalCarrinho = document.querySelector("#totalCarrinho");
// const quantidadeCarrinho = document.querySelector("#quantidadeCarrinho");
// const listaCarrinho = document.querySelector("#listaCarrinho");


// // ========================
// // ATUALIZAÇÃO DO CARRINHO
// // ========================

// // Essa função pega o estado atual do array "carrinho"
// // e atualiza a interface.
// function atualizarCarrinho() {

//     // Soma o preço de todos os produtos do carrinho.
//     const total = carrinho.reduce((soma, produto) => {
//         return soma + produto.preco;
//     }, 0);

//     // Mostra a quantidade de produtos.
//     quantidadeCarrinho.textContent = `Itens: ${carrinho.length}`;

//     // Mostra o valor total.
//     totalCarrinho.textContent = `Total: R$ ${total}`;


//     // Limpa a lista visual antes de renderizar novamente.
//     // Isso evita que os produtos apareçam duplicados.
//     listaCarrinho.innerHTML = "";


//     // Percorre os produtos que estão atualmente no carrinho.
//     carrinho.forEach((produto) => {

//         // Cria os elementos HTML dinamicamente.
//         const itemCarrinho = document.createElement("div");
//         const nome = document.createElement("p");
//         const preco = document.createElement("p");
//         const botaoRemover = document.createElement("button");


//         // Coloca os dados do produto nos elementos.
//         nome.textContent = produto.nome;
//         preco.textContent = `R$ ${produto.preco}`;

//         botaoRemover.textContent = "REMOVER";


//         // Adiciona uma classe ao botão.
//         // Ela será usada pela delegação de eventos.
//         botaoRemover.classList.add("remover-produto");


//         // Guarda o ID do produto dentro do próprio botão.
//         //
//         // Exemplo:
//         // produto.id = 2
//         //
//         // O HTML terá algo equivalente a:
//         //
//         // <button data-id="2">REMOVER</button>
//         botaoRemover.dataset.id = produto.id;


//         // Coloca nome, preço e botão dentro do item.
//         itemCarrinho.append(nome, preco, botaoRemover);

//         // Coloca o item dentro da lista do carrinho.
//         listaCarrinho.append(itemCarrinho);
//     });
// }


// // ========================
// // DELEGAÇÃO DE EVENTOS
// // ========================

// // Em vez de criar um evento separado para cada
// // botão REMOVER, colocamos um único evento
// // no elemento pai: listaCarrinho.
// listaCarrinho.addEventListener("click", (event) => {

//     // event.target representa exatamente
//     // o elemento que foi clicado.
//     //
//     // Verificamos se o elemento clicado possui
//     // a classe "remover-produto".
//     if (event.target.classList.contains("remover-produto")) {

//         // dataset devolve texto.
//         //
//         // Por exemplo:
//         // data-id="2"
//         //
//         // retorna "2".
//         //
//         // Number() transforma "2" em 2.
//         const idProduto = Number(event.target.dataset.id);


//         // Procura no carrinho o produto
//         // que possui o mesmo ID.
//         const indice = carrinho.findIndex((produto) => {
//             return produto.id === idProduto;
//         });


//         // findIndex retorna -1 quando não encontra.
//         //
//         // Portanto só removemos se o produto existir.
//         if (indice !== -1) {
//             carrinho.splice(indice, 1);
//         }


//         // Procura o botão do card original
//         // que possui o mesmo data-id.
//         const botaoProduto = document.querySelector(
//             `[data-id="${idProduto}"]`
//         );


//         // Se encontrou o botão do card,
//         // volta ele para o estado original.
//         if (botaoProduto) {
//             botaoProduto.classList.remove("adicionado");
//             botaoProduto.textContent = "COMPRAR";
//         }


//         // Como o array carrinho mudou,
//         // redesenhamos o carrinho na tela.
//         atualizarCarrinho();


//         console.log(`Produto removido. ID: ${idProduto}`);
//         console.log(carrinho);
//     }
// });


// // ========================
// // CRIAÇÃO DOS CARDS
// // ========================

// // Percorre todos os produtos disponíveis.
// itens.forEach((item) => {

//     // Cria um card para cada produto.
//     const card = document.createElement("div");
//     const titulo = document.createElement("h3");
//     const preco = document.createElement("p");
//     const botao = document.createElement("button");


//     // Guarda o ID do produto dentro do botão.
//     //
//     // Exemplo:
//     // <button data-id="1">COMPRAR</button>
//     botao.dataset.id = item.id;


//     // Adiciona classes CSS.
//     card.classList.add("card-produto");
//     titulo.classList.add("titulo-produto");
//     preco.classList.add("preco-produto");
//     botao.classList.add("botao-produto");


//     // Coloca os dados do produto na interface.
//     titulo.textContent = item.nome;
//     preco.textContent = `R$ ${item.preco}`;
//     botao.textContent = "COMPRAR";


//     // ========================
//     // BOTÃO COMPRAR
//     // ========================

//     botao.addEventListener("click", () => {

//         // Alterna a classe "adicionado".
//         //
//         // Se não existe -> adiciona.
//         // Se existe -> remove.
//         botao.classList.toggle("adicionado");


//         // Se o botão possui a classe,
//         // significa que o produto foi adicionado.
//         if (botao.classList.contains("adicionado")) {

//             botao.textContent = "ADICIONADO";

//             // Adiciona o objeto inteiro ao carrinho.
//             carrinho.push(item);

//             console.log(`Voce adicionou: ${item.nome}`);

//         } else {

//             // Se clicou novamente,
//             // o produto será removido.
//             botao.textContent = "COMPRAR";


//             // Procura o produto utilizando seu ID.
//             const indice = carrinho.findIndex((produto) => {
//                 return produto.id === item.id;
//             });


//             // Remove somente se encontrou.
//             if (indice !== -1) {
//                 carrinho.splice(indice, 1);
//             }


//             console.log(`Voce removeu: ${item.nome}`);
//         }


//         // Toda vez que o estado do carrinho muda,
//         // atualizamos a interface.
//         atualizarCarrinho();

//         console.log(carrinho);
//     });


//     // Monta o card.
//     card.append(titulo, preco, botao);

//     // Adiciona o card na página.
//     produto.append(card);
// });
// ```

// ---

// # Como pensar nesse código

// O projeto possui basicamente três partes:

// ```text
// DADOS
// ↓
// ESTADO
// ↓
// INTERFACE
// ```

// ## Dados

// Os produtos disponíveis:

// ```javascript
// const itens = [
//     { id: 1, nome: "tv", preco: 10 },
//     ...
// ];
// ```

// Eles representam os produtos que existem no sistema.

// ---

// ## Estado

// O carrinho:

// ```javascript
// const carrinho = [];
// ```

// representa a situação atual da aplicação.

// Exemplo:

// ```javascript
// []
// ```

// significa:

// ```text
// Carrinho vazio
// ```

// Depois de adicionar TV:

// ```javascript
// [
//     { id: 1, nome: "tv", preco: 10 }
// ]
// ```

// Depois de adicionar geladeira:

// ```javascript
// [
//     { id: 1, nome: "tv", preco: 10 },
//     { id: 2, nome: "geladeira", preco: 20 }
// ]
// ```

// O array é a informação real.

// A interface apenas mostra o que está dentro dele.

// ---

// # A função atualizarCarrinho()

// Essa função pode ser entendida como:

// ```text
// PEGAR O ESTADO ATUAL
//         ↓
// ATUALIZAR A INTERFACE
// ```

// Sempre que o carrinho muda:

// ```javascript
// carrinho.push(...)
// ```

// ou:

// ```javascript
// carrinho.splice(...)
// ```

// chamamos:

// ```javascript
// atualizarCarrinho();
// ```

// A função então atualiza:

// ```text
// quantidade
// total
// lista de produtos
// botões
// ```

// ---

// # DOM Dinâmico

// Antes, os elementos normalmente já estavam escritos no HTML.

// Agora estamos criando HTML através do JavaScript:

// ```javascript
// document.createElement("div");
// document.createElement("p");
// document.createElement("button");
// ```

// Depois:

// ```javascript
// append()
// ```

// coloca esses elementos na página.

// Exemplo:

// ```javascript
// const titulo = document.createElement("h3");

// titulo.textContent = "TV";

// card.append(titulo);
// ```

// JavaScript cria algo equivalente a:

// ```html
// <h3>TV</h3>
// ```

// ---

// # dataset

// `dataset` permite colocar informações personalizadas dentro de um elemento HTML.

// JavaScript:

// ```javascript
// botao.dataset.id = item.id;
// ```

// Pode gerar:

// ```html
// <button data-id="1">
//     COMPRAR
// </button>
// ```

// Depois podemos recuperar:

// ```javascript
// event.target.dataset.id;
// ```

// Isso é muito útil para relacionar:

// ```text
// elemento HTML
// ↕
// objeto JavaScript
// ```

// ---

// # Por que usar ID?

// Antes utilizamos:

// ```javascript
// produto.nome === item.nome
// ```

// Mas nomes podem se repetir.

// Exemplo:

// ```javascript
// [
//     { id: 1, nome: "TV" },
//     { id: 2, nome: "TV" }
// ]
// ```

// Os nomes são iguais, mas os IDs são diferentes.

// Portanto:

// ```javascript
// produto.id === item.id
// ```

// é muito mais confiável.

// ---

// # Delegação de eventos

// Antes fazíamos:

// ```javascript
// botaoRemover.addEventListener(...)
// ```

// para cada botão criado.

// Agora fazemos:

// ```javascript
// listaCarrinho.addEventListener("click", ...)
// ```

// Existe apenas um evento no elemento pai.

// Depois:

// ```javascript
// event.target
// ```

// descobre qual filho foi clicado.

// Fluxo:

// ```text
// listaCarrinho
// │
// ├── produto
// │   └── REMOVER
// │
// ├── produto
// │   └── REMOVER
// │
// └── produto
//     └── REMOVER
// ```

// Existe um evento aqui:

// ```text
// listaCarrinho
//       ↓
// addEventListener
// ```

// Quando qualquer filho é clicado:

// ```javascript
// event.target
// ```

// informa qual foi.

// ---

// # Métodos que estamos reutilizando

// ### `forEach()`

// Percorre todos os elementos:

// ```javascript
// itens.forEach((item) => {

// });
// ```

// ---

// ### `reduce()`

// Transforma vários valores em um único resultado.

// Usamos para calcular o total:

// ```javascript
// const total = carrinho.reduce((soma, produto) => {
//     return soma + produto.preco;
// }, 0);
// ```

// ---

// ### `findIndex()`

// Procura a posição de um item:

// ```javascript
// const indice = carrinho.findIndex((produto) => {
//     return produto.id === idProduto;
// });
// ```

// Pode retornar:

// ```text
// 0
// 1
// 2
// 3
// ...
// ```

// Se não encontrar:

// ```text
// -1
// ```

// ---

// ### `splice()`

// Remove elementos do array:

// ```javascript
// carrinho.splice(indice, 1);
// ```

// Significa:

// ```text
// comece no índice encontrado
// e remova 1 elemento
// ```

// ---

// ### `classList.toggle()`

// Alterna uma classe:

// ```javascript
// botao.classList.toggle("adicionado");
// ```

// Pode fazer:

// ```text
// COMPRAR
// ↓ clique
// ADICIONADO
// ↓ clique
// COMPRAR
// ```

// ---

// # Progresso até aqui

// No DOM, já estudamos:

// ```text
// querySelector()
// querySelectorAll()

// textContent
// value

// classList.add()
// classList.remove()
// classList.toggle()
// classList.contains()

// addEventListener()

// event
// event.target

// preventDefault()

// createElement()
// append()

// innerHTML

// DOM dinâmico

// arrays como estado

// renderização da interface

// reduce()

// findIndex()

// splice()

// data-*
// dataset

// IDs para identificar objetos

// delegação de eventos
// ```

// E o conceito mais importante que começou a aparecer é:

// ```text
// ESTADO
// ↓
// INTERFACE
// ```

// O `carrinho` é o estado:

// ```javascript
// const carrinho = [];
// ```

// A função:

// ```javascript
// atualizarCarrinho();
// ```

// pega esse estado e transforma em interface.

// Esse raciocínio será muito importante mais para frente quando estudarmos frameworks como React.

// ---

// # Onde estamos no cronograma

// Já concluímos:

// ```text
// Fundamentos do JavaScript
// ✅

// Arrays e objetos
// ✅

// Métodos de arrays
// ✅

// JavaScript moderno
// ✅

// DOM básico
// ✅

// Eventos
// ✅

// Formulários básicos
// ✅

// DOM dinâmico
// ✅

// dataset
// ✅

// Delegação de eventos
// ✅
// ```

// Agora estamos entrando em:

// ```text
// Eventos de input e teclado
// ⬅ PRÓXIMO

// ↓
// busca de produtos

// ↓
// filter()

// ↓
// renderização baseada em pesquisa

// ↓
// localStorage

// ↓
// JSON

// ↓
// Promises

// ↓
// fetch()

// ↓
// async / await

// ↓
// APIs
// ```