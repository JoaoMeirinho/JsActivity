const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
];

const section = document.querySelector('.container');

const gerarElementos = (elementos) =>{
    for (let i = 0; i < elementos.length; i++){
        let {tag, texto}  = elementos[i];
        const create = document.createElement(tag);
        create.innerText = texto;
        section.appendChild(create);
    }
}

gerarElementos(elementos);
