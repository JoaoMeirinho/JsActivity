exports.middlewareGlobal = (req, res, next) => {
  if(req.body.cliente) {
    req.body.cliente = req.body.cliente.replace('roberto', 'ROBERTO NÃO')
    console.log()
    console.log(`vi que vc postou ${req.body.cliente}`)
    console.log()
  }

  next();
}