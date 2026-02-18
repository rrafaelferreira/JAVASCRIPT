
// alert("Eu comecei JavaScript agora!");
// console.log("Hello Word!");
// String e texto 
// Qualquer coisa que esteja entre aspas vira texto:
// let nome = "Rafa";
// let cidade = "São Paulo";
// let numero = "10"; // Isso é texto, não número!
// Em string pode utilizar; aspas dupla"Rafa" | aspas simples'Rafa' | crase`Rafa`


// Aspas simples e duplas
// São praticamente iguais.

// Crase
// Permite colocar variável dentro:
// let nome = "Rafa";
// console.log(`Meu nome é ${nome}`);
// Isso não funciona com aspas simples ou duplas.

// Number é tipo de dado para numero(inteiro ou decimais)
// JavaScript nao separa inteiro e decimal
// Tudo é number



// Duas maneiras de escrever e chegar ao mesmo resultado

// let nome = "Rafa";       string(texto) 
// let idade = 20;          number(numero)

// console.log("Meu nome é " + nome);           
// console.log("Minha idade é " + idade);       



// let nome = "Rafa";
// let idade = 20;

// console.log(`Meu nome é ${nome}`);
// console.log(`Minha idade é ${idade}`);


let nome = "rafa";
let idade = 20;
let estudando = true;
let valor = '20';
let valorr = '20.5';

console.log(parseInt(valorr));          //Pega so a parte inteira, ignora o que vem depois do ponto. Converte para número inteiro. | EX: 20.5     | 20
console.log(parseFloat(valorr));        //Converte mantendo a parte decimal  | EX: 20.5    | 20.5
console.log(typeof valor);
console.log(typeof Number(valor));
console.log(typeof nome);
console.log(typeof idade);

console.log(typeof estudando); 
// No console retornou Boolean. 
// É um tipo de dado que apresenta somente dois valores. 
// True ou False | Verdadeiro ou Falso | Ligado ou Desligado | Sim ou Nao | Permitido ou bloqueado | 1 ou 0 (em logica)




// typeof

// typeof operador que mostra o tipo da variavel
// let valor = 10;
// console.log(typeof valor); // number





// Concatenacao

// Juntar texto usando +
// "rafa" + "silva"
// "rafa silva"
// Se tiver string envolvida, o + vira juntador de texto






// COERÇÃO AUTOMÁTICA

// Quando o JavaScript converte tipos automaticamente.
// "10" - 5
// O JS pensa:
// “Preciso de número aqui”
// Então converte "10" para número.
// Mas com +:
// "10" + 5
// Ele pensa:
// “Tem string, vou concatenar”
// Isso se chama coerção de tipo implícita.





// Number()

// Função que converte string em número explicitamente.
// Number("20")
// 20
// Isso é mais seguro do que deixar o JS decidir.



// | Código   | Tipo    |
// | -------- | ------- |
// | `"true"` | string  |
// | `true`   | boolean |
// | `"10"`   | string  |
// | `10`     | number  |


// | Operador | Com string                  |
// | -------- | --------------------------- |
// | `+`      | concatena                   |
// | `-`      | tenta converter para número |
// | `*`      | tenta converter para número |
// | `/`      | tenta converter para número |







// ⚠️ Regra importantíssima
// Se tiver string + qualquer coisa, o resultado vira string.