const mongoose = require('mongoose')
const { UserSchema } = require('./user')

let ResidenciaSchema = UserSchema.clone().remove('adm')
.add({
    grupoRota: { type: String, default: 'alocar' },
    diaPgto: { type: String, required: true },
})

const ResidenciaModel = mongoose.model('ResidenciaModel', ResidenciaSchema)

module.exports = {
    ResidenciaSchema,
    ResidenciaModel,
}
