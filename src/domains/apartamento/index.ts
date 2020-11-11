const Apartamento = require('../../models/apartamento')
const { isCpf, isCep} = require('validator-brazil')

export default class ApartamentoDomain {
    // QUERIES
    listar = async (selection) => {
        const data = await Apartamento.find().select(selection)
        return data;
    }
    buscarId = async (id) => {
        const data = await Apartamento.findById(id)
        return data;
    }
    buscar = async (query) => {
        const data = await Apartamento.find({ [query[0]]: query[1] })
        return data;
    }

    // MUTATIONS
    criar = async (obj) => {
        if (isCpf(obj.contratante.cpf)) {
            if (isCep(obj.contratante.endereco.cep)) {
                const data = await Apartamento.create(obj)
                return data;
            }
            else throw ('erro: CEP inválido')
        }
        else throw ('erro: CPF inválido')
    }
    
    // atualizar = async (obj) => {

    // }
}
