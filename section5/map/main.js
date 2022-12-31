const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2);

const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 55 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
];

const retornaNome = pessoas.map(valor => valor.nome);
console.log(retornaNome)
const deleteNome = pessoas.map(valor => ({idade: valor.idade}));
console.log(deleteNome);
const adicionaId = pessoas.map((valor, index) => {    
    const newObject = {...valor}; //criando um novo objeto a partir do objeto recebido para não alterar o valor original
    newObject.id = ++index;
    return newObject;
})
console.log(adicionaId);
console.log(pessoas)