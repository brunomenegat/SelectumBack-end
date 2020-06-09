var express = require('express');
var routes = express.Router();
var Comercio = require("./controllers/comercioController")



// ROTAS PARA COMERCIO
routes.route("/novo-comercio")  //Novo Comercio
.post(Comercio.criar_comercio);

routes.route("/nova-coleta")    //Nova coleta
.post(Comercio.adicionar_coleta)
.put(Comercio.adicionar_coleta)

routes.route("/busca-comercios/:nome")  //Lista comercios dado 1 nome
.get(Comercio.listar_comercios_nome);

routes.route("/remove-comercio/:nome")  //Remove 1 comercio dado o nome
.put(Comercio.remover_comercio_nome)
.delete(Comercio.remover_comercio_nome)

module.exports = routes;
