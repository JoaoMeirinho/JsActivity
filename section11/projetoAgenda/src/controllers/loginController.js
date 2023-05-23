const Login = require("../models/LoginModel")

exports.index = (req, res) => {
  if(req.session.user) {
    req.flash('errors', 'Você está logado. Caso queira criar outra conta, Clique em "Sair" e tente novamente.')
    return res.redirect('/')
  }
  return res.render('login')
};

exports.register = async (req,res) => {
  try{
    const login = new Login(req.body)

    await login.register()
  
    if(login.errors.length > 0){
      req.flash('errors', login.errors)
      req.session.save(function() {
        return res.redirect('/login/index');
      })
      return;
    }
    
    req.flash('success', 'Seu usuário foi criado com sucesso');
    req.session.save(function() {
      return res.redirect('/login/index');
    })
  }catch(e){
    console.log(e)
    return res.render('404')
  }
}

exports.login = async (req,res) => {
  try{
    const login = new Login(req.body)

    await login.logar()
  
    if(login.errors.length > 0){
      req.flash('errors', login.errors)
      req.session.save(function() {
        return res.redirect('/login/index');
      })
      return;
    }

    req.flash('success', 'Você entrou no sistema com sucesso!');
    req.session.user = login.user;
    req.session.save(function() {
      return res.redirect('/');
    })
  }catch(e){
    console.log(e)
    return res.render('404')
  }
}

exports.logout = function(req, res){
  res.locals.logout = true;
  req.session.destroy(function(){
    return res.redirect('/')
  });
}