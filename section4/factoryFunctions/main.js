function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 

        sobrenome,

        fala(assunto){
            return `${nome} está ${assunto}.`;
        },

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        altura,
        peso,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('João', 'Meirinho', 1.80, 80);
p1.nomeCompleto = "Maria Da Silva";
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)
console.log(p1.nomeCompleto)
console.log(p1.fala('falando sobre JS'));