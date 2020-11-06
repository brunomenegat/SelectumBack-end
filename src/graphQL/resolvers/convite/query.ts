import ConviteDomain from '../../../domains/convite'
const Convites = new ConviteDomain()

// -------------------QUERY RESOLVER DOS CONVITES------------------------------------------------------
export default {
    convitesList: (_, __, ___, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        });
        return Convites.listar(selection)
    },
        
    conviteID: (_, { id }) => Convites.buscarId(id),

    conviteFind: (_, { query }) => { 
        query = query.split(': ')
        query[1] = new RegExp(query[1], 'i')
        return Convites.buscar(query)
    },
}
