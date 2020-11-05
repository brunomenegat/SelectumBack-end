import ColetadorDomain from '../../../domains/coletador'
const Coletadores = new ColetadorDomain()

// -------------------QUERY RESOLVER DOS COLETADORRES------------------------------------------------------
export default {
    coletadoresList: () => Coletadores.listar(),
        
    coletadorID: (_, { id }) => Coletadores.buscarId(id),

    coletadorFind: (_, { query }, __, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        Object.keys(query).forEach( key => {
            query[key] = new RegExp(query[key], 'i')
        });
        return Coletadores.buscar(query, selection)
    },
}
