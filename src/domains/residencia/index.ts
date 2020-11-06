const { ResidenciaModel: Residencia } = require('../../models/residencia')

export default class ResidenciaDomain {
    // QUERIES
    listar = async (selection) => {
        const data = await Residencia.find().select(selection)
        return data;
    }
    buscarId = async (id) => {
        const data = await Residencia.findById(id)
        return data;
    }
    buscar = async (query) => {
        const data = await Residencia.find({ [query[0]]: query[1] })
        return data;
    }
}

