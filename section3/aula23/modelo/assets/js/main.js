const form = document.querySelector('#form')
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido', false);
        // parando a função com return (função = undefined)
        return;
    }
    if(!altura){
        setResultado('Altura  inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg,true)
});

const getNivelImc = (imc) =>{
    const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
    ];
    if(imc >= 39.9) {
        return nivel[5];
    }

    if(imc>=34.9){
        return nivel[4];
    }

    if(imc>=29.9){
        return nivel[3];
    }

    if(imc>=24.9){
        return nivel[2];
    }

    if(imc>=18.5){
        return nivel[1];
    }

    if (imc < 18.5){
        return nivel[0];
    }
} 

const getImc = (peso, altura) => {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

const criaParagrafo = () =>{
    const p = document.createElement('p');
    return p;
}

const setResultado = (msg, isValid) =>{
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;

    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('result');
    }else{
        p.classList.add('bad');

    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}

