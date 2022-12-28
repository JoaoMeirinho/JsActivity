let optJogarNovamente = null;
do{
   const numero = Math.floor(Math.random() * 10);
    let opt = 's'
    do{
        let resp = prompt('Tente adivinhar o Numero: ');
        if(resp == numero){
            alert("parabéns, Você acertou!");
        }else{
            alert('Você errou!');
        }
        opt = prompt("Deseja continuar?");
    }while(opt == 's')
    optJogarNovamente = prompt('Jogar Novamente?');
}while(optJogarNovamente == 's')