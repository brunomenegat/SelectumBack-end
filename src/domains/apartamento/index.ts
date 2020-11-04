const Apartamento = require('../../models/apartamento')

class ApartamentoDomain {
    // QUERIES
    listar = async () => {
        const data = await Apartamento.find()
        return data;
    }
    buscarId = async (id) => {
        const data = await Apartamento.findById(id)
        return data;
    }


    // MUTATIONS
    criar = async (obj) => {
        const data = await Apartamento.create(obj)
        return data;
    }
}

module.exports = ApartamentoDomain;
