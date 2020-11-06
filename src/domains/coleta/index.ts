const Coleta = require('../../models/coleta')

export default class ColetaDomain {
    // QUERIES
    listar = async (selection) => {
        const data = await Coleta.find().select(selection)
        return data;
    }
    buscarId = async (id) => {
        const data = await Coleta.findById(id)
        return data;
    }
    buscar = async (query) => {
        const data = await Coleta.find({ [query[0]]: query[1] })
        return data;
    }
}
