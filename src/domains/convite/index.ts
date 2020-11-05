const Convite = require('../../models/convite')

class ConviteDomain {
    // QUERIES
    listar = async () => {
        const data = await Convite.find()
        return data;
    }
    buscarId = async (id) => {
        const data = await Convite.findById(id)
        return data;
    }
    buscar = async (query, selection) => {
        const data = await Convite.find(query, selection)
        return data;
    }
}

module.exports = ConviteDomain;
