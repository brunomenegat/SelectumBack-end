var Convite = require("../models/convite")
var nodemailer = require('../nodemailerconf')

exports.exibePagina = function (req, res) {
    return res.render("")
}

exports.convidaCliente = function (req, res) {
    data = req.body
    Convite.create({email: data.email}, function (err, convitedata) {
        if (err) return console.error(err);
        console.log("Convite criado e salvo!!!")
        const token = convitedata._id
        var url = `/novo-comercio/${token}/${data.email}/${data.entrada}/${data.mensal}/${data.meses}/${data.parceiro}`
        res.send(url) //enviar email p/ cliente pedindo para acessar esta url para concluir o cadastro
    })
}
