import CondominioDomain from '../../../domains/condominio'
const Condominios = new CondominioDomain()

// -------------------QUERY RESOLVER DOS CONDOMINIOS------------------------------------------------------
export default {
    condominiosList: () => Condominios.listar(),
        
    condominioID: (_, { id }) => Condominios.buscarId(id),

    condominioFind: (_, { query }, __, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        Object.keys(query).forEach( key => {
            query[key] = new RegExp(query[key], 'i')
        });
        return Condominios.buscar(query, selection)
    },
}
