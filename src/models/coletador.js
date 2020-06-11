const mongoose = require('mongoose');

var ColetadorSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    fone: {type: String, required: true},
    endereco: {type: String, required: true},
    criadoEm: {type: String, default: Date},
    coletasKg: [{
        local: {type: String, required: true},
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

ColetadorSchema.methods.addColeta = function(dadosDaColeta, done) {
    this.coletas.push(dadosDaColeta);
    totalKg.organico += dadosDaColeta.organico;
    totalKg.metal += dadosDaColeta.metal;
    totalKg.papel += dadosDaColeta.papel;
    totalKg.plastico += dadosDaColeta.plastico;
    totalKg.vidro += dadosDaColeta.vidro;
    done(null, this)
};

module.exports = mongoose.model('Coletador', ColetadorSchema);
