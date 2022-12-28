const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// nomes.splice(indice inicial, delete, elemento1, elemento2, elemento3);

// pop
// const removidosPop = nomes.splice(-1, 1);
// const removidos = nomes.splice(nomes.indexOf('João'), 1, 'Luiz', 'Mauricio' );

//shift
// const removidosShift = nomes.splice(0,1);

//push
nomes.splice(-1, 1, 'Luiz');
console.log(nomes);
