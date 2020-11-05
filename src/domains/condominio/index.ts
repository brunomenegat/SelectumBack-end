const Condominio = require('../../models/condominio')

class CondominioDomain {
    listar = async () => {
        const data = await Condominio.find()
        return data;
    }
    buscarId = async (id) => {
        const data = await Condominio.findById(id)
        return data;
    }
    buscar = async (query, selection) => {
        const data = await Condominio.find(query, selection)
        return data;
    }
}

module.exports = CondominioDomain;