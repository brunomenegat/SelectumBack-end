const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const ComercioSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    nome: { type: String, required: true },
    CNPJ: { type: String, required: true, unique: true },
    parceiro: { type: Boolean, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    diaPgto: { type: String, required: true },
    criadoEm: { type: String, default: Date },
    totalKg: {
        organico: { type: Number, default: 0 },
        metal: { type: Number, default: 0 },
        papel: { type: Number, default: 0 },
        plastico: { type: Number, default: 0 },
        vidro: { type: Number, default: 0 },
    }
});

// gerar o hash do password antes de salvar
ComercioSchema.pre('save', function (next) {
    const user = this

    // gerar o hash apenas se o password mudou o para um novo usuário
    if (!user.isModified('password')) { return next() }

    // gerando o hash
    const hash = bcrypt.hashSync(user.password)

    // trocando o password pelo hash
    user.password = hash
    next()
})

// method to compare a given password with the database hash
ComercioSchema.methods.comparePassword = function (password) {
    const user = this
    return bcrypt.compareSync(password, user.password)
}

module.exports = mongoose.model('Comercio', ComercioSchema);
