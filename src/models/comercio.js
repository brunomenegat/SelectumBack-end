const mongoose = require('mongoose');
const { ColetorSchema } = require("./coletor")

let ComercioSchema = ColetorSchema.clone()

ComercioSchema.add({
    cnpj: { type: String, required: true, unique: true },
    parceiro: { type: Boolean, required: true },
    diaPgto: { type: String, required: true },
});

ComercioSchema.remove('cpf')

module.exports = mongoose.model('ComercioModel', ComercioSchema)
