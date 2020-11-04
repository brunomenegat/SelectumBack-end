const inpuTypes = `
    input Contract_Input {
        dataVcmto: String
        duracao: String
    }

    input Plano_Diario_Input {
        dia: String
        bairros: [String]
    }

    input Plano_Semanal_Input {
        plano: [Plano_Diario_Input]
    }

    input Endereco_Input {
        geoLoc: [Float]
        rua: String
        numero: Int
        bloco_apto: String
        UF: String
        cidade: String
        bairro: String
    }

    input Atividade_Input {
        ativo: Boolean
        criadoEm: String
        data_desativacao: String
        motivo : String
    }

    input User_Input {
        adm: Boolean
        nome: String
        cpf: String
        cnpj: String
        email: String
        senha: String
        telefone: String
        reciclado_Ton: Float
        endereco: Endereco_Input
        atividade: Atividade_Input
    }

    input Residencia_Input {
        contratante: User_Input
        diaPgto: String
    }

    input Coletador_Input {
        parceiro: User_Input
        contrato: Contract_Input
        plano: Plano_Semanal_Input
    } 

    input Comercio_Input {
        empresa: User_Input
        parceiro: Boolean
    }

    input Apartamento_Input {
        contratante: User_Input
        diaPgto: String
        condominio_id: ID
    }
    input ApartamentosS_Input {
        contratados: [String]
        qtde_total: Int
        qtde_contratados: Int
    }
    input Condominio_Input {
        contratante: User_Input
        apartamentos: ApartamentosS_Input
    }

    input Rota_Input {
        id: ID
        pontos: [[Float]]
        nome: String
    }

    input Convite_Input {
        email: String
        data: String
    }

    input ColetadorInf_Input {
        nome: String
        id: ID
    }

    input Detalhe_Input {
        foto: String
        comentario: String
    }

    input Coleta_Input {
        rota_id: ID
        coletador: ColetadorInf_Input
        data: String
        pesoKg: Float
        detalhes: [Detalhe_Input]
    }


    type Mutation {
        criarRota(input: Rota_Input): Rota

        criarApto(input: Apartamento_Input): Apartamento
    
    }

`

export { inpuTypes };
