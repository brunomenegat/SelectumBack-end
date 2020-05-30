var express = require('express');
var routes = express.Router();
var Comercio = require("./controllers/comercioController")

routes.post("/novo-comercio", Comercio.criar_comercio); //Novo Comercio

routes.route("/nova-coleta") //Nova coleta
.post(Comercio.adicionar_coleta)
.put(Comercio.adicionar_coleta)

routes.get("/busca-comercios/:nome", Comercio.listar_comercios_nome); //Lista comercios dado 1 nome

routes.route("/remove-comercio/:nome") //Remove comercio pelo nome
.get(Comercio.remover_comercio_nome)
.delete(Comercio.remover_comercio_nome)

module.exports = routes;
