import ColetaDomain from '../../../domains/coleta'
const Coletas = new ColetaDomain()

// -------------------QUERY RESOLVER DAS COLETAS------------------------------------------------------
export default {
    coletasList: () => Coletas.listar(),
        
    coletaID: (_, { id }) => Coletas.buscarId(id),

    coletaFind: (_, { query }, __, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        Object.keys(query).forEach( key => {
            query[key] = new RegExp(query[key], 'i')
        });
        return Coletas.buscar(query, selection)
    },
}
