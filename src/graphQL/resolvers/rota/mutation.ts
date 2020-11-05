import RotaDomain from '../../../domains/rota'
const Rotas = new RotaDomain()

// -------------------MUTAION RESOLVER DAS ROTAS------------------------------------------------------
export default {
    criarRota: (_, { input }) => {
        return Rotas.criar(input)
    },

}
