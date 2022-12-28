const mostraHora = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12 : false
    });
}



const timer = setInterval(() =>{
    console.log(mostraHora())
}, 1000)

setTimeout(() =>{
    clearInterval(timer);
}, 5000)