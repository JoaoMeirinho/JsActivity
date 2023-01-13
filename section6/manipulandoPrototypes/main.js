// const objA = {
//     chaveA: 'A'
// };
// const objb = {
//     chaveB: 'B'
// };

// Object.setPrototypeOf(objB, objA); // passar proto de um objeto para o outro

// console.log(objB.chaveA);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Carro', 100);

const p2 = {
    nome: 'Mouse',
    preco: 50
}
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10)
console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
});
p3.aumento(10);
console.log(p3)