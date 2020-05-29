const mongoose = require('mongoose');

var CondominioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    fone: {type: String, required: true},
    endereco: {type: String, required: true},
    apartamentos: {total: Number, contratados: Number, naoContratados: Number},
    criadoEm: {type: String, default: Date},
    coletas: [{
        organico: Number,
        metal: Number,
        papel: Number,
        plastico: Number,
        vidro: Number,
        data: {type: String, default: Date}
    }]
});

CondominioSchema.methods.addColeta = function(dadosDaColeta, done) {
    this.coletas.push(dadosDaColeta);
    done(null, this)
};

var Condominio = mongoose.model('Condominio', CondominioSchema);

module.exports = Condominio;
