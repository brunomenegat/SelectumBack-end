const Condominio = require('../../models/condominio')
const { validationError } = require('../../helpers/errorCreate')

class CondominioDomain {
    listar = async () => {
        const data = await Condominio.find()
        .catch(err => {throw( new validationError(err))})
        return data;
    }
    buscarId = async (id) => {
        const data = await Condominio.findById(id)
        return data;
    }
    
}

module.exports = CondominioDomain;