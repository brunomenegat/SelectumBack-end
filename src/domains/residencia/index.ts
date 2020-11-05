const { ResidenciaModel: Residencia } = require('../../models/residencia')

class ResidenciaDomain {
    listar = async () => {
        const data = await Residencia.find()
        return data;
    }
    buscarId = async (id) => {
        const data = await Residencia.findById(id)
        return data;
    }
    buscar = async (query, selection) => {
        const data = await Residencia.find(query, selection)
        return data;
    }
}

module.exports = ResidenciaDomain;
