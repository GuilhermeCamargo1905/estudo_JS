
//importando o que está sendo exportado no outro arquivo
//const funcoes = require('./funcoes-auxiliares');

//console.log(funcoes.gets());

//uma forma mais "requintada" é utilizar o object destructuring
//ou seja destruir o objeto bem mais utilziada

//const {gets, print } = require('./funcoes-auxiliares');



/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior npumero sorteado

Dados de entrada:
5
50
10
98
23

saída
98
*/

const {gets, print } = require('./funcoes-auxiliares');


const quantidadeDeAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numerosSorteado = gets();
  if(numerosSorteado > maiorValor){
    maiorValor = numerosSorteado;
  }
}


print(maiorValor)



