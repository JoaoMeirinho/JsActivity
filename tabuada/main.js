const geraTabuada = () =>{
    for (let i = 0; i <= 10; i++){
        for (let j = 0; j <= 10; j++){
            const value = i * j;
            const msg = `${i} X ${j} = ${value}`;
            geraParagrafo(msg);
        }
    }
}

const geraParagrafo = (msg) =>{
    const p = document.createElement('p');
    p.innerText = msg;
    return p;
}

const geraDiv = (elements) =>{
    const div = document.createElement('div');
    div.appendChild(elements);
}