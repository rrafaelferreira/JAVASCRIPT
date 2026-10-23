// // Uma API (Application Programming Interface, ou Interface de Programação de Aplicações) é um conjunto de regras, protocolos e padrões que permite que diferentes sistemas de software se comuniquem e troquem dados entre si.

// Uma API é, de forma simples, uma ponte para um sistema conversar com outro.
// Então a API funciona como uma espécie de intermediário.

// Quando o seu site conversa com uma API, ele normalmente faz isso através de uma requisição HTTP.
// A requisição é basicamente um pedido.


// REQUEST
// = requisição / pedido

// RESPONSE
// = resposta


// Os metodos:

// GET → buscar dados
// POST → enviar/criar dados
// PUT ou PATCH → atualizar dados
// DELETE → remover dados






// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((resposta) => {
//     return resposta.json();
// })
// .then((dados) => {
//     console.log(dados);
//     console.log(dados.name);
//     console.log(dados.email);

// });





// fetch("https://jsonplaceholder.typicode.com/users")
// .then((resposta) => {
//     return resposta.json();
// })

// .then((dados) => {
//     dados.forEach((usuario) => {
//         console.log(`Nome: ${usuario.name}, com email: ${usuario.email}`);
//     });
// });





// const usuarios = document.querySelector("#usuarios");

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((resposta) => {
//     return resposta.json();
// })

// .then((dados) => {
//     dados.forEach((usuario) => {
//         const nome = document.createElement("p");
//         nome.textContent = `${usuario.name} - ${usuario.email}`
//         usuarios.append(nome);
//     })
// })







// const usuarios = document.querySelector("#usuarios");

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((resposta) => {
//     return resposta.json();
// })

// .then((dados) => {
//     dados.forEach((usuario) => {
//         const card = document.createElement("div");
//         const nome = document.createElement("h3");
//         const email = document.createElement("p");
//         const username = document.createElement("p");

//         card.classList.add("card-usuario");
//         nome.classList.add("nome-usuario");
//         email.classList.add("email-usuario");
//         username.classList.add("username-usuario");

//         nome.textContent = usuario.name
//         email.textContent = usuario.email;
//         username.textContent = `@${usuario.username}`;
        
//         card.append(nome, email, username);

//         usuarios.append(card);
//     })
// })








////////////////////// TRATAMENTO DE ERRO //////////////////////



// fetch("https://jsonplaceholder.typicode.com/users;daiodad")
// .then((resposta) => {
    
//     if (!resposta.ok) {
//         throw new Error("Erro na requisição");
//     }

//     return resposta.json();
// })
// .then((dados) => {
//     console.log(dados);
// });






// O catch()método de Promiseinstâncias agenda uma função para ser chamada quando a promessa for rejeitada.
// throw gera o erro e .catch() recebe e trata esse erro.





// fetch("https://jsonplaceholder.typicode.com/users")
// .then((resposta) => {
//     if (!resposta.ok) {
//         throw new Error("Erro na requisição");
//     }

//     return resposta.json();
// })
// .then((dados) => {
//     console.log(dados);
// })
// .catch((erro) => {
//     console.log(erro.message);
// })






//////////////// ASYNC e AWAIT ////////////////


// async function buscarUsuario() {
//     const resposta = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//     );

//     if (!resposta.ok) {
//         throw new Error("Erro na requisição");
//     }

//     const dados = await resposta.json();

//     console.log(dados);
// }

// buscarUsuario();




// try
// = tente executar

// catch
// = se der erro, trate aqui

// finally
// = no final, execute isso de qualquer jeito



async function buscarUsuario() {
    try {
        const resposat = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!resposat.ok) {
            throw new Error("Erro na Requisição");
        }

        const dados = await resposat.json();

        console.log(dados);

    } catch (erro) {

        console.log(`Erro: ${erro.message}`);
    
    } finally {
        console.log("Requisição finalizada");
    }
}

buscarUsuario()