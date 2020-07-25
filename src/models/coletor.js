const mongoose = require('mongoose');

var ColetorSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    fone: {type: String, required: true},
    endereco: {type: String, required: true},
    criadoEm: {type: String, default: Date},
    totalKg: {
        organico: {type: Number, default: 0},
        metal: {type: Number, default: 0},
        papel: {type: Number, default: 0},
        plastico: {type: Number, default: 0},
        vidro: {type: Number, default: 0}
    }
});

module.exports = mongoose.model('Coletor', ColetorSchema);
