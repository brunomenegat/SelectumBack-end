const { GraphQLServer } = require('graphql-yoga')       // wraped express + apollo + graphqlserver
const { typeDefs } = require("./graphQL/typeDefs")      // GraphQL schema definition
const { resolvers } = require("./graphQL/resolvers")    // Graphql resolvers
const dotenv = require('dotenv');                       // ambient variables in .env
const bodyParser = require('body-parser');              // body parsing middleware
const mongoConnection = require("./loaders/mongo")      // database loader

dotenv.config({ path: './src/config/.env' })
mongoConnection()

const server = new GraphQLServer({ typeDefs, resolvers })

const options = {
    port: process.env.PORT,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
}
server.start(options, ({ port }) => console.log(`WebServer listening on port ${port} for incoming requests.`))
