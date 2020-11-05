const Coletador = require('../../models/coletador')

class ColetadorDomain {
    // QUERIES
    listar = async () => {
        const data = await Coletador.find()
        return data;
    }
    buscarId = async (id) => {
        const data = await Coletador.findById(id)
        return data;
    }
    buscar = async (query, selection) => {
        const data = await Coletador.find(query, selection)
        return data;
    }
}

module.exports = ColetadorDomain;
