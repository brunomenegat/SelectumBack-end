const mongoose = require('mongoose');
const { ResidenciaSchema } = require("./residencia")

let ApartamentoSchema = ResidenciaSchema.clone().add({
    condominio_id: { type: String },
    apto: {
        bloco: String,
        numero: Number
    }
});

module.exports = mongoose.model('ApartamentoModel', ApartamentoSchema)
