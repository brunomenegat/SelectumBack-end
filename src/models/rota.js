const mongoose = require('mongoose')

const RotaSchema = new mongoose.Schema({
    pontos: [[Number]],
    nome: { type: String, required: true} // talvez cidade + UF + bairro
});

module.exports = mongoose.model('RotaModel', RotaSchema)
