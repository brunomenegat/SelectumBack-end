import ResidenciaDomain from '../../../domains/residencia'
const Residencias = new ResidenciaDomain()

// -------------------QUERY RESOLVER DAS RESIDENCIAS------------------------------------------------------
export default {
    residenciasList: (_, __, ___, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        return Residencias.listar(selection)
    },
        
    residenciaID: (_, { id }) => Residencias.buscarId(id),

    residenciaFind: (_, { query }) => {
        query = query.split(': ')
        query[1] = new RegExp(query[1], 'i')
        return Residencias.buscar(query)
    },
}
