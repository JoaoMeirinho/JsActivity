function rand(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new Error('ERRO'));
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  })
}

esperaAi('Frase 1', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('frase 2', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaAi(222222, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Serei o último a ser exibido.")
  })
  .catch(e =>{
    console.log('ERRO: ', e);
  })
