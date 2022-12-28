let frase = "Está um belo dia lá fora.";
let espaco = 0;
for(i = 0; i <= frase.length; i++){
    let letra = frase[i];
    if (letra == " "){ 
        espaco++;
    }
}

console.log("O número de espaços é igual à", espaco);
