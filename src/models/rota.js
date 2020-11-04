const mongoose = require('mongoose')

const RotaSchema = new mongoose.Schema({
    nome: { type: String, required: true, unique: true }, // talvez cidade + UF + bairro
    pontos: [[ { type: Number, required: true, _id: false, unique: false } ]]
});

module.exports = mongoose.model('RotaModel', RotaSchema)
