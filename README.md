# Backend
Template made with:
Node (Yarn); 
Express; 
Nodemon; 
MongoDB (Mongoose).
 
## Variáveis de Ambiente
As variáveis de ambiente (por exemplo URI do DB e Porta) foram colocadas, por segurança, no arquivo oculto ".env" (que foi adicionado ao .gitignore). Essas variáveis estão sendo gerenciadas pelo pacote "dotenv" e são acessadas pela sintaxe "process.env.NOME_DA_VAR_AMB" (sem aspas).

### Como proceder
Crie um arquivo ".env" na raiz do projeto e adicione as variáveis da seguinte maneira: 
\nMONGO_URI="sua uri".
