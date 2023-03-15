exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome client: <input type="text" name="nome">
  <button>Enviar form</button>
  </form>
`);
}

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota post')
}