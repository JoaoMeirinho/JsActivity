const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome client: <input type="text" name="nome">
    <button>Enviar form</button>
    </form>
  `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.opa)
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`O que você me enviou foi: ${req.body.nome}`);
})


app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('Servidor na porta 3000');
});