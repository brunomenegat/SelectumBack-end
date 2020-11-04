const Coleta = require('../../models/coleta')
const { validationError } = require('../../helpers/errorCreate')

class ColetaDomain {
    listar = async () => {
        const data = await Coleta.find()
        .catch(err => {throw( new validationError(err))})
        return data;
    }
    buscarId = async (id) => {
        const data = await Coleta.findById(id)
        return data;
    }
    buscar = async (query) => {
        const data = await Coleta.find(query)
        return data;
    }
}

module.exports = ColetaDomain;
