const precoCombustivel = 4.50;
const KmPorLitro = 10;
const distanciaEmKm = 40;

const valorGastoViagem = (KmPorLitro / distanciaEmKm) * precoCombustivel

console.log("O valor gasto nessa viagem foi: R$",valorGastoViagem.toFixed(2));


