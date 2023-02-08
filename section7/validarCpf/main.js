class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: false,
      writable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    return this.geraNovoCpf() === this.cpfLimpo;
  }

  geraNovoCpf(){
    let cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    return cpfParcial + digito1 + digito2;
  }

  criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const digito =
      11 -
      (cpfArray.reduce((acumulador, valor) => {
        acumulador += Number(valor) * regressivo;
        regressivo--;
        return acumulador;
      }, 0) %
        11);
    return digito > 9 ? "0" : String(digito);
  }

  isSequencia() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
  }
}

const cpf = new ValidaCpf("014.484.460-58");
console.log(cpf.valida());
