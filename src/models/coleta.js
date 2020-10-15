const mongoose = require('mongoose');

const ColetaSchema = new mongoose.Schema({
    pesoKg: { type: Number, required: true },
    data: { type: String, default: Date },
    rotaID: { type: String, required: true },
    coletador: {
        nome: { type: String, required: true },
        id: { type: String, required: true },
    }
});

module.exports = mongoose.model('ColetaModel', ColetaSchema)
