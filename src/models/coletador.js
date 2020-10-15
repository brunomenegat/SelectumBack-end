const mongoose = require('mongoose')
const { UserSchema } = require('./user')

let ColetadorSchema = UserSchema.clone()

ColetadorSchema.remove('adm').add({ reciclado: { type: Number, default: 0 } })

module.exports = mongoose.model('ColetadorModel', ColetadorSchema);