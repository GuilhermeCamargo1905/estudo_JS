//para declarar um objeto ele agrupa valores, chave e valor
//uma coleção dinamica de chave e valor
//Uma função dentro de um objeto é chamado de metodo
const pessoa = {
  nome: "Guilherme Camargo",
  idade: 20,

  descrever: function(){
    //dentro da função estando dentro desse objeto se torna um metodo o this esta referido ao objeto em questão
    console.log(`Meu nome é: ${this.nome} e minha idade é ${this.idade}`);
  }
};
pessoa.descrever();


//podemos acessar por uma sintaxe mais dinamica
const atributo = 'idade';

console.log(pessoa['nome']);
pessoa['nome'] = 'teste';
pessoa.nome = 'teste';


//para acessar o primeiro valor
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

//para incrementar um objeto

pessoa.altura = 1.72;
console.log(pessoa);

delete pessoa.nome;
console.log(pessoa);

