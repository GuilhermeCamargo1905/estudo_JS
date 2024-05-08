const numero =  0;

const NumeroDivisivelPor5 = (numero % 5) === 0; // % vai demonstra ro resto da divisao|Se for igual a 0  é par se não é impar
//Sempre uma condicional vai resultar em um boolean = true ou false
console.log(NumeroDivisivelPor5);

/*
= atribuição
== igualdade, ignora o tipo da variavel
=== igualdade mais usado, leva em consideração o tipo da variavel
*/ 

if(numero === 0){
  console.log('O número é inválido')
} else if(NumeroDivisivelPor5){
  console.log('Sim');
}else{ //Podemos criar outro if utilizando !eNumeroPar vai ser invertido a variavel
  console.log('Não')
}

