// Em qualquer linguagem de programação, o código precisa tomar decisões e realizar ações de acordo, dependendo de diferentes entradas. Por exemplo, em um jogo, se o número de vidas do jogador é 0, então o jogo acaba. Em um aplicativo de clima, se estiver sendo observado pela manhã, ele mostra um gráfico do nascer do sol; Mostra estrelas e uma lua se for noite.



// Sintaxe básica

// if (condicao) {
//   codigo para executar caso a condição seja verdadeira
// } else {
//   senão, executar este código
// }




// const idade = 20;

// if (idade >= 18) {
//     console.log("Maior de idade");
// } else {
//     console.log("Menor de idade");
// }



////////////////////////////////////////////Operador Ternário////////////////////////////////////////////



// Com operador ternário, podemos escrever:

// const idade = 20;

// const resultado = idade >= 18
//     ? "Maior de idade"
//     : "Menor de idade";

// console.log(resultado);


// condição
//    ?
// valor se for true
//    :
// valor se for false


// Entao:
// idade >= 18 ? "Maior" : "Menor"


// pode ser lido como:

// idade é maior ou igual a 18?
// Se sim, "Maior".
// Se não, "Menor".




// const nota = 8;

// const situacao = nota >= 7
//     ? "Aprovado"
//     : "Reprovado"

// console.log(situacao)





////////////////////////////////////////////Optional Chaining////////////////////////////////////////////


// const aluno = {
//     nome: "Rafael",
//     curso: {
//         nome: "Sistemas de Informação"
//     }
// };

// console.log(aluno.curso?.nome);


// const aluno2 = {
//     nome: "Carlos"
// };

// console.log(aluno2.curso?.nome);






// const produto = {
//     nome: "Notebook"
// };
// const preco = produto.preco ?? "Preco nao Informado"
// console.log(preco);