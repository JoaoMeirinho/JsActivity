//Declaração de função (function hoisting)
//pode ser chamada antes ou depois de ser declarada
falaOi();
function falaOi () {
    console.log('oi');
}

//funçõe são objetos de primeira classe

const souUmDado = function(){
    console.log('sou um dado');
}
souUmDado();

function executaFuncao (funcao){
    funcao();
}
executaFuncao(souUmDado);

//arrow function

const funcaoArrow = () =>{
    console.log('sou uma arrow function');
}

//dentro de um objeto

const objeto = {
    falar(){
        console.log('estou falando')
    }
}

objeto.falar();
