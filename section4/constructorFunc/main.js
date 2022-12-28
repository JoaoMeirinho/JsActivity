function Pessoa(nome,sobrenome){
    const id = 123;

    const metodoInterno = function(){

    };
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log('Sou um método');
    }
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('João', 'Meirinho');