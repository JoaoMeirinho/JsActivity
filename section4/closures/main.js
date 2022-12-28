function criaFuncao(nome){
    return function (){
        return nome;
    }
}

const funcao = criaFuncao('Luiz');
console.dir(funcao)