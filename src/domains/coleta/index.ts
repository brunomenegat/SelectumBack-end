const Coleta = require('../../models/coleta')

class ColetaDomain {
    // QUERIES
    listar = async () => {
        const data = await Coleta.find()
        return data;
    }
    buscarId = async (id) => {
        const data = await Coleta.findById(id)
        return data;
    }
    buscar = async (query, selection) => {
        const data = await Coleta.find(query, selection)
        return data;
    }
}

module.exports = ColetaDomain;
