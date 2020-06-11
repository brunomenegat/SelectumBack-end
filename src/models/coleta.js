const mongoose = require('mongoose');

const ColetaSchema = new mongoose.Schema({
    data: { type: String, default: Date },
    organico: { type: Number, required: true },
    metal: { type: Number, required: true },
    papel: { type: Number, required: true },
    plastico: { type: Number, required: true },
    vidro: { type: Number, required: true },
    relIds : [{
        coletador: { type: String, required: true },
        local: { type: String, required: true },
    }]
});

module.exports = mongoose.model('Coleta', ColetaSchema);
