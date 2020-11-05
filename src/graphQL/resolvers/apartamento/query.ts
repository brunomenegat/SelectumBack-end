import ApartamentoDomain from '../../../domains/apartamento'
const Apartamentos = new ApartamentoDomain()

// -------------------QUERY RESOLVER DOS APARTAMENTOS------------------------------------------------------
export default {
    apartamentosList: () => Apartamentos.listar(),
        
    apartamentoID: (_, { id }) => Apartamentos.buscarId(id),

    apartamentoFind: (_, { query }, __, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        Object.keys(query).forEach( key => {
            query[key] = new RegExp(query[key], 'i')
        });
        return Apartamentos.buscar(query, selection)
    },
}
