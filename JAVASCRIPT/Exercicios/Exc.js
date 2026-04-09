// Crie um programa em Python que: Crie uma variável chamada numero1 e atribua a ela o valor 15. Crie outra variável chamada numero2 e atribua a ela o valor 7. Some as duas variáveis e armazene o resultado em uma nova variável chamada soma. Imprima na tela o valor da soma com a mensagem.

// const numero1 = 15
// const numero2 = 7

// soma = numero1 + numero2
// console.log(soma)






















// Crie um programa em Python que: Crie uma constante chamada PI com o valor 3.14159. Crie uma variável chamada raio e atribua o valor 5. Calcule a área do círculo (fórmula: PI * raio * raio) e guarde em uma variável chamada area. Imprima na tela o resultado. Crie um outro programa em Python que: Pergunte ao usuário seu nome e sua idade. Imprima a mensagem: Olá, <nome>! Você tem <idade> anos.

// const pi = 3.14159
// const raio = 5

// const area = pi * raio * raio
// console.log(area)


// let nome = prompt("Digite seu nome:");
// let idade = prompt("Digite sua idade:");


// console.log("Olá, " + nome + "! Você tem " + idade + " anos.");
























// Projeto Prático Crie um programa em Python que interaja com o usuário para coletar dados pessoais (nome, idade, cidade), calcular o IMC (com peso e altura informados), e informar se a pessoa está com peso ideal ou não. O programa deve usar os conceitos de variáveis, tipos e entrada/saída. Requisitos: Pedir ao usuário o nome, idade, cidade, peso e altura. Calcular o IMC = peso / (altura * altura) Mostrar uma mensagem de boas-vindas com o nome e cidade. Mostrar a idade do usuário. Mostrar o valor do IMC com 2 casas decimais. Tratar entradas para garantir que peso e altura sejam números válidos.

// const nome = prompt("Digite seu nome:");
// const idade = prompt("Digite sua idade:");
// const cidade = prompt("Digite sua cidade:"); 
// const peso = parseFloat(prompt("Digite seu peso:"));
// const altura = parseFloat(prompt("Digite sua altuta:"));

// const IMC = peso / (altura * altura);

// console.log(`Seja bem vindo, ${nome}  residente da cidade de ${cidade}.  Sua idade é ${idade}  seu imc é  ${IMC.toFixed(2)}`);



















//Crie um programa em Python que: Peça ao usuário duas notas para dois alunos (total de 4 notas). Calcule a média de cada aluno. Exiba para cada aluno a mensagem correspondente: "Aprovado" se a média for maior ou igual a 7; "Recuperação" se a média for maior ou igual a 5 e menor que 7; "Reprovado" se a média for menor que 5.

// let notaa = parseFloat(prompt("Digite uma nota para o aluno A:"));
// let notab = parseFloat(prompt("Digite uma nota para o aluno B:"));

// let media = (notaa + notab) / 2;

// function resultado(media) {
//     if (media >= 7){
//         return "Aprovado!";
//     }else if (media >= 5){
//         return "Recuperacao!"
//     }else{
//         return "Reprovado!"
//     }
// }

// console.log("Media:", media.toFixed(2));
// console.log("Resultado:", resultado(media));



























// Crie um programa que solicite ao usuário: Idade da pessoa Se possui carteira de motorista (True ou False) O programa deve verificar se a pessoa pode dirigir. Para isso, a pessoa precisa ter 18 anos ou mais e ter carteira. Exiba na tela: "Pode dirigir" se a pessoa atender aos critérios "Não pode dirigir" caso contrário Dica: use os operadores >= e and.

// let idade = parseInt(prompt("Digite sua idade:"));
// let cnh = prompt("Possui carteira ? (S/N):");

// if (idade >= 18 && cnh.toUpperCase() === "S"){
//     console.log("Pode Dirigir");
// }else{
//     console.log("Nao pode Dirigir");
// }





















// Crie um programa que peça ao usuário um número inteiro e determine: Se o número é positivo, negativo ou zero. Se o número é par ou ímpar (apenas se for diferente de zero). O programa deve exibir mensagens como: "Número positivo e par" "Número negativo e ímpar" "Número é zero"

// let n = parseInt(prompt("Digite um numero:"));

// if (n === 0){
// console.log("Numero é zero");
// }else{
//     let tipo = ""

//     // positivo e negativo
//     if (n > 0){
//         tipo = "Numero é positivo";
//     }else{
//         tipo = "Numero é negativo";
//     }

//     // par e impar
//     if (n % 2 === 0){
//         tipo += " e par";
//     }else{
//         tipo += " e impar";
//     }

//     console.log(tipo);
// }




























// Você vai criar um programa que solicita ao usuário um número e informa se ele é positivo, negativo ou zero. Para isso: Utilize input() para ler o valor digitado pelo usuário. Converta o texto digitado para número usando float(). Utilize uma estrutura condicional if/elif/else para determinar a situação do número: Se o número for maior que 0, informe que é positivo. Se o número for menor que 0, informe que é negativo. Se o número for igual a 0, informe que o número é zero.

// let n = parseFloat(prompt("Digite um numero:"));

// if (n === 0){
//     console.log("O numero é zero");
// }else if(n > 0){
//     console.log("O numero é positivo");
// }else{
//     console.log("O numero é negativo");
// }
























// Escreva um programa em Python usando um loop while que imprima a palavra "Olá" cinco vezes.

// let p = 1;

// while (p <= 5) {
//     console.log("olá" + p);
//     p++;
// }