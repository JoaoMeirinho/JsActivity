const a1 = [1, 2, 3, 4, 5, 6, 7];
a1.forEach((valor, indice, array) => {
  array[indice] += valor;
});
console.log(a1);