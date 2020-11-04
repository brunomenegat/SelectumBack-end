const mongoose = require('mongoose')

const RotaSchema = new mongoose.Schema({
    pontos: { type: [[Number]], required: true, unique: true },
    nome: { type: String, required: true, unique: true } // talvez cidade + UF + bairro
});

module.exports = mongoose.model('RotaModel', RotaSchema)
