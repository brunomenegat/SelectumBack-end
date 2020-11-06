const Condominio = require('../../models/condominio')

export default class CondominioDomain {
    // QUERIES
    listar = async (selection) => {
        const data = await Condominio.find().select(selection)
        return data;
    }
    buscarId = async (id) => {
        const data = await Condominio.findById(id)
        return data;
    }
    buscar = async (query) => {
        const data = await Condominio.find({ [query[0]]: query[1] })
        return data;
    }
}
