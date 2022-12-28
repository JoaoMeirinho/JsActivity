// const tresHoras = 60 * 60 * 3 * 1000;
const zeroEsquerda = num =>{
    return num >= 10 ? num : `0${num}`;
}
const formatadata = data => {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formatadata(data);
console.log(dataBrasil)