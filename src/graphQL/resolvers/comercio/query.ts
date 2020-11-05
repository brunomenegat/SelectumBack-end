import ComercioDomain from '../../../domains/comercio'
const Comercios = new ComercioDomain()

// -------------------QUERY RESOLVER DOS COMERCIOS------------------------------------------------------
export default {
    comerciosList: () => Comercios.listar(),
        
    comercioID: (_, { id }) => Comercios.buscarId(id),

    comercioFind: (_, { query }, __, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        Object.keys(query).forEach( key => {
            query[key] = new RegExp(query[key], 'i')
        });
        return Comercios.buscar(query, selection)
    },
}
