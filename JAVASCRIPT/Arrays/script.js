// Um array em JavaScript é uma lista ordenada de elementos, que podem ser de
// qualquer tipo. Arrays são usados para armazenar coleções de dados, e oferecem
// uma série de métodos para realizar operações como inserção, remoção e
// iteração sobre os elementos


// lenght -> numero de elementos de um array
// lenght -1 -> acessa o ultimo elemento do array

// linguagens.splice(2, 0, 99) Indice 2 | removera 0 elemntos | 99 = o que ira ser adicionado   Splice adiciona o elemento no meio do array ou pode ser para remover tambem
// Ex: const linguagens = ["python", "java", "99", "javascript", "C"]

// push()    → adiciona no final do array
// pop()     → remove do final do array

// unshift() → adiciona no início do array
// shift()   → remove do início do array

// indexof() -> acha o indice de um elemento
// reverse() -> inverte o array




// let frutas = ["maca", "banana", "uva"]
// console.log(frutas[0]) //maca

// frutas.push("Manga"); // Adiciona "Manga" ao final do array
// frutas.pop(); // Remove o último elemento do array



// const linguagens = ["python", "java", "javascript", "C"]

// console.log(linguagens[0])
// console.log(linguagens[2])
// console.log(linguagens.length) // retorna o tamanho ou quantidade 
// console.log(linguagens.length - 1) // 



// const linguagens = ["python", "java", "javascript", "C"]

// // linguagens.push("PHP");    Adiciona um novo valor ao final do array
// console.log(linguagens);
// linguagens.pop();
// console.log(linguagens);
// linguagens.push("C#");
// console.log(linguagens)
// linguagens.pop();
// console.log(linguagens)




// const linguagens = ["python", "java", "javascript"]

// linguagens.push("C#")
// console.log(linguagens)
// linguagens.unshift("PHP")
// console.log(linguagens)
// linguagens.shift()
// console.log(linguagens)
// linguagens.pop()
// console.log(linguagens)




// const nomes = ["Ana", "Carlos", "João", "Maria"];

// for (let i = 0; i < nomes.length; i++){
//     console.log(nomes[i]);
// }




// const linguagens = ["Python", "Java", "JavaScript", "C#"];

// linguagens.forEach((linguagens) => {
//     console.log(linguagens);
// });




// const linguagens = ["Python", "Java", "JavaScript", "C#"];

// linguagens.forEach((linguagem) => {
//     console.log("Linguagem: " + linguagem);
// });





// const linguagens = ["Python", "Java", "JavaScript", "C#"];

// linguagens.forEach((linguagem, indice) => {
//     console.log(`Linguagem ${indice + 1}:  ${linguagem}`);
// });