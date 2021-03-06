const mongoose = require('mongoose')
const { UserSchema } = require('./user')

let ColetadorSchema = UserSchema.clone()

ColetadorSchema.remove('adm').add({ 
    reciclado_Ton: { type: Number, default: 0 },
    plano_Semanal: [{
        dia: { type: String, required: true },
        bairros: [{ type: String, required: true }]
    }]
});

module.exports = mongoose.model('ColetadorModel', ColetadorSchema);