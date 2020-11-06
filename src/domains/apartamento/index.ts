const Apartamento = require('../../models/apartamento')

export default class ApartamentoDomain {
    // QUERIES
    listar = async (selection) => {
        const data = await Apartamento.find().select(selection)
        return data;
    }
    buscarId = async (id) => {
        const data = await Apartamento.findById(id)
        return data;
    }
    buscar = async (query) => {
        const data = await Apartamento.find({ [query[0]]: query[1] })
        return data;
    }

    // MUTATIONS
    criar = async (obj) => {
        const data = await Apartamento.create(obj)
        return data;
    }
}
