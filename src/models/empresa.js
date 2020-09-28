const mongoose = require('mongoose');
const { ResidenciaSchema } = require("./residencia")

let EmpresaSchema = ResidenciaSchema.clone().remove('cpf')
.add({
    cnpj: { type: String, required: true, unique: true },
    parceiro: { type: Boolean, required: true },
});

module.exports = mongoose.model('EmpresaModel', EmpresaSchema)
