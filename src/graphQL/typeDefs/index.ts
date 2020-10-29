const typeDefs = `
    type Contract {
        dataVcmto: String!
        duracao: String!
    }


    type Plano_Diario {
        dia: String!
        bairros: [String]!
    }


    type Plano_Semanal {
        plano: [Plano_Diario!]!
    }


    type Endereco {
        geoLoc: [Float!]
        rua: String
        numero: Int
        bloco_apto: String
        UF: String
        cidade: String
        bairro: String
    }


    type Atividade {
        ativo: Boolean!
        criadoEm: String!
        data_desativacao: String!
        motivo : String!
    }


    type User {
        id: ID
        adm: Boolean
        nome: String!
        cpf: String
        cnpj: String
        email: String
        telefone: String
        reciclado_Ton: Float
        endereco: Endereco
        atividade: Atividade
    }


    type Residencia {
        contratante: User!
        diaPgto: String
    }


    type Coletador {
        parceiro: User!
        contrato: Contract
        plano: Plano_Semanal
    } 


    type Comercio {
        empresa: User!
        parceiro: Boolean!
    }


    type Apartamento {
        contratante: User!
        diaPgto: String
        condominio_id: ID
    }
    type ApartamentosS {
        contratados: [String]
        qtde_total: Int
        qtde_contratados: Int
    }

    type Condominio {
        contratante: User
        apartamentos: ApartamentosS
    }


    type Rota {
        id: ID
        pontos: [[Float!]!]!
        nome: String
    }


    type Convite {
        email: String!
        data: String!
    }


    type ColetadorInf {
        nome: String
        id: ID
    }


    type Detalhe {
        foto: String
        comentario: String
    }


    type Coleta {
        rota_id: String
        coletador: ColetadorInf!
        data: String!
        pesoKg: Float!
        detalhes: [Detalhe]
    }


    type Query {
        info: String!
    }
    
`
export { typeDefs };