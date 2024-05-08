/*function escreveMeuNome(nome){
  return 'Meu nome é: ' + nome ;
}

function verificaIdade(idade){

  if(idade < 18){
    console.log(escreveMeuNome('Guilherme') + ' e sou de Menor');
  }else{
    console.log(escreveMeuNome('Guilherme') + ' e sou de Maior'); 
  }
}


verificaIdade(18)*/


/*function desconto(precoEtiqueta, metodoPagamento){
  if(metodoPagamento === 1){
    return 'O valor pago foi de: R$' + (precoEtiqueta - (precoEtiqueta * 0.1));
  }else if(metodoPagamento === 2){
    return 'O valor pago foi de: R$' + (precoEtiqueta - (precoEtiqueta * 0.15));
  }else if(metodoPagamento === 3){
    return 'O valor pago foi de: R$' + precoEtiqueta;
  }else{
    return 'O valor pago foi de: R$' + (precoEtiqueta + (precoEtiqueta * 0.1));
  }
}*/

function aplicarDesconto(valor, desconto){
  return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
  return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100.00;
const metodoPagamento = 2

if(metodoPagamento === 1){
  console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (metodoPagamento === 2){
  console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (metodoPagamento === 3){
  console.log(precoEtiqueta);
}else{
  console.log(aplicarJuros(precoEtiqueta, 10));
}
