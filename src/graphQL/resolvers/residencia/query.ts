import ResidenciaDomain from '../../../domains/residencia'
const Residencias = new ResidenciaDomain()

// -------------------QUERY RESOLVER DAS RESIDENCIAS------------------------------------------------------
export default {
    residenciasList: () => Residencias.listar(),
        
    residenciaID: (_, { id }) => Residencias.buscarId(id),

    residenciaFind: (_, { query }, __, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        Object.keys(query).forEach( key => {
            query[key] = new RegExp(query[key], 'i')
        });
        return Residencias.buscar(query, selection)
    },
}
