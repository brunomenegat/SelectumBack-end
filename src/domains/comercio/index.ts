const Comercio = require('../../models/comercio')

class ComercioDomain {
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
