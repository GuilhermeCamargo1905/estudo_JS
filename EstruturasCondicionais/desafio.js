const valorEtanol = 3.80;
const valorGasolina = 4.50;
const tipoCombustivel = 'Etanol';
const distanciaViagemKm = 50;
const KmPorLitro = 9;


if(tipoCombustivel === 'Gasolina'){
  const res = (distanciaViagemKm / KmPorLitro) * valorGasolina;
  console.log('O valor gasto na viagem utilizando Gasolina foi de: R$', res.toFixed(2));
} else if(tipoCombustivel === 'Etanol'){
  const res = (distanciaViagemKm / KmPorLitro) * valorEtanol;
  console.log('O valor gasto na viagem utilizando Etanol foi de: R$', res.toFixed(2));
} else {
  console.log('Tipo de combustivel não computado');
}