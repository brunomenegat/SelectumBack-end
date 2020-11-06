import CondominioDomain from '../../../domains/condominio'
const Condominios = new CondominioDomain()

// -------------------QUERY RESOLVER DOS CONDOMINIOS------------------------------------------------------
export default {
    condominiosList: (_, __, ___, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        return Condominios.listar(selection)
    },
        
    condominioID: (_, { id }) => Condominios.buscarId(id),

    condominioFind: (_, { query }) => {
        query = query.split(': ')
        query[1] = new RegExp(query[1], 'i')
        return Condominios.buscar(query)
    },
}
