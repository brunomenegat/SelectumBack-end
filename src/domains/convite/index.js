const Convite = require('../../models/convite')
const { validationError } = require('../../helpers/errorCreate')

class ConviteDomain {
    listar = async () => {
        const data = await Convite.find()
        .catch(err => {throw( new validationError(err))})
        return data;
    }
    buscarId = async (id) => {
        const data = await Convite.findById(id)
        return data;
    }
    buscar = async (query) => {
        const data = await Convite.find(query)
        return data;
    }
}

module.exports = ConviteDomain;
