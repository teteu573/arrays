//let jogador=["neymar","messi","cristiano","lewandoski","benzema"];

// for(let vaca = 0; vaca < jogador.length; vaca++) {
//     console.log(jogador[vaca]);
// }

//metodo map criar um novo array que contem o comrimento do array jogador

// let novosJogador = jogador.map((jogador)=>{
//     return jogador.length;
// })

// console.log(novosJogador); //    exibir o novo array 

// let legumes = ["batata","cenoura","beterraba","beringela", "chuchu"];

// //let legumesComB = legumes.find(b => b.startsWith("b"));

// let legumesComB = legumes.filter(legume => legume.startsWith("b"));

// console.log(legumesComB);



// function saudacao () {
  //   console.log("ola jovem!")
// ;}

// saudacao();

//  function saudacao(nome){
//      console.log(`ola ${nome}`);
//  }

//  saudacao("Joaquim")
//  saudacao("roliço")
//  saudacao("pintola")
//  saudacao("palmito")
//  saudacao("borracha")

// modificar a funçao despedida para que aceit um parâmetro nome e imprima uma mensagem personalizada

// function despedida(nome){
//     console.log(`tchau ${nome}`);
// }

// despedida("roliço")

// function soma(a, b){
//     return a + b;
// }

// console.log(soma(1,2));
// console.log(soma(4,9));
// console.log(soma(5,3));

//desafio. criar uma funçao chamada multiplicaçao que retorne dois numeros.

// function multiplicaçao(a, b){
//     return a * b;
// }
// console.log(multiplicaçao(1,2))
// console.log(multiplicaçao(4,9))
// console.log(multiplicaçao(5,3))
// return a * b;


// function multiplicaçao(a, b){
//     const resultado = a* b
//     console.log(resultado);
//     return resultado;
// }
// multiplicaçao(1,2);

// let somaAnonima = function(a,b){
//     return a+b
// }

// console.log(somaAnonima(1,2));


// Exercício 1: Função de Saudação
// Objetivo: Criar uma função que aceita um nome e imprime uma saudação.
// Tarefa:
// Crie uma função chamada saudacao que recebe um parâmetro nome e retorna a string "Olá, [nome]!".


function saudacao(nome) {
    return `Olá ${nome}!`
}
console.log(saudacao("gabiel"))

// Exercício 2: Soma de Dois Números
// Objetivo: Criar uma função que soma dois números.
// Tarefa:
// Crie uma função chamada soma que recebe dois parâmetros, a e b, e retorna a soma deles.


