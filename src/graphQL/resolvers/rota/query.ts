import RotaDomain from '../../../domains/rota'
const Rotas = new RotaDomain()

// -------------------QUERY RESOLVER DAS ROTAS------------------------------------------------------
export default {    
    rotasList: (_, __, ___, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        return Rotas.listar(selection)
    },

    rotaID: (_, { id }) => Rotas.buscarId(id),

    rotaFind: (_, { query }) => {
        query = query.split(': ')
        query[1] = new RegExp(query[1], 'i')
        return Rotas.buscar(query)
    },
}
