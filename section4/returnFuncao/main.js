function soma(a,b){
    return a + b;
}

console.log(soma(2,5))

function criaPessoa (nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}

const pessoa = criaPessoa('joão', 'Roberto');

console.log(pessoa.nome)


function falaFrase(comeco){
    function falaResto(resto){
        return `${comeco} ${resto}`;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo'))


function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    }

}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))