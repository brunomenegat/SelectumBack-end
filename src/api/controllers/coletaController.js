var Coleta = require("../../models/coleta")
var Comercio = require("../../models/comercio")
var Coletador = require("../../models/coletor")

exports.novaColeta = function (req, res) {
    var dados = req.body
    Coleta.create(dados, function (err, coleta) {
        if (err) return console.error(err);
        Comercio.findOne({ nome: dados.cliente }, function (err, cliente) { // ADICIONAR ENDERECO À BUSCA (possibilidade de franquias)
            if (err) return console.error(err);
            Coletador.findOne({ nome: dados.coletador }, function (err, coletador) {
                Coleta.findById(coleta._id, function (err, coleta) {
                    coleta.coletadorID = 'coletador._id'  // TIRAR ASPAS QNDO COLETADOR ESTIVER PRONTO
                    coleta.clienteID = cliente._id
                    coleta.save
                    res.json(coleta)
                })
            })
        })
    })
};
