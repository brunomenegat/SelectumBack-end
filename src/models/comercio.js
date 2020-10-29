const mongoose = require('mongoose');
const { ComercioSchema } = require("./residencia")

const ComercioSchema = ResidenciaSchema.clone().remove('cpf').add({
    cnpj: { type: String, required: true, unique: true },
    parceiro: { type: Boolean, required: true },
});

module.exports = mongoose.model('ComercioModel', ComercioSchema)
