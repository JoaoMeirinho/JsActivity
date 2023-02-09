class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if(camposValidos && senhasValidas){
      alert('Formulário enviado com sucesso!');
      this.formulario.submit();
    }
  }

  senhasSaoValidas(){
    let valid = true;

    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetir-senha");

    if(senha.value !== repetirSenha.value){
      this.criaErro(senha, 'Campos "Senha" e "Repetir a Senha" precisam ser iguais');
      this.criaErro(repetirSenha, 'Campos "Senha" e "Repetir a Senha" precisam ser iguais');
      valid = false;
    }

    if(senha.value.length < 6 || senha.value.length > 12){
      this.criaErro(senha, 'A senha deve conter entre 6 e 12 caracteres')
    }
    return valid
  }

  camposSaoValidos() {
    let valid = true;
    this.limparErros();

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) {
          this.criaErro(campo, "CPF Inválido");
          valid = false;
        }
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }

  limparErros() {
    let errorText = this.formulario.querySelectorAll(".error-text");
    if (errorText) errorText.forEach((element) => element.remove());
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }

  validaCPF(campo) {
    const cpf = new ValidaCpf(campo.value);
    return cpf.valida();
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;
    if (usuario.length < 3 || usuario > 12){
      this.criaErro(campo, 'Usuário deve ter entre 3 e 12 caracteres')
      valid = false;
    }
    if (!usuario.match(/[a-zA-Z0-9]+/g)){
      this.criaErro(campo, 'Usuário deve conter apenas letras ou números')
      valid = false;

    }
    return valid;
  }
}

const valida = new ValidaFormulario();
