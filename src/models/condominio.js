const mongoose = require('mongoose')
const { ResidenciaSchema } = require("./residencia")

let CondominioSchema = ResidenciaSchema.clone().remove('cpf').add({
    cnpj: { type: String, required: true, unique: true },
    apartamentos: {
        contratados: [String],
        qtde_total: Number,
        qtde_contratados: Number
    }
});

module.exports = mongoose.model('CondominioModel', CondominioSchema)
