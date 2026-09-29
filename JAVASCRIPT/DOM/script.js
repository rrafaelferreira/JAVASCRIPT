// O DOM HTML (Modelo de Objeto de Documento HTML) é um modelo de objeto para documentos HTML .



//ACEESSANDO HTML 

// O DOM HTML pode ser usado para acessar elementos HTML.
// A forma mais comum de acessar um elemento HTML é usando o atributo `id` iddo elemento:



// <html>
// <body>

// <p id="demo"></p>

// <script>
// // Access a paragraph Element
// const myPara = document.getElementById("demo");

// // Change the content of the Element
// myPara.innerHTML = "Hello World!";
// </script>

// </body>
// </html>



// No exemplo acima, o getElementById método usado id="demo"para encontrar o elemento.
// id="demo"é uma propriedade HTML
// getElementById()é um método DOM
// innerHTMLé uma propriedade DOM




/////////////////////////////////////////////////////////Manipulacao do DOM/////////////////////////////////////////////////////////

// const nome = document.querySelector("#nome");
// const curso = document.querySelector(".curso");

// console.log(nome, curso);

// console.log(nome.textContent, curso.textContent);

// nome.textContent = "Carlos";
// curso.textContent = "Ciencia da Computacao";

// console.log(nome.textContent, curso.textContent);
// O textContent serve tanto para ler quanto para alterar o texto





// ClassList

// add()      → adiciona classe
// remove()   → remove classe
// toggle()   → adiciona ou remove. Classe não existe → adiciona | Classe já existe → remove
// contains() → verifica se existe. Retorna False ou True



// const mensagem = document.querySelector("#mensagem");

// mensagem.classList.add("ativo");
// console.log(mensagem.classList.contains("ativo"));
// mensagem.classList.remove("ativo");






// const botaoTema = document.querySelector("#botaoTema");
// const pagina = document.querySelector("#pagina");

// botaoTema.addEventListener("click", () => {
//     pagina.classList.toggle("escuro");
// });







// const botaoTema = document.querySelector("#botaoTema");
// const pagina = document.body

// botaoTema.addEventListener("click", () => {
//     pagina.classList.toggle("escuro");

//     if (pagina.classList.contains("escuro")){
//         botaoTema.textContent = "Tema Claro";
//     }else {
//         botaoTema.textContent = "Tema Escuro";
//     }
// });






// const opcoes = document.querySelectorAll(".opcao");

// opcoes.forEach((opcao) => {
    
//     opcao.addEventListener("click", (event) => {
//         console.log(`Voce clicou em: ${event.target.textContent}`);
//     });
// });



////////////////////////////////////FORMULARIO////////////////////////////////////






// const login = document.querySelector("#login");

// login.addEventListener("submit",  (event) => {
//     event.preventDefault();

//     console.log("Login Enviado");
// });







// const login = document.querySelector("#login");
// const email = document.querySelector("#email");

// login.addEventListener("submit", (event) => {
//     event.preventDefault();

//     console.log(`Email Digitado: ${email.value}`);
// })






// const login = document.querySelector("#login");
// const email = document.querySelector("#email");


// login.addEventListener("submit", (event) => {
//     event.preventDefault();

//      if (email.value.trim() === ""){  // O trim() remove os espaços do começo e do fim da string.
//         console.log("Preencha o campo de email");
//     } else {
//         console.log(`Email digitado ${email.value}`);
//     }
// });






// const login = document.querySelector("#login");
// const email = document.querySelector("#email");
// const mensagemErro = document.querySelector("#mensagemErro");


// login.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if (email.value.trim() === ""){
//         mensagemErro.textContent = "Preencha este campo";
//     } else {
//         mensagemErro.textContent = "";
//         console.log(`Email digitado: ${email.value}`);
//     }
// });







// const login = document.querySelector("#login");
// const email = document.querySelector("#email");
// const mensagemErro = document.querySelector("#mensagemErro");

// login.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if (email.value.trim() === ""){
//         mensagemErro.textContent = "Preencha este campo";
//         email.classList.add("erro");
//     } else {
//         mensagemErro.textContent = "";
//         email.classList.remove("erro");

//         console.log(`Email digitado: ${email.value}`);
//     }
// });







// const login = document.querySelector("#login");
// const email = document.querySelector("#email");
// const mensagemErro = document.querySelector("#mensagemErro");

// login.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if (email.value.trim() === ""){
//         mensagemErro.textContent = "Preencha este campo";
//         email.classList.add("erro");
//     } else if (!email.validity.valid) {
//         mensagemErro.textContent = "Informe um email valido";
//         email.classList.add("erro");
//     } else {
//         mensagemErro.textContent = "";
//         email.classList.remove("erro");

//         console.log(`Email válido: ${email.value}`)
//     }
// });








// const login = document.querySelector("#login");
// const email = document.querySelector("#email");
// const senha = document.querySelector("#senha");

// const erroEmail = document.querySelector("#erroEmail");
// const erroSenha = document.querySelector("#erroSenha");


// login.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if (email.value.trim() === ""){
//         erroEmail.textContent = "Preencha este campo";
//         email.classList.add("erro");
//     } else {
//         erroEmail.textContent = "";
//         email.classList.remove("erro");
//     }
//     if (senha.value.trim() === ""){
//         erroSenha.textContent = "Preencha este campo";
//         senha.classList.add("erro");
//     } else {
//         erroSenha.textContent = "";
//         senha.classList.remove("erro");

//         console.log(`Email válido: ${email.value}`)
//     }
// })









// const login = document.querySelector("#login");
// const email = document.querySelector("#email");
// const senha = document.querySelector("#senha");

// const erroEmail = document.querySelector("#erroEmail");
// const erroSenha = document.querySelector("#erroSenha");


// login.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if (email.value.trim() === ""){
//         erroEmail.textContent = "Preencha este campo";
//         email.classList.add("erro");
//     } else {
//         erroEmail.textContent = "";
//         email.classList.remove("erro");
//     }
//     if (senha.value.trim() === ""){
//         erroSenha.textContent = "Preencha este campo";
//         senha.classList.add("erro");
//     } else if (senha.value.length < 8){
//         erroSenha.textContent = "Senha Curta";
//         senha.classList.add("erro");
//     } else {
//         erroSenha.textContent = "";
//         senha.classList.remove("erro");

//         console.log(`Email válido: ${email.value}`)
//     }
// })











// const login = document.querySelector("#login");
// const email = document.querySelector("#email");
// const senha = document.querySelector("#senha");

// const erroEmail = document.querySelector("#erroEmail");
// const erroSenha = document.querySelector("#erroSenha");


// login.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let formularioValido = true;

//     if (email.value.trim() === ""){
//         erroEmail.textContent = "Preencha este campo";
//         email.classList.add("erro");
//         formularioValido = false;

//     } else {
//         erroEmail.textContent = "";
//         email.classList.remove("erro");
//     }
//     if (senha.value.trim() === ""){
//         erroSenha.textContent = "Preencha este campo";
//         senha.classList.add("erro");
//         formularioValido = false;

//     } else if (senha.value.length < 8){
//         erroSenha.textContent = "A senha deve conter pelo menos 8 carcteres.";
//         senha.classList.add("erro");
//         formularioValido = false;

//     } else {
//         erroSenha.textContent = "";
//         senha.classList.remove("erro");
//     }
//     if (formularioValido){
//         console.log("Login enviado com sucesso");
//         console.log(`Email válido: ${email.value}`);
//     }
// });








const login = document.querySelector("#login");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

const erroEmail = document.querySelector("#erroEmail");
const erroSenha = document.querySelector("#erroSenha");


login.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValido = validarEmail();
    const senhaValida = validarSenha();

    if (emailValido && senhaValida){
        console.log("Login enviado com sucesso");
    }

function validarEmail(){
    if (email.value.trim() === ""){
        erroEmail.textContent = "Preencha este campo";
        email.classList.add("erro");
        
        return false;

    } 
    
    if (!email.validity.valid){
        erroEmail.textContent = "Informe um email valido";
        email.classList.add("erro");

        return false;
    }
    erroEmail.textContent = "";
    email.classList.remove("erro");

    return true;
}

function validarSenha(){
    if (senha.value.trim() === ""){
        erroSenha.textContent = "Preencha este campo";
        senha.classList.add("erro");
        
        return false;

    } 
    
    if (senha.value.length < 8){
        erroSenha.textContent = "A senha deve conter pelo menos 8 carcteres.";
        senha.classList.add("erro");
        
        return false;

    }  
    
    erroSenha.textContent = "";
    senha.classList.remove("erro");
    
    return true;
}
});