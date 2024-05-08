/*function sayMyName(name){
  console.log('Your name is: ' + name);
}

sayMyName('Guilherme');
sayMyName('Mirela');*/

/*function quadrado(valor){
  return valor * valor;
}


console.log(quadrado(10) + quadrado(10));*/

function incrementarJuros(valor, percentualJuros) {
  const valorDeAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100,15));


function main(){
  console.log('Programa Principal');
  incrementarJuros()
}

main();