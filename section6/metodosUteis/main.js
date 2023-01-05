const produto = { nome: "produto base", preco: 1.8, material: 'porcelana' };
// const caneca = { 
//     ...produto,
//     material: 'porcelana'
//  };

console.log(Object.entries(produto))

for (let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}


