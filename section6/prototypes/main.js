function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Luiz", "O.");
const pessoa2 = new Pessoa("Maria", "O.");
const pessoa3 = new Pessoa("José", "O.");
const data = new Date();

console.dir(pessoa1.nomeCompleto());
console.dir(pessoa2);
console.dir(pessoa3);
console.dir(data);
