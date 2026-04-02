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

const nome = prompt("Digite seu nome:");
const idade = prompt("Digite sua idade:");
const cidade = prompt("Digite sua cidade:"); 
const peso = parseFloat(prompt("Digite seu peso:"));
const altura = parseFloat(prompt("Digite sua altuta:"));

const IMC = peso / (altura * altura);

console.log("Seja bem vindo," + nome + "residente da" + cidade + "sua idade é" + idade + "seu imc é" + IMC.toFixed(2));
