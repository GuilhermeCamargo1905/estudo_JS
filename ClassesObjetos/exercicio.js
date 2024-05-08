/*class Carro{
  marca;
  cor;
  gastoMedioPorKm;

  constructor (marca, cor, gastoMedioPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  calcularGastoDePercurso(distanciaEmKm,valorCombustivel){
    return distanciaEmKm * this.gastoMedioPorKm * valorCombustivel;
  }
}

const A3 = new Carro('Audi', 'Preto', 1/12);


console.log(A3);

console.log(A3.calcularGastoDePercurso(40, 5.39).toFixed(2));

const Palio = new Carro('Fiat', 'Preto', 1/10);
console.log(Palio.calcularGastoDePercurso(40, 5.20).toFixed(2));*/

class Pessoa{
  nome;
  peso;
  altura;

  constructor (nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc(){
    return this.peso / Math.pow(this.altura,2);
  }

  classificarImc(){
    const imc = this.calcularImc();
    if(imc < 18.5){
      return 'Abaixo do Peso';
    } else if(imc >= 18.5 && imc <=25.0){
      return 'Peso normal';
    } else if(imc >= 25.0 && imc <= 30.0){
      return 'Acima do Peso';
    } else if(imc >= 30.0 && imc <= 40.0){
      return 'Obeso';
    } else{
      return 'Obesidade Grave';
    }
  }
}

const Jose = new Pessoa('Jose', 101.00, 1.72);
console.log(Jose.calcularImc().toFixed(2));
console.log(Jose.classificarImc());