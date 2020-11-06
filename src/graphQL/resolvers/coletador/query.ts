import ColetadorDomain from '../../../domains/coletador'
const Coletadores = new ColetadorDomain()

// -------------------QUERY RESOLVER DOS COLETADORRES------------------------------------------------------
export default {
    coletadoresList: (_, __, ___, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        return Coletadores.listar(selection)
    },
        
    coletadorID: (_, { id }) => Coletadores.buscarId(id),

    coletadorFind: (_, { query }) => {
        query = query.split(': ')
        query[1] = new RegExp(query[1], 'i')
        return Coletadores.buscar(query)
    },
}
