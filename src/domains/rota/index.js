const Rota = require('../../models/rota')
const { validationError } = require('../../helpers/errorClass')

class RotaDomain {
    listar = async () => {
        const data = await Rota.find()
        return data;
    }
    buscarId = async (id) => {
        const data = await Rota.findById(id)
        return data;
    }
    
}

module.exports = RotaDomain;