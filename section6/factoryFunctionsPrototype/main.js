const falar = {
  falar() {
    console.log(`Olá ${this.nome} ${this.sobrenome}`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  },
};

const beber = {
  beber() {
    console.log(`Olá ${this.nome} está bebendo`);
  },
};
// const pessoaPrototype = { ...falar, ...comer, ...beber };
const pessoaPrototype = Object.assign({}, comer, beber, falar)

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Luiz", "Otávio");
const p2 = criaPessoa("João", "Roberto");
console.log(p1);
console.log(p2);
