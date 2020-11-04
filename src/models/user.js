const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    adm: { type: Boolean, default: false, select: false },
    nome: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true, select: false },
    telefone: { type: String, required: true },
    reciclado_Ton: { type: Number, default: 0 },
    endereco: {
        geoLoc: [{type: Number, required: true, unique: true}], //[latitude, longitude]
        rua: {type: String, required: true},
        numero: {type: Number, required: true},
        bloco_apto: {type : String, default: null},
        UF: {type: String, required: true},
        cidade: {type: String, required: true},
        bairro: {type: String, required: true}
    },
    atividade: {
        ativo: {type: Boolean, default: true},
        criadoEm: { type: String, default: Date },
        data_desativacao: {type: String, default: 'Ainda ativo'},
        motivo : {type: String, default: 'Ainda ativo'}
    }
});

// gerar o hash da senha antes de salvar
UserSchema.pre('save', function (next) {
    const user = this

    // gerar o hash apenas se o senha mudou o para um novo usuário
    if (!user.isModified('senha')) { return next() }

    // gerando o hash
    const hash = bcrypt.hashSync(user.senha)

    // trocando senha pelo hash
    user.senha = hash
    next()
})

// metodo que compara a senha com o hash do banco de dados
UserSchema.methods.comparePassword = function (password) {
    const user = this
    return bcrypt.compareSync(password, user.password)
}

const UserModel = mongoose.model('UserModel', UserSchema)

module.exports = {
    UserSchema,
    UserModel,
}
