try {
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou um erro')
} catch (err) {
    
}finally {
    console.log('Eu sempre sou executado')
}

const horaAtual = (data) =>{
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando data')
    }
    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

}
try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = horaAtual();
    console.log(data)
}catch(err){

}finally{
    console.log('tenha um bom dia');
}

