function Produto(nome, preco, estoque){
    Object.defineProperties(this,{
        nome: {
            enumerable: true, //Mostra a chave
            value: nome, //configura o valor
            writable: true,// Define se é editável ou não
            configurable: true //as configurações do defineProperty não podem ser alteradas; a chave tambem não pode ser apagada
        },
        preco: {
            enumerable: true, //Mostra a chave
            value: preco, //configura o valor
            writable: true,// Define se é editável ou não
            configurable: true //as configurações do defineProperty não podem ser alteradas; a chave tambem não pode ser apagada
        }
    })
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //configura o valor
        writable: false,// Define se é editável ou não
        configurable: false //as configurações do defineProperty não podem ser alteradas; a chave tambem não pode ser apagada
    })
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, //Mostra a chave
    //     value: estoque, //configura o valor
    //     writable: false,// Define se é editável ou não
    //     configurable: false //as configurações do defineProperty não podem ser alteradas
    // })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));