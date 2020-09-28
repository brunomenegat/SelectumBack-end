const mongoose = require('mongoose');

const ColetaSchema = new mongoose.Schema({
    data: { type: String, default: Date },
    rotaID: { type: String, required: true },
    coletor: {
        nome: { type: String, required: true },
        id: { type: String, required: true },
    }
});

module.exports = mongoose.model('ColetaModel', ColetaSchema)
