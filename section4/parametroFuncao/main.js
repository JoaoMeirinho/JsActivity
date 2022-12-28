//argumentos são mandados para arguments

function funcao(){
    let total= 0;

    for(let argument of arguments){
        total += argument;
    }
    console.log(total)
}

function soma(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros);

    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador)
}

funcao(1,3,5,2,4);
soma('+', 0, 8,5,4,3,2)