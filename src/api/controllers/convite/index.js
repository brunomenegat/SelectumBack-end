
//var nodemailer = require("../../config/nodemailer")

exibePagina = async (req, res, next) => {
    return res.render("")
}

convidaCliente = async (req, res, next) => {
    data = req.body
    Convite.create({email: data.email}, function (err, convitedata) {
        if (err) return console.error(err);
        console.log("Convite criado e salvo!!!")
        const token = convitedata._id
        var url = `/novo-comercio/${token}/${data.email}/${data.entrada}/${data.mensal}/${data.meses}/${data.parceiro}`
        res.send(url) //enviar email p/ cliente pedindo para acessar esta url para concluir o cadastro
    })
}

module.exports = {
    exibePagina,
    convidaCliente
}
