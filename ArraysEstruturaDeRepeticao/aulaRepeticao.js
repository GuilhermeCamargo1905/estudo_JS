
/*const nome = 'Guilherme Camargo da Silva';

//console.log(nome[0]);

for (let i = 0; i < nome.length; i++) {
  const letra = nome[i];
  console.log(letra);
}*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
  
}

const media = soma / notas.length;
console.log(media.toFixed(2));