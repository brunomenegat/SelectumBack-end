const mongoose = require('mongoose')
const { UserSchema } = require('./user')

let ColetorSchema = UserSchema.clone()

ColetorSchema.remove('adm')

ColetorSchema.add({ reciclado: { type: Number, default: 0 } })

module.exports = mongoose.model('ColetorModel', ColetorSchema);