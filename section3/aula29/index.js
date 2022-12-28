const verdadeira = true;

// let tem ecopo de bloco {...}
// Var tem escopo de função

let nome = 'João';
var nome2 = 'joão';

if (verdadeira){
    let nome = 'roberto';
    var nome2 = 'alpha';
    console.log(nome,nome2);
}
console.log(nome2)



