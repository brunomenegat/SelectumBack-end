const Apartamento = require('../../models/apartamento')
const { validationError } = require('../../helpers/errorClass')

class ApartamentoDomain {
    listar = async () => {
        const data = await Apartamento.find()
        .catch(err => {throw( new validationError(err))})
        return data;
    }
    buscarId = async (id) => {
        const data = await Apartamento.findById(id)
        return data;
    }
    
}

module.exports = ApartamentoDomain;
