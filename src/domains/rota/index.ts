const Rota = require('../../models/rota')

export default class RotaDomain {
    // QUERIES
    listar = async (selection) => {
        const data = await Rota.find().select(selection)
        return data;
    }    
    buscarId = async (id) => {
        const data = await Rota.findById(id)
        return data;
    }   
    buscar = async (query) => {
        const data = await Rota.find({ [query[0]]: query[1] })
        return data;
    }


    // MUTATIONS
    criar = async (obj) => {
        const data = await Rota.create(obj)
        return data;
    }
    
    
}
