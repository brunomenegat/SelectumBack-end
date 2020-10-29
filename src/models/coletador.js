const mongoose = require('mongoose')
const { UserSchema } = require('./user')

let ColetadorSchema = UserSchema.clone().remove('adm').add({ 
    contrato: {
        dataVcmto: {type:String, default: Date},
        duracao: {type: String, default: '6 meses'}
    },
    plano_Semanal: [{
        dia: { type: String, required: true },
        bairros: [{ type: String }]
    }]
});

module.exports = mongoose.model('ColetadorModel', ColetadorSchema);