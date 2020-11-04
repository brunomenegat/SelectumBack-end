const { ResidenciaModel: Residencia } = require('../../models/residencia')
const { validationError } = require('../../helpers/errorCreate')

class ResidenciaDomain {
    listar = async () => {
        const data = await Residencia.find()
        .catch(err => {throw( new validationError(err))})
        return data;
    }
    buscarId = async (id) => {
        const data = await Residencia.findById(id)
        return data;
    }
    
}

module.exports = ResidenciaDomain;
