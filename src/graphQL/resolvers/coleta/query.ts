import ColetaDomain from '../../../domains/coleta'
const Coletas = new ColetaDomain()

// -------------------QUERY RESOLVER DAS COLETAS------------------------------------------------------
export default {
    coletasList: (_, __, ___, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        });
        return Coletas.listar(selection)
    },

    coletaID: (_, { id }) => Coletas.buscarId(id),

    coletaFind: (_, { query }) => {
        query = query.split(': ')
        query[1] = new RegExp(query[1], 'i')
        return Coletas.buscar(query)
    },
}
