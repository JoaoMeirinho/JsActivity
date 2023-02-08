function ValidaCPf(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPf.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  let cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2

  return novoCpf === this.cpfLimpo;
};

ValidaCPf.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  const digito =
    11 -
    (cpfArray.reduce((acumulador, valor) => {
      acumulador += Number(valor) * regressivo;
      regressivo--;
      return acumulador;
    }, 0) % 11);
  return digito > 9 ? '0' : String(digito);
};

ValidaCPf.prototype.isSequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length);
}
const cpf = new ValidaCPf("338.187.540-04");
console.log(cpf.valida());
