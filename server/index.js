const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const JokesAPI = require('./datasources/api');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        jokesAPI: new JokesAPI()
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});