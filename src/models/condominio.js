const mongoose = require('mongoose');
var CondominioSchema = new mongoose.Schema({
    nome: String,
    fone: String,
    endereço: String,
    apartamentos: [{total: Number, contratados: Number, naoContratados: Number}],
    CriadoEm: {type: Date, default: Date.now}
});

var Condominio = mongoose.model('Condominio', CondominioSchema);

module.exports = Condominio;
