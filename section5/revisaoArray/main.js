// Valor por Referência
// const nomes = ['Eduardo','Maria','Joana'];
//String, objetos, funções, números, etc...
const nomes = new Array('Eduardo', 'Maria', 'Joana', 'Wallace', 'José', 'Henrique');
const novo = [...nomes]; //está sendo utilizado para copiar os dados de 'nomes' para 'novo'
//pois sem ele, ambos os arrays seriam afetados.

// const removido = novo.pop();
const removido = novo.shift();
console.log(nomes);
console.log(novo, removido); 

console.log(nomes.length);
nomes.unshift('João');
nomes.unshift('Everton');

console.log(nomes);

const slice = nomes.slice(1, -1)

console.log(slice)

const nome = 'Jonas Mauricio Souza';
const nomeDividido = nome.split(' ');
console.log(nomeDividido);

const novoNome = nomeDividido.join(' ');
console.log(novoNome);