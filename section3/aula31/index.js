const pessoa = {
    nome: 'João',
    sobrenome: 'Roberto',
    idade: 17,
    endereco:{
        rua:'Rua Zacarias',
        numero:228
    }
}

const { 
    endereco: {rua: r = 'Não definido', numero},
    endereco 
    } = pessoa;
console.log(r, endereco)