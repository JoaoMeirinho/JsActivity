//factory functions / constructor functions

//FACTORY FUNCTION:
// function criaPessoa(nome, sobrenome){
//     return{
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     }
// }
function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome

    Object.freeze(this) //utilizado para que nada no objeto seja alterado
}
const p1 = new Pessoa('João', 'Meirinho');
console.log(p1);
