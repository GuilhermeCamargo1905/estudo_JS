const {gets, print} = require("./funcoes-auxiliares3");

const valorSalario = gets();
const valorBeneficios = gets();

function calcularPorcentagem(valor, percentual){
  return valor * (percentual / 100);
}

function pegarAliquota(salario){
  if (salario >= 0 && salario <= 1100.00){
    return 5;
  } else if (salario >= 1100.01 && salario <=2500.00){
    return 10;
  } else {
    return 15;
  }
}

const aliquotaImposto = pegarAliquota(valorSalario);
const valorDoImposto = calcularPorcentagem(valorSalario, aliquotaImposto);
const valorATransferir = valorSalario - valorDoImposto + valorBeneficios ; 

print(valorATransferir);
