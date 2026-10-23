// localStorage é uma área do navegador usada para guardar informações.



// localStorage.setItem("curso", "JavaScript");
// const cursoSalvo = localStorage.getItem("curso");
// console.log(cursoSalvo);


// console.log(localStorage.getItem("curso"));


// setItem()
//    ↓
// salva no navegador

// "nome" → "Rafael"

// getItem("nome")
//    ↓
// "Rafael"


// localStorage.removeItem("nome");

// localStorage.getItem("nome");
//  ↓
// null







// localStorage.setItem("idade", 20);

// const idadeSalva = localStorage.getItem("idade");

// console.log(idadeSalva);
// console.log(typeof idadeSalva);

// const idadeNumero = Number(localStorage.getItem("idade"));

// console.log(idadeNumero);
// console.log(typeof idadeNumero);







// Objetos não funcionam direito no localStorage. 
// O localStorage trabalha com texto. Então precisamos transformar o objeto em texto antes de salvar.
// Para isso existe: JSON.stringify()


// const produto = {
//     nome: "Notebook",
//     preco: 3500
// };

// const produtoTexto = JSON.stringify(produto);

// console.log(produtoTexto);
// console.log(typeof produtoTexto);





// JSON.stringify() -> transforma um objeto JavaScript em texto.

// JSON.parse() -> pega um texto em formato JSON e transforma novamente em objeto JavaScript.


// const produto = { 
//     nome: "Notebook",
//     preco: 3500
// };

// localStorage.setItem("produto", JSON.stringify(produto));

// const produtoSalvo = localStorage.getItem("produto");

// console.log(produtoSalvo);
// console.log(typeof produtoSalvo);


// const produtoConvertido = JSON.parse(produtoSalvo);

// console.log(produtoConvertido);
// console.log(typeof produtoConvertido);
// console.log(produtoConvertido.nome);
// console.log(produtoConvertido.preco);