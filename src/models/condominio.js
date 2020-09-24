const mongoose = require('mongoose')
const { ColetorSchema } = require("./coletor")

let CondominioSchema = ColetorSchema.clone()

CondominioSchema.add({
    cnpj: { type: String, required: true, unique: true },
    apartamentos: { total: Number, contratados: Number, naoContratados: Number },
    diaPgto: { type: String, required: true },
})

CondominioSchema.remove('cpf')

module.exports = mongoose.model('CondominioModel', CondominioSchema)
