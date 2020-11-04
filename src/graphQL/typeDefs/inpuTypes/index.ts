const inpuTypes = `
    input EnderecoInput {
        geoLoc: [Float!]
        rua: String
        numero: Int
        bloco_apto: String
        UF: String
        cidade: String
        bairro: String
    }

    type Mutation {

        criarRota(pontos: [[Float]], nome: String): Rota
    
    }

`

export { inpuTypes };