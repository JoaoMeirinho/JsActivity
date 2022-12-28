function relogio(){
    function getTimefromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    
    
    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('#iniciar');
    // const pausar = document.querySelector('#pausar');
    // const resetar = document.querySelector('#resetar');
    let segundos = 0;
    let timer;
    
    const iniciarRelogio = () =>{
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = getTimefromSeconds(segundos);
        },1000)
        
    }
    
    document.addEventListener('click', e => {
        const element = e.target;
        if (element.id == 'resetar'){
            clearInterval(timer)
            segundos = 0;
            relogio.innerHTML = getTimefromSeconds(segundos);
            relogio.classList.remove('relogio-pause')
        }
    
        if (element.id === 'iniciar'){
            clearInterval(timer);
            iniciarRelogio();
            relogio.classList.remove('relogio-pause')
        }
    
        if (element.id === 'pausar'){
            clearInterval(timer)
            relogio.classList.add('relogio-pause');
        }
    });
    
}

relogio();


