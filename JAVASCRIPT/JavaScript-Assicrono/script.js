// No JavaScript síncrono, o código executa de cima para baixo, uma linha por vez.
// O JavaScript assíncrono permite que o código execute tarefas demoradas. Em segundo plano sem bloquear a interface ou parar o restante do programa.


// Exemplo: 
// console.log("Primeiro");

// setTimeout(() => {
//     console.log("Segundo");
// }, 2000);

// console.log("Terceiro");

// Resultado:
// Primeiro
// Terceiro
// Segundo



// setTimeout(() => {
//     console.log("Executou");
// }, 2000);

// não significa:
// "vai executar exatamente em 2 segundos"

// Significa mais próximo de:
// "não execute antes de aproximadamente 2 segundos; depois disso, execute quando o JavaScript estiver livre para fazer isso."



// Onde isso é usado :

// buscar dados de uma API
// carregar informações
// esperar uma resposta de servidor
// ler algum recurso
// temporizadores


// SÍNCRONO
// uma tarefa termina antes da próxima continuar

// ASSÍNCRONO
// uma tarefa pode ficar aguardando enquanto outras continuam











// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// console.log("C");

// Resultado:
// A
// C
// B

// O motivo é que o setTimeout() não executa aquela função imediatamente. Ele agenda a função para depois.

// E essa função que passamos para o setTimeout():
// () => {
//     console.log("B");
// }

// é uma callback.

// Callback significa, de forma simples:
// uma função que entregamos para outra função executar depois.

// pode ser lido como:
// "setTimeout, guarde essa função e execute ela depois."

