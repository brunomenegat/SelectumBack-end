const Comercio = require('../../models/comercio')

criarComercio = async () => {
    let comerce = new Comercio

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
