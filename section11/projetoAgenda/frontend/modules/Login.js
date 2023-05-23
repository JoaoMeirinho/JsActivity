import validator from 'validator';

export default class Login {
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
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    this.removeInvalidClass(el);
    this.removeInvalidText(el);

    let error = false;

    if(!validator.isEmail(emailInput.value)) {
      emailInput.classList.add('is-invalid');
      if(!el.querySelector('#emailHelp')) {
        emailInput.insertAdjacentHTML('afterend','<small id="emailHelp" class="text-danger">Email inválido</small>');
      }
      error = true;
    }
    if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      passwordInput.classList.add('is-invalid');
      if(!el.querySelector('#passwordHelp')) {
        passwordInput.insertAdjacentHTML('afterend','<small id="passwordHelp" class="text-danger">Senha precisa ter entre 3 e 50 caracteres</small>');
      }
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