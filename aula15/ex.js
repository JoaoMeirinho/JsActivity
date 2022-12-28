const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raíz quadrada: ${Math.sqrt(numero)}</p>
<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>
<p>é NaN: ${Number.isNaN(numero)}</p>
<p>${numero} arredondado para baixo: ${Math.floor(numero)}</p>
<p>${numero} arredondado para cima: ${Math.ceil(numero)}</p>
<p>${numero} com duas casas decimais: ${numero.toFixed(2)}</p>`
