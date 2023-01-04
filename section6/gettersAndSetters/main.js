function Produto(nome, preco, estoque){
   this.nome = nome;
   this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        configurable: false, //as configurações do defineProperty não podem ser alteradas; a chave tambem não pode ser apagada
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number')
                throw new TypeError('O valor de "estoque" precisa ser numérico');
            estoquePrivado = valor;
        }
    })
    let estoquePrivado = estoque;
}

function criaProduto(nome){
    return {
       get nome(){
        return nome;
       },
       set nome(valor){
        nome = valor
       }
    }
}
const p1 = new Produto('Camiseta', 20, 'eita');
// p1.estoque = 'aoba';
console.log(p1.estoque);

const p2 = criaProduto('tv');
console.log(p2);