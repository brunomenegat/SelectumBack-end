var express = require('express');
var routes = express.Router();
var Comercio = require("./controllers/comercioController")

routes.post("/novo-comercio", Comercio.criar_comercio); //Novo Comercio

routes.post("/nova-coleta", Comercio.adicionar_coleta); //Nova coleta

routes.get("/busca-comercios/:nome", Comercio.listar_comercios_nome); //Procura 1 Comercio Especifico

routes.route("/remove-comercio/:nome")
.get(Comercio.remover_comercio_nome)
.delete(Comercio.remover_comercio_nome)

module.exports = routes;
