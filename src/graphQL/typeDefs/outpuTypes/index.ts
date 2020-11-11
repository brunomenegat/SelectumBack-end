const outpuTypes = `
    type Contract {
        dataVcmto: String!
        duracao: String!
    }

    type Plano_Diario {
        dia: String!
        bairros: [String!]!
    }

    type Plano_Semanal {
        plano: [Plano_Diario!]!
    }

    type Endereco {
        geoLoc: [Float!]
        cep: String
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
        id: ID!
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
        diaPgto: String!
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
        contratados: [String!]
        qtde_total: Int
        qtde_contratados: Int
    }
    type Condominio {
        contratante: User!
        apartamentos: ApartamentosS
    }

    type Rota {
        id: ID!
        pontos: [[Float!]!]!
        nome: String!
    }

    type Convite {
        email: String!
        data: String!
    }

    type ColetadorInf {
        nome: String!
        id: ID!
    }

    type Detalhe {
        foto: String
        comentario: String
    }

    type Coleta {
        rota_id: ID
        coletador: ColetadorInf!
        data: String!
        pesoKg: Float!
        detalhes: [Detalhe]
    }
    
    
    type Query {
        apartamentosList: [Apartamento!]
        apartamentoID(id: ID): Apartamento
        apartamentoFind(query: String) : [Apartamento]
        
        coletasList: [Coleta!]
        coletaID(id: ID): Coleta
        coletaFind(query: String) : [Coleta]
        
        coletadoresList: [Coletador!]
        coletadorID(id: ID): Coletador
        coletadorFind(query: String) : [Coletador]
        
        comerciosList: [Comercio!]
        comercioID(id: ID): Comercio
        comercioFind(query: String) : [Comercio]

        condominiosList: [Condominio!]
        condominioID(id: ID): Condominio
        condominioFind(query: String) : [Condominio]

        convitesList: [Convite!]
        conviteID(id: ID): Residencia
        conviteFind(query: String) : [Convite]        
        
        residenciasList: [Residencia!]
        residenciaID(id: ID): Residencia
        residenciaFind(query: String) : [Residencia]
        
        rotasList: [Rota!]!
        rotaID(id: ID): Rota
        rotaFind(query: String) : [Rota]
    }
    
    `
    export { outpuTypes };