//classe é a definição e a instância é a ocorrencia 
class Pessoa {
  nome;
  idade;
  anoDeNascimento;
              //isso obriga semrpre que for instanciar uma pessoa passar o nome e idade
  constructor (nome, idade){//é o que acontece quando uma pessoa é instanciada
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2024 - idade;
  }
  //quando for declarar um metodo dentro da classe não precisamos da palavra chave function
   descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  }
}
//aqui estamos instanciadno
const guilherme = new Pessoa('Guilherme', 20);

const mirela = new Pessoa('Mirela', 17);

console.log(mirela);

//vamos criar uma função que compara pessoas buscando dentro da classe esses objetos

function compararPessoas(p1, p2){
  if (p1.idade > p2.idade){
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade){
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else{
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

const miguel = new Pessoa('Miguel', 10);
const mateus = new Pessoa('mateus', 7);

compararPessoas(miguel, mateus);