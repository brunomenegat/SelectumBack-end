const RotaDomain = require('../../domains/rota')
const ResidenciaDomain = require('../../domains/residencia')
const ConviteDomain = require('../../domains/convite')
const CondominioDomain = require('../../domains/condominio')
const ComercioDomain = require('../../domains/comercio')
const ColetadorDomain = require('../../domains/coletador')
const ColetaDomain = require('../../domains/coleta')
const ApartamentoDomain = require('../../domains/apartamento')

const Rotas = new RotaDomain()
const Residencias = new ResidenciaDomain()
const Convites = new ConviteDomain()
const Condominios = new CondominioDomain()
const Comercios = new ComercioDomain()
const Coletadores = new ColetadorDomain()
const Coletas = new ColetaDomain()
const Apartamentos = new ApartamentoDomain()

const resolvers = {
    //------------------------------QUERIES------------------------------------
    Query: {
        // -------------------RESOLVER DAS ROTAS------------------------------------------------------
        rotasList: () => Rotas.listar(),

        rotaID: (_, { id }) => Rotas.buscarId(id),

        rotaFind: (_, { query }, context, info) => {
            let selection = new String('')
            info.operation.selectionSet.selections[0].selectionSet.selections.forEach(element => {
                selection = selection.concat(element.name.value).concat(' ')
            }); 
            Object.keys(query).forEach( key => {
                query[key] = new RegExp(query[key], 'i')
            });
            return Rotas.buscar(query, selection)
        },


        // -------------------RESOLVER DAS RESIDENCIAS------------------------------------------------------
        residenciasList: () => Residencias.listar(),
        
        residenciaID: (_, { id }) => Residencias.buscarId(id),

        residenciaFind: (_, { query }) => {
            Object.keys(query).forEach( key => {
                query[key] = new RegExp(query[key], 'i')
            });
            return Residencias.buscar(query)
        },


        // -------------------RESOLVER DOS CONVITES------------------------------------------------------
        convitesList: () => Residencias.listar(),
        
        conviteID: (_, { id }) => Residencias.buscarId(id),

        conviteFind: (_, { query }) => {
            Object.keys(query).forEach( key => {
                query[key] = new RegExp(query[key], 'i')
            });
            return Convites.buscar(query)
        },

        // -------------------RESOLVER DOS CONDOMINIOS------------------------------------------------------
        condominiosList: () => Residencias.listar(),
        
        condominioID: (_, { id }) => Residencias.buscarId(id),

        condominioFind: (_, { query }) => {
            Object.keys(query).forEach( key => {
                query[key] = new RegExp(query[key], 'i')
            });
            return Condominios.buscar(query)
        },

        // -------------------RESOLVER DOS COMERCIOS------------------------------------------------------
        comerciosList: () => Residencias.listar(),
        
        comercioID: (_, { id }) => Residencias.buscarId(id),

        comercioFind: (_, { query }) => {
            Object.keys(query).forEach( key => {
                query[key] = new RegExp(query[key], 'i')
            });
            return Comercios.buscar(query)
        },

        // -------------------RESOLVER DOS COLETADORRES------------------------------------------------------
        coletadoresList: () => Residencias.listar(),
        
        coletadorID: (_, { id }) => Residencias.buscarId(id),

        coletadorFind: (_, { query }) => {
            Object.keys(query).forEach( key => {
                query[key] = new RegExp(query[key], 'i')
            });
            return Coletadores.buscar(query)
        },

        // -------------------RESOLVER DAS COLETAS------------------------------------------------------
        coletasList: () => Residencias.listar(),
        
        coletaID: (_, { id }) => Residencias.buscarId(id),

        coletaFind: (_, { query }) => {
            Object.keys(query).forEach( key => {
                query[key] = new RegExp(query[key], 'i')
            });
            return Coletas.buscar(query)
        },

        // -------------------RESOLVER DOS APARTAMENTOS------------------------------------------------------
        apartamentosList: () => Residencias.listar(),
        
        apartamentoID: (_, { id }) => Residencias.buscarId(id),

        apartamentoFind: (_, { query }) => {
            Object.keys(query).forEach( key => {
                query[key] = new RegExp(query[key], 'i')
            });
            return Apartamentos.buscar(query)
        },
    },

    //------------------------------MUTATIONS------------------------------------

    Mutation: {
        // -------------------RESOLVER DAS ROTAS------------------------------------------------------
        criarRota: (_, { input }) => {
            return Rotas.criar(input)
        },


        // -------------------RESOLVER DOS APARTAMENTOS------------------------------------------------------
        criarApto: (_, { input }) => {
            return Apartamentos.criar(input)
        }
    }
}

export { resolvers };
