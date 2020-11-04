const Rota = require('../../models/rota')

class RotaDomain {
    // QUERIES
    listar = async () => {
        const data = await Rota.find()
        return data;
    }
    buscarId = async (id) => {
        const data = await Rota.findById(id)
        return data;
    }
    
    // MUTATIONS
    criar = async (obj) => {
        const data = await Rota.create(obj)
        return data;
    }
    
}

module.exports = RotaDomain;