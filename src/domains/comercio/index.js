const Comercio = require("../comercio")

criarComercio = async (req, res) => {
    let comerce = new Comercio

    console.log(comerce)

    comerce.nome = "KAKASHI"
    comerce.adm = false
    comerce.email = "vhbvhbv@gmail.com"
    comerce.senha = "42423523"
    comerce.endereco = "huhfsus"
    comerce.telefone = "453554353"
    comerce.CNPJ = "534534354"
    comerce.parceiro = false
    comerce.diaPgto = "05"
    
    const saved = await comerce.save()
    console.log(`saved is: ${saved}`)
}

listarComerciosNome = async (req, res) => {
    console.log("buscando...")
    const comercio = await Comercio.find({ nome: "KAKASHI" });
    console.log(comercio)
}
