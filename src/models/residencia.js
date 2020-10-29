const mongoose = require('mongoose')
const { UserSchema } = require('./user')

let ResidenciaSchema = UserSchema.clone().remove('adm').add({
    diaPgto: { type: String, required: true },
    reciclado_Ton: { type: Number, default: 0 },
});

const ResidenciaModel = mongoose.model('ResidenciaModel', ResidenciaSchema)

module.exports = {
    ResidenciaSchema,
    ResidenciaModel,
}
