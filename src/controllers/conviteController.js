var Convite = require("../models/convite")
var nodemailer = require('../nodemailerconf')
genPass = require('easy-password-gen')

exports.exibePagina = function (req, res) {
    return res.render("")
}

exports.convidaCliente = function (req, res) {
    data = req.body
    const token = genPass({
        lenght: 12,
        lowercase: true,
        uppercase: true,
        numbers: true,
        symbols: false,
    })
    Convite.create({email: data.email, token: token}, function (err, convitedata) {
        if (err) return console.error(err);
        console.log("Convite criado e salvo!!!")
    })
    var url = `/novo-comercio/${token}/${data.email}/${data.entrada}/${data.mensal}/${data.meses}/${data.parceiro}`

    
    res.send("OK")
}
