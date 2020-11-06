import ComercioDomain from '../../../domains/comercio'
const Comercios = new ComercioDomain()

// -------------------QUERY RESOLVER DOS COMERCIOS------------------------------------------------------
export default {
    comerciosList: (_, __, ___, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        });
        return Comercios.listar(selection)
    },

    comercioID: (_, { id }) => Comercios.buscarId(id),

    comercioFind: (_, { query }) => {
        query = query.split(': ')
        query[1] = new RegExp(query[1], 'i')
        return Comercios.buscar(query)
    },
}
