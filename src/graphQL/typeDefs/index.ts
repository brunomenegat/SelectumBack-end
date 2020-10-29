const typeDefs = `
    type endereco {
        geoLoc: [Float!]
        rua: String
        numero: Int
        UF: String
        cidade: String
        bairro: String
    }


    type Residencia {
        adm: Boolean,
        endereco: {
            geoLoc:  [{type: Number, required: true, unique: true}], //[latitude, longitude]
            rua: {type: String, required: true},
            numero: {type: Number, required: true},
            UF: {type: String, required: true},
            cidade: {type: String, required: true},
            bairro: {type: String, required: true}
        },
        nome: { type: String, required: true },
        cpf: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        senha: { type: String, required: true, select: false },
        telefone: { type: String, required: true },
        atividade: {
            ativo: {type: Boolean, default: true},
            criadoEm: { type: String, default: Date },
            data_desativacao: {type: String, default: 'Ainda ativo'},
            motivo : {type: String, default: 'Ainda ativo'}
        }
    }

    type Query {
    hello(name: String): String!
    }
`
export { typeDefs };