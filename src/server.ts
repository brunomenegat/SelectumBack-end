const { GraphQLServer } = require('graphql-yoga') //wraped express + apollo + graphqlserver
const { typeDefs } = require("./graphQL/typeDefs")
const { resolvers } = require("./graphQL/resolvers")
const dotenv = require('dotenv');               //for work with .env
const bodyParser = require('body-parser');      //body parsing middleware
const mongoConnection = require("./loaders/mongo")

const server = new GraphQLServer({ typeDefs, resolvers })

server.express.use(bodyParser.urlencoded({ extended: true }))
server.express.use(bodyParser.json())

server.express.use((err: any, req: any, res: any, next: any) => {
    res.status(err.status)
    res.json(err)
    res.end;
})

dotenv.config({ path: './src/config/.env' })

mongoConnection()

const options = {
    port: process.env.PORT,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
}

server.start(options, ({ port }) =>
    console.log(`Server started, listening on port ${port} for incoming requests.`)
)

