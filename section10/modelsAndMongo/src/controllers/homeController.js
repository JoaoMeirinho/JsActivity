const HomeModel = require('../models/HomeModel');

HomeModel.create({
  titulo: 'Titulo qualquer',
  descricao: 'Descrição qualquer'
})
.then(dados => console.log(dados))
.catch(e => console.log(e))

exports.paginaInicial = (req, res) => {
  res.render('index');  
  return;
}

exports.trataPost = (req, res) => {
  res.send(req.body)
  return
}