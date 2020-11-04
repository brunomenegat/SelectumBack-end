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
const Coletatores = new ColetadorDomain()
const Coletas = new ColetaDomain()
const Apartamentos =  new ApartamentoDomain()

const resolvers = {
    //------------------------------QUERIES------------------------------------
    Query: {
        // RESOLVER DAS ROTAS
        rotas: () => Rotas.listar(),
        rota: (_, { id }) => Rotas.buscarId(id),


        // RESOLVER DAS RESIDENCIAS
        residencias: () => Residencias.listar(),
        residencia: (_, { id }) => Residencias.buscarId(id),


        // RESOLVER DOS CONVITES
        convites: () => Residencias.listar(),
        convite: (_, { id }) => Residencias.buscarId(id),


        // RESOLVER DOS CONDOMINIOS
        condominios: () => Residencias.listar(),
        condominio: (_, { id }) => Residencias.buscarId(id),


        // RESOLVER DOS COMERCIOS
        comercios: () => Residencias.listar(),
        comercio: (_, { id }) => Residencias.buscarId(id),


        // RESOLVER DOS COLETADORRES
        coletadores: () => Residencias.listar(),
        coletador: (_, { id }) => Residencias.buscarId(id),


        //RESOLVER DAS COLETAS
        coletas: () => Residencias.listar(),
        coleta: (_, { id }) => Residencias.buscarId(id),


        // RESOLVER DOS APARTAMENTOS
        apartamentos: () => Residencias.listar(),
        apartamento: (_, { id }) => Residencias.buscarId(id),
    },

    //------------------------------MUTATIONS------------------------------------

    Mutation: {
        // RESOLVER DAS ROTAS
        criarRota: (_, { stringData }) => {
            const obj = JSON.parse(stringData)
            return Rotas.criar(obj)
        },


        // RESOLVER DOS APARTAMENTOS
        // criarApto: (_, { stringData }) => {
        //     const obj = JSON.parse(stringData)
        //     return Apartamentos.criar(obj)
        // }
    }
}

export { resolvers };