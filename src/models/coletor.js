const mongoose = require('mongoose');

var ColetorSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    fone: {type: String, required: true},
    endereco: {type: String, required: true},
    criadoEm: {type: String, default: Date},
    coletas: [{
        local: {type: String, required: true},
        metal: Number,
        papel: Number,
        plastico: Number,
        vidro: Number,
        data: {type: String, default: Date}
    }]
});

ColetorSchema.methods.addColeta = function(dadosDaColeta, done) {
    this.coletas.push(dadosDaColeta);
    done(null, this)
};

var Coletor = mongoose.model('Coletor', ColetorSchema);

module.exports.Coletor = Coletor;
