// 1) Crie um programa que dado um número imprima a sua tabuada

/*const num = 2;


for (let i = 0; i <= 10; i++) {
  const resultado = num * i;
 
  console.log(`${num} x ${i} = ${resultado}`);
}*/

// 2) Crie um programa que seja capaz de percorrer uma lista de
//numeros e imprima os numeros pares

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

/*for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  let par = numero % 2
  if(par === 0){
    console.log('Número par: ', numero);
  } else {
    console.log('Número impar: ', numero);
  }
}*/

//Para mostrar apenas os pares

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  if(numero % 2 === 0){
    console.log(numero);
  }
  
}