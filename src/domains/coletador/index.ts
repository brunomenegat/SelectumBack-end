const Coletador = require('../../models/coletador')

export default class ColetadorDomain {
    // QUERIES
    listar = async (selection) => {
        const data = await Coletador.find().select(selection)
        return data;
    }
    buscarId = async (id) => {
        const data = await Coletador.findById(id)
        return data;
    }
    buscar = async (query) => {
        const data = await Coletador.find({ [query[0]]: query[1] })
        return data;
    }
}

