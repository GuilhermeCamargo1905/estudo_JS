
const entradas = [-1];
let i = 0;

function gets(){
  const valor = entradas[i];
  i++;
  return valor;
}

function print(texto){
  console.log(texto);
}

//oq for colocado dentro do objeto vai ser exportado e vamos utilizar um objeto literal

module.exports = { gets, print };