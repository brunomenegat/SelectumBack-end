const mongoose = require('mongoose');

const ColetaSchema = new mongoose.Schema({
    data: { type: String, default: Date },
    coletor: { type: String, required: true },
    cliente : { type: String, required: true },
    endereco: { type: String, required: true },
    organico: { type: Number, required: true },
    metal: { type: Number, required: true },
    papel: { type: Number, required: true },
    plastico: { type: Number, required: true },
    vidro: { type: Number, required: true },
    coletorID: { type: String },
    clienteID: { type: String },
});

module.exports = mongoose.model('ColetaModel', ColetaSchema)
