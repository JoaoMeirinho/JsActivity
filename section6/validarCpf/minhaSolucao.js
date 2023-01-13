// 11 - (total % 11) = valor
// se o valor de saida for maior que 9, consideramos ele igual a zero
const validarCpf = (cpfArgument) => {
  
  if (typeof cpfArgument === "undefined") return false;
  
  const cpf = cpfArgument;
  const cpfLimpo = cpf.replace(/\D+/g, "");

  if (cpfLimpo.length < 11) return false;

  const cpfDividido = cpfLimpo.split("");
  let primeirosDigitosCpf = cpfDividido
    .slice(0, 9)
    .map((value) => Number(value));
  let somaParaPrimeiroDigito = primeirosDigitosCpf.reduce(
    (contador, valor, index) => {
      contador += Number(valor) * (10 - index);
      return Number(contador);
    },
    0
  );
  let primeiroDigito =
    11 - (somaParaPrimeiroDigito % 11) > 9
      ? 0
      : 11 - (somaParaPrimeiroDigito % 11);

  primeirosDigitosCpf.push(primeiroDigito.toString());

  let somaParaSegundoDigito = primeirosDigitosCpf.reduce(
    (contador, valor, index) => {
      contador += Number(valor) * (11 - index);
      return Number(contador);
    },
    0
  );

  let segundoDigito =
    11 - (somaParaSegundoDigito % 11) > 9
      ? 0
      : 11 - (somaParaSegundoDigito % 11);

  primeirosDigitosCpf.push(segundoDigito);
  const cpfCalculado = primeirosDigitosCpf.join("").toString();
  return cpfCalculado === cpfLimpo;
};
console.log(validarCpf("1723917"));
