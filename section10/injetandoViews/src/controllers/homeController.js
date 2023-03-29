const HomeModel = require("../models/HomeModel");

exports.paginaInicial = (req, res) => {
  console.log(req.flash('error'), req.flash('sucess'))
  res.render("index", {
    titulo: 'Este será o <span style="color:red;">titulo</span> da página',
    numeros: [0,1,2,3,4,5,6,7,8,9]
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
