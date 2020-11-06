const Convite = require('../../models/convite')

export default class ConviteDomain {
    // QUERIES
    listar = async (selection) => {
        const data = await Convite.find().select(selection)
        return data;
    }
    buscarId = async (id) => {
        const data = await Convite.findById(id)
        return data;
    }
    buscar = async (query) => {
        const data = await Convite.find({ [query[0]]: query[1] })
        return data;
    }
}
