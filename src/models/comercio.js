const mongoose = require('mongoose');

var ComercioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    parceiro: {type: Boolean, required: true},
    fone: {type: String, required: true},
    email: {type: String, required: true},
    endereco: {type: String, required: true},
    criadoEm: {type: String, default: Date},
    coletasKg: [{
        _id: false,
        data: {type: String, default: Date},
        organico: Number,
        metal: Number,
        papel: Number,
        plastico: Number,
        vidro: Number
    }],
    totalKg: {
        organico: {type: Number, default: 0},
        metal: {type: Number, default: 0},
        papel: {type: Number, default: 0},
        plastico: {type: Number, default: 0},
        vidro: {type: Number, default: 0}
    }
});

var Comercio = mongoose.model('Comercio', ComercioSchema);

module.exports = Comercio;
