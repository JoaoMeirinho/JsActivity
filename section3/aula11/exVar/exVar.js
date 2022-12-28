let varA = 'a';
let varB = 'b';
let varC = 'c';

let optA = varA;

varA = varB;
varB = varC;
varC = optA;


console.log(varA, varB, varC)