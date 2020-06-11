var express = require('express');
var routes = express.Router();
var Comercio = require("./controllers/comercioController")
var Convite = require("./controllers/conviteController")

// ROTAS PARA CONVITE
routes.route("/convite")    // Novo Convite
.get(Convite.exibePagina)
.post(Convite.convidaCliente)

// ROTAS PARA COMERCIO
routes.route("/novo-comercio/:token?:/:email?/:entrada?/:mensal?/:meses?/:parceiro?")  //Novo Comercio
.post(Comercio.criar_comercio);

routes.route("/busca-comercios/:nome")  //Lista comercios dado 1 nome
.get(Comercio.listar_comercios_nome);

routes.route("/remove-comercio/:nome")  //Remove 1 comercio dado o nome
.put(Comercio.remover_comercio_nome)
.delete(Comercio.remover_comercio_nome)

/*
routes.route("/nova-coleta")    //Nova coleta
.post(Comercio.adicionar_coleta)
.put(Comercio.adicionar_coleta)
*/

module.exports = routes;
