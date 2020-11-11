import ApartamentoDomain from '../../../domains/apartamento'
const Apartamentos = new ApartamentoDomain()

// -------------------QUERY RESOLVER DOS APARTAMENTOS------------------------------------------------------
export default {
    apartamentosList: (_, __, ___, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        });
        return Apartamentos.listar(selection)
    },

    apartamentoID: (_, { id }) => Apartamentos.buscarId(id),

    apartamentoFind: (_, { query }) => {
        query = query.split(': ')
        query[1] = new RegExp(query[1], 'i')        
        return Apartamentos.buscar(query)
    },
}
