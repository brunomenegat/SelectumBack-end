const mongoose = require('mongoose')
const { UserSchema } = require('./user')

let ResidenciaSchema = new mongoose.Schema ({
    diaPgto: { type: String, required: true },
    contratante: UserSchema.clone().remove('adm')
})

const ResidenciaModel = mongoose.model('ResidenciaModel', ResidenciaSchema)

module.exports = {
    ResidenciaSchema,
    ResidenciaModel,
}
