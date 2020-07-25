var nodemailer = require('nodemailer')

var remetente = nodemailer.createTransport({

    host: '',

    service: '',

    port: 587,

    secure: true,

    auth:{

    user: 'seuEmail@email.com',

    pass: 'suaSenha' }

});

module.exports = nodemailer
