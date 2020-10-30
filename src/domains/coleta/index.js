const Coleta = require('../../models/coleta')
const { validationError } = require('../../helpers/errorClass')

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
    
}

module.exports = ColetaDomain;
