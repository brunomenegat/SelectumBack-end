const mongoose = require('mongoose')
const { ResidenciaSchema } = require("./residencia")

let CondominioSchema = ResidenciaSchema.clone().remove('cpf')
.add({
    cnpj: { type: String, required: true, unique: true },
    apartamentos: { 
        total: Number,
        contratados: Number,
        naoContratados: { type: Number, default: total - contratados}, 
    }
});

module.exports = mongoose.model('CondominioModel', CondominioSchema)
