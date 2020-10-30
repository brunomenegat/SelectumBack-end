const RotaDomain = require('../../domains/rota')
const ResidenciaDomain = require('../../domains/residencia')
const ConviteDomain = require('../../domains/rota')
const CondominioDomain = require('../../domains/rota')
const ComercioDomain = require('../../domains/rota')
const ColetadorDomain = require('../../domains/rota')
const ColetaDomain = require('../../domains/rota')
const ApartamentoDomain = require('../../domains/rota')

const Rotas = new RotaDomain()
const Residencias = new ResidenciaDomain()
const Convites = new ConviteDomain()
const Condominios = new CondominioDomain()
const Comercio = new ComercioDomain()
const Coletator = new ColetadorDomain()
const Coleta = new ColetaDomain()
const Apartamento =  new ApartamentoDomain()

const resolvers = {
    Query: {
        // RESOLVER DAS ROTAS
        rotas: () => Rotas.listar(),
        rota: (_, { id }) => Rotas.buscarId(id),


        //RESOLVER DAS RESIDENCIAS
        residencias: () => Residencias.listar(),
        residencia: (_, { id }) => Residencias.buscarId(id),


        //RESOLVER DOS CONVITES
        convites: () => Residencias.listar(),
        convite: (_, { id }) => Residencias.buscarId(id),


        //RESOLVER DOS CONDOMINIOS
        condominios: () => Residencias.listar(),
        condominio: (_, { id }) => Residencias.buscarId(id),


        //RESOLVER DOS COMERCIOS
        comercios: () => Residencias.listar(),
        comercio: (_, { id }) => Residencias.buscarId(id),


        //RESOLVER DOS COLETADORRES
        coletadores: () => Residencias.listar(),
        coletador: (_, { id }) => Residencias.buscarId(id),


        //RESOLVER DAS COLETAS
        coletas: () => Residencias.listar(),
        coleta: (_, { id }) => Residencias.buscarId(id),


        //RESOLVER DOS APARTAMENTOS
        apartamentos: () => Residencias.listar(),
        apartamento: (_, { id }) => Residencias.buscarId(id),
    }
}

export { resolvers };