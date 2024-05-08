function calcularImc(peso, altura){
  return peso / Math.pow(altura,2)
}

function classificarImc(imc){
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

//nosso main
(function (){
  const peso = 98.0;
  const altura = 1.72;
  
  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
  
})();


