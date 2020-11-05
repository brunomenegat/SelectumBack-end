import ApartamentoDomain from '../../../domains/apartamento'
const Apartamentos = new ApartamentoDomain()

// -------------------MUTAION RESOLVER DOS APTOS------------------------------------------------------
export default {
    criarApto: (_, { input }) => {
        return Apartamentos.criar(input)
    },

}
