let num1 = 0.1;
let num2 = 2.5;

console.log(num1.toString() + num2.toString());
console.log(num1.toFixed(2)); //arredondar número para 2 cassas decimais
console.log(Number.isInteger(num1)); //verifica se o número é inteiro

let temp = num1 * 'ola';
console.log(Number.isNaN(temp));

num1 = parseFloat(num1.toFixed(2));