import apartamentoResolver from './apartamento'
import coletaResolver from './coleta'
import coletadorResolver from './coletador'
import comercioResolver from './comercio'
import condominioResolver from './condominio'
import conviteResolver from './convite'
import residenciaResolver from './residencia'
import rotaResolver from './rota'

const resolvers = {
    //--------------------------------QUERIES------------------------------------------
    Query: {
        ...apartamentoResolver.query,
        ...coletaResolver.query,
        ...coletadorResolver.query,
        ...comercioResolver.query,
        ...condominioResolver.query,
        ...conviteResolver.query,
        ...residenciaResolver.query,
        ...rotaResolver.query,
        
    },
    
    //------------------------------MUTATIONS------------------------------------

    Mutation: {
        ...apartamentoResolver.mutation,
        ...coletaResolver.mutation,
        ...coletadorResolver.mutation,
        ...comercioResolver.mutation,
        ...condominioResolver.mutation,
        ...conviteResolver.mutation,
        ...residenciaResolver.mutation,
        ...rotaResolver.mutation,

    }
}

export { resolvers };