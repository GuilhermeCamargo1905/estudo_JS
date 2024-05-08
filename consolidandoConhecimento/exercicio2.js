const {gets, print} = require("./funcoes-auxiliares2");

const entrada = gets();

let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < entrada; i++) {
  const numero = gets();
  
  if(numero % 2 === 0 ){
    if(maiorPar === null || numero > maiorPar){
      maiorPar = numero;
    } 
  } else{
    if(menorImpar === null || numero < menorImpar){
      menorImpar = numero;
    }
  }
}

print("Maior número par: " + maiorPar);
print("Menor número impar: " + menorImpar);