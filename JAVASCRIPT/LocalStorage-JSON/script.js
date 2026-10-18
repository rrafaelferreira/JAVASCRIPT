// localStorage é uma área do navegador usada para guardar informações.



localStorage.setItem("curso", "JavaScript");
const cursoSalvo = localStorage.getItem("curso");
console.log(cursoSalvo);


console.log(localStorage.getItem("curso"));


// setItem()
//    ↓
// salva no navegador

// "nome" → "Rafael"

// getItem("nome")
//    ↓
// "Rafael"


localStorage.removeItem("nome");

localStorage.getItem("nome");
//  ↓
// null