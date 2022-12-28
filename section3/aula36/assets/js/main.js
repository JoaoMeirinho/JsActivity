const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

// pegar estilos (neste caso do body)
const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;

for (let i of ps){
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = '#fff';
}

