require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTDATABASESTRING)
  .then(() => {
    console.log('conectado a base de dados')
    app.emit("pronto");
  })
  .catch((e) => console.log(`Erro ao conectar na base de dados: ${e}`))

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(middlewareGlobal);
app.use(routes);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor na porta 3000");
  });
});
