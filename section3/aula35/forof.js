const nome = ['João', 'Roberto', 'Meirinho'];

for (let i in nome){
    console.log(nome[i]);
}

for (let valor of nome){
    console.log(valor);
}

nome.forEach((valor, indice, arrayCompleto) =>{
    console.log(valor, indice, arrayCompleto);
})

console.log('--------------------------------------------')

const pessoa = {
    nome: 'João',
    idade: 13
}

for (let i in pessoa){
    console.log(i, pessoa[i]);
}