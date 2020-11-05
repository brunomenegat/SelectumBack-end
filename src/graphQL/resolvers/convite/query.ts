import ConviteDomain from '../../../domains/convite'
const Convites = new ConviteDomain()

// -------------------QUERY RESOLVER DOS CONVITES------------------------------------------------------
export default {
    convitesList: () => Convites.listar(),
        
    conviteID: (_, { id }) => Convites.buscarId(id),

    conviteFind: (_, { query }, __, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        Object.keys(query).forEach( key => {
            query[key] = new RegExp(query[key], 'i')
        });
        return Convites.buscar(query, selection)
    },
}
