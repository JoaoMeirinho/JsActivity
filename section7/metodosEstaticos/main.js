class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }
  // método de intancia
  static trocaPilha() {
    console.log("Trocando pilhas!");
  }

  static soma(x, y) {
    return x + y;
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();

console.log(controle1);
console.log(ControleRemoto.soma(1, 2));
