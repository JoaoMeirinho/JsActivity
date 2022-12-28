const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

const criaLi = () =>{
    const li = document.createElement('li');
    return li;
}


const criaBotaoApagar = li =>{
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar esta tarefa')
    li.appendChild(botaoApagar);
}

const criaTarefa = textoInput =>{
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li)
    limpaInput()
    salvarTarefa();
}

const limpaInput = () =>{
    inputTarefa.value = '';
    inputTarefa.focus();
}

const salvarTarefa = () =>{
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    console.log(tarefasJSON)
    localStorage.setItem('tarefas', tarefasJSON);
}

const recuperarTarefasSalvas = () =>{
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
    console.log(tarefas)
}
recuperarTarefasSalvas();


inputTarefa.addEventListener('keypress', e => {
    if(e.keyCode === 13){  //quando a tecla 'Enter' for pressionada
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)

    }
})

btnTarefa.addEventListener('click', (e) =>{
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', e =>{
    const el = e.target;

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefa();
    }
})