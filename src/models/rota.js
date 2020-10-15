const mongoose = require('mongoose')

const RotaSchema = new mongoose.Schema({
    nome: { type: String, required: true}, // cidade + bairro + num da rota
    integrantesIDs: [String],
    reciclado: { type: Number, default: 0 }
});

module.exports = mongoose.model('RotaModel', RotaSchema)
