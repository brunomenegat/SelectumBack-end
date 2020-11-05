const { ResidenciaModel: Residencia } = require('../../models/residencia')

export default class ResidenciaDomain {
    // QUERIES
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

