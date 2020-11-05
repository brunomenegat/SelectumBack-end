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
        ...rotaResolver.query,
        ...apartamentoResolver.query,
        ...coletaResolver.query,
        ...coletadorResolver.query,
        ...comercioResolver.query,
        ...condominioResolver.query,
        ...conviteResolver.query,
        ...residenciaResolver.query,
        
    },
    
    //------------------------------MUTATIONS------------------------------------

    Mutation: {
        ...rotaResolver.mutation,
        ...apartamentoResolver.mutation,
        ...coletaResolver.mutation,
        ...coletadorResolver.mutation,
        ...comercioResolver.mutation,
        ...condominioResolver.mutation,
        ...conviteResolver.mutation,
        ...residenciaResolver.mutation,

    }
}

export { resolvers };
