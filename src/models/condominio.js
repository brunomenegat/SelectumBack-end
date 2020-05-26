const mongoose = require('mongoose');
var CondominioSchema = new mongoose.Schema({
    nome: {type: String, required=true},
    fone: {type: String, required=true},
    endereco: {type: String, required=true},
    apartamentos: [{total: Number, contratados: Number, naoContratados: Number}],
    criadoEm: {type: Date, default: Date.now},
    coletas: [{
        metal: Number,
        papel: Number,
        plastico: Number,
        vidro: Number,
        data: Date
    }]
});

var Condominio = mongoose.model('Condominio', CondominioSchema);

module.exports = Condominio;
