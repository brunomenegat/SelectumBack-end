import RotaDomain from '../../../domains/rota'
const Rotas = new RotaDomain()

// -------------------QUERY RESOLVER DAS ROTAS------------------------------------------------------
export default {
    rotasList: () => Rotas.listar(),

    rotaID: (_, { id }) => Rotas.buscarId(id),

    rotaFind: (_, { query }, __, info) => {
        let selection = new String('')
        info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
            selection = selection.concat(element.name.value).concat(' ')
        }); 
        Object.keys(query).forEach( key => {
            query[key] = new RegExp(query[key], 'i')
        });
        return Rotas.buscar(query, selection)
    },
}
