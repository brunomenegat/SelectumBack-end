

listarComerciosNome = async (req, res) => {
    const comercios = await Comercio.find({nome: req.query.nome});
    console.log(comercios)
    res.json(comercios)
};

criarComercio = function(req, res) {
    Comercio.create(req.body, function(err, comercio) {
        if (err) return console.error(err);
        console.log("Comercio criado e salvo!!!")
        res.json(comercio)
    })
};

removerComercioNome = function(req, res) {
    Comercio.deleteOne({nome: req.query.nome}, function(err, data) {
        if (err) return console.error(err);
        res.json(data);
    })
};

/*
exports.adicionar_coleta = function(req, res) {
    Comercio.findOne({nome: req.body.nome}, function(err, comercio) {
        if (err) return console.error(err);
        delete req.body.nome;
        comercio.coletasKg.push(req.body)
        comercio.totalKg.organico += req.body.organico;
        comercio.totalKg.metal += req.body.metal;
        comercio.totalKg.papel += req.body.papel;
        comercio.totalKg.plastico += req.body.plastico;
        comercio.totalKg.vidro += req.body.vidro;
        comercio.save()
        res.json(comercio);
    })
};
*/