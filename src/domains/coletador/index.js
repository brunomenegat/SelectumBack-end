const Coletador = require('../../models/coletador')
const { validationError } = require('../../helpers/errorCreate')

class ColetadorDomain {
    listar = async () => {
        const data = await Coletador.find()
        .catch(err => {throw( new validationError(err))})
        return data;
    }
    buscarId = async (id) => {
        const data = await Coletador.findById(id)
        return data;
    }
    buscar = async (query) => {
        const data = await Coletador.find(query)
        return data;
    }
}

module.exports = ColetadorDomain;
