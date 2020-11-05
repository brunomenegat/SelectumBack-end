const Comercio = require('../../models/comercio')

class ComercioDomain {
    // QUERIES
    listar = async () => {
        const data = await Comercio.find()
        return data;
    }
    buscarId = async (id) => {
        const data = await Comercio.findById(id)
        return data;
    }
    buscar = async (query, selection) => {
        const data = await Comercio.find(query, selection)
        return data;
    }
}

module.exports = ComercioDomain;

// let criarComercio = async () => {
//     let comerce = new Comercio

//     comerce.nome = "KAKASHI"
//     comerce.adm = false
//     comerce.email = "vhbvhbv@gmail.com"
//     comerce.senha = "42423523"
//     comerce.endereco = "huhfsus"
//     comerce.telefone = "453554353"
//     comerce.CNPJ = "534534354"
//     comerce.parceiro = false
//     comerce.diaPgto = "05"
    
//     const saved = await comerce.save()
    
//     console.log(`saved is: ${saved}`)
// }
