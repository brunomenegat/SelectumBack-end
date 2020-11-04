const Comercio = require('../../models/comercio')
const { validationError } = require('../../helpers/errorCreate')

class ComercioDomain {
    listar = async () => {
        const data = await Comercio.find()
        .catch(err => {throw( new validationError(err))})
        return data;
    }
    buscarId = async (id) => {
        const data = await Comercio.findById(id)
        return data;
    }
    buscar = async (query) => {
        const data = await Comercio.find(query)
        return data;
    }
}

module.exports = ComercioDomain;
