## Variáveis de Ambiente
As variáveis de ambiente (por exemplo URI do DB e Porta) foram colocadas, por segurança, no arquivo oculto ***.env*** (que foi adicionado ao *.gitignore*). Essas variáveis são gerenciadas pelo pacote *dotenv* e são acessadas pela sintaxe "process.env.NOME_DA_VAR_AMB" (sem aspas).

### Como proceder
Crie um arquivo ***.env*** na raiz do projeto e adicione as variáveis da seguinte maneira:  
MONGO_URI="uri do seu atlas ou path do local host"  
PORT="num da porta que quer que o servidor escute"  
  
Detalhe: a senha da URI não pode conter caracteres especiais (como "!").  
  
No código essas variáveis já estão sendo acessadas (process.env.MONGO_URI e process.env.PORT). Para mais informações sobre como utilizar o dotenv acesse o [GitHub oficial do dotenv](https://github.com/motdotla/dotenv).
