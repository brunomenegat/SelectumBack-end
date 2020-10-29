const mongoose = require('mongoose');
const { ResidenciaSchema } = require("./residencia")

let ApartamentoSchema = ResidenciaSchema.clone().add({
    condominio_id: { type: String }
});

module.exports = mongoose.model('ApartamentoModel', ApartamentoSchema)
