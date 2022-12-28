function random(min,max){
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 200;
let rand = random(min, max);
// console.log(rand)
let vezesFeitas = 0;

while (rand !== 10){
    rand = random(min,max)
    console.log(rand)
    vezesFeitas++;
}

console.log(`Número de vezes: ${vezesFeitas}`);