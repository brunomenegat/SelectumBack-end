const mongoose = require('mongoose');

const ColetaSchema = new mongoose.Schema({
    rota_id: { type: String, required: true },
    coletador: {
        nome: { type: String, required: true },
        id: { type: String, required: true },
    },
    data: { type: String, default: Date },
    pesoKg: { type: Number, required: true },
    detalhes: [{
        foto: { data: Buffer, contentType: String },
        comentario: { type: String }
    }]
});

module.exports = mongoose.model('ColetaModel', ColetaSchema)
