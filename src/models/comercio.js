const mongoose = require('mongoose');

var ComercioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    parceiro: {type: Boolean, required: true},
    fone: {type: String, required: true},
    email: {type: String, required: true},
    endereco: {type: String, required: true},
    criadoEm: {type: String, default: Date},
    coletasKg: [{
        organico: Number,
        metal: Number,
        papel: Number,
        plastico: Number,
        vidro: Number,
        data: {type: String, default: Date}
    }],
    totalKg: {
        organico: {type: Number, default: 0},
        metal: {type: Number, default: 0},
        papel: {type: Number, default: 0},
        plastico: {type: Number, default: 0},
        vidro: {type: Number, default: 0}
    }
});

ComercioSchema.methods.addColeta = function(dadosDaColeta, done) {
    this.coletas.push(dadosDaColeta);
    totalKg.organico += dadosDaColeta.organico;
    totalKg.metal += dadosDaColeta.metal;
    totalKg.papel += dadosDaColeta.papel;
    totalKg.plastico += dadosDaColeta.plastico;
    totalKg.vidro += dadosDaColeta.vidro;
    done(null, this)
};

var Comercio = mongoose.model('Comercio', ComercioSchema);

module.exports.Comercio = Comercio;
