const mongoose = require('mongoose')
const { UserSchema } = require('./user')

let ColetorSchema = UserSchema.clone()

ColetorSchema.add({
    totalKg: {
        organico: { type: Number, default: 0 },
        metal: { type: Number, default: 0 },
        papel: { type: Number, default: 0 },
        plastico: { type: Number, default: 0 },
        vidro: { type: Number, default: 0 },
    }
})

const ColetorModel = mongoose.model('ColetorModel', ColetorSchema)

module.exports = {
    ColetorSchema,
    ColetorModel,
}
