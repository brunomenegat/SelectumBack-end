var express = require('express');
var routes = express.Router();
var Coleta = require("./controllers/coletaController")
var Comercio = require("./controllers/comercioController")
var Convite = require("./controllers/conviteController");
const { novaColeta } = require('./controllers/coletaController');


// ROTAS PARA CONVITE
routes.route("/novo-convite")    // Novo Convite
.get(Convite.exibePagina)
.post(Convite.convidaCliente)


// ROTAS PARA COMERCIO
routes.route("/novo-comercio")  //Novo Comercio /:token?:/:email?/:entrada?/:mensal?/:meses?/:parceiro?
.post(Comercio.criarComercio);

routes.route("/buscar-comercios/:nome")  //Lista comercios dado 1 nome
.get(Comercio.listarComerciosNome);

routes.route("/remover-comercio/:nome")  //Remove 1 comercio dado o nome
.put(Comercio.removerComercioNome)
.delete(Comercio.removerComercioNome)


// ROTAS PARA COLETA
routes.route("/nova-coleta")
.get()
.post(novaColeta)
.put()


module.exports = routes;
