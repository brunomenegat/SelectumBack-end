const mongoose = require('mongoose');

var ComercioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    fone: {type: String, required: true},
    endereco: {type: String, required: true},
    criadoEm: {type: String, default: Date},
    coletas: [{
        metal: Number,
        papel: Number,
        plastico: Number,
        vidro: Number,
        data: {type: String, default: Date}
    }]
});

ComercioSchema.methods.addColeta = function(dadosDaColeta, done) {
    this.coletas.push(dadosDaColeta);
    done(null, this)
};

var Comercio = mongoose.model('Comercio', ComercioSchema);

module.exports.Comercio = Comercio;
