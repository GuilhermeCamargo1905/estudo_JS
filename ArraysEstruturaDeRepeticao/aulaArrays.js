
//Quando utilizamos o [] estamos iniciando uma lista
//Quando utilizamos o {} fora de uma classe vamos declarar um objeto literal

//const alunos = ['Mirela', 'Guilherme', 'Miguel'];

//para adicionar elementos a lista
//alunos.push('Kelly');
//se colocamos um número já existente vai ser substituido
//alunos[4] = 'Admilson';

//para remover da lista sem nenhum parametro vai ser excluido o mais proximo no caso o ultimo
//console.log(alunos);
//console.log(alunos.pop());
//console.log(alunos);
//utilizamos para remover o primeiro da lista
//console.log(alunos.shift());



//tamanho dessa lista é dinamico para saber o tamanho dela vamos usar o .length
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
console.log(notas.length);
//se eu quiser pegar a media dessas notas vou ter que percorrer todos
//para issov amos utilizar estruturas de repeticao
const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
