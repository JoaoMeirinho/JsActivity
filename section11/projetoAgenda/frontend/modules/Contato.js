import validator from 'validator';

export default class Contato{
  constructor(formClass){
    this.form = document.querySelector(formClass);
  }

  init(){
    this.events();
  }

  events(){
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    })
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    this.removeInvalidClass(el);
    this.removeInvalidText(el);

    let error = false;

    if(!nomeInput.value){
      nomeInput.classList.add('is-invalid');
      nomeInput.insertAdjacentHTML('afterend','<small id="nomeHelp" class="text-danger">O nome do contato deve ser enviado</small>');

      error = true;
    }

    if(emailInput.value && !validator.isEmail(emailInput.value)) {
      emailInput.classList.add('is-invalid');
      emailInput.insertAdjacentHTML('afterend','<small id="emailHelp" class="text-danger">Email inválido</small>');

      error = true;
    }

    if(!emailInput.value && !telefoneInput.value) {
      emailInput.classList.add('is-invalid');
      telefoneInput.classList.add('is-invalid');
      emailInput.insertAdjacentHTML('afterend','<small id="passwordHelp" class="text-danger">É necessário enviar pelo menos um contato: Email ou telefone</small>');
      telefoneInput.insertAdjacentHTML('afterend','<small id="passwordHelp" class="text-danger">É necessáiro enviar pelo menos um contato: Email ou telefone</small>');

      error = true;
    }

    if(!error) el.submit();

  }

  removeInvalidClass(el){
    el.querySelectorAll('input').forEach(element => {
      element.classList.remove('is-invalid')
    });
  }

  removeInvalidText(el){
    el.querySelectorAll('small').forEach(tag => {
      tag.remove()
    });
  }
}