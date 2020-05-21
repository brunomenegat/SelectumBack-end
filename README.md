## Variáveis de Ambiente
As variáveis de ambiente (por exemplo URI do DB e Porta) foram colocadas, por segurança, no arquivo oculto ***.env*** (que foi adicionado ao *.gitignore*). Essas variáveis são gerenciadas pelo pacote ***dotenv*** e são acessadas pela sintaxe "process.env.NOME_DA_VAR_AMB" (sem aspas).

### Como proceder
Crie um arquivo ***.env*** na raiz do projeto e adicione as variáveis da seguinte maneira:  
````MONGO_URI="uri do seu atlas ou path do local host"`  
`PORT="num da porta que quer que o servidor escute"````
Com ou sem aspas.    
Detalhe: caso o usuário ou senha da sua URI contenha caracteres especiais (como !, :, /, @ etc.) você deve utilizar [Codificação Percentual](https://tools.ietf.org/html/rfc3986#section-2.1)  
  
No código essas variáveis já estão sendo acessadas (process.env.MONGO_URI e process.env.PORT). Para mais informações sobre como utilizar o dotenv acesse o [GitHub oficial do dotenv](https://github.com/motdotla/dotenv).
