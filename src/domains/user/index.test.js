const UserDomain = require('./index')
const userDomain = new UserDomain()

newUser = {
    adm: "false",
    cpf: "0993515",
    email: "vhb34qvhbv@gmail.com",
    senha: "4242333",
    nome: "KAKISAN2",
    endereco: "husuffs 132",
    telefone: "43523",
}

describe('testa criacao de users', () => {
    test('criar user', async () => {
        const user = await userDomain.criarUser(newUser)
        console.log(user)
        expect(user.nome).toBe(newUser.nome)
    });
})
