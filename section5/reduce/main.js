const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const somaDosNumeros = numeros.reduce((acumulador, valor, index, array) => acumulador + valor , 0);
const numerosPares = numeros.reduce((acumulador, valor, index, array) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
const dobroDosNumeros = numeros.reduce((acumulador, valor) =>{
    acumulador.push(valor * 2);
    return acumulador;
}, [])
console.log(somaDosNumeros);
console.log(numerosPares);
console.log(dobroDosNumeros);

const pessoas = [
    { nome: "Luiz", idade: 62 },
    { nome: "Maria", idade: 23 },
    { nome: "Eduardo", idade: 77 },
    { nome: "Letícia", idade: 19 },
    { nome: "Rosana", idade: 32 },
    { nome: "Wallace", idade: 47 },
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    return valor.idade > acumulador.idade ? valor : acumulador;
});

console.log(pessoaMaisVelha)


