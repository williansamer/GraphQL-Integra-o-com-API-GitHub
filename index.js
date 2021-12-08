const { ApolloServer} = require('apollo-server');
const graphql = require('./src/graphql');
const GitHubAPI = require('./src/services/GitHub.services');

const server = new ApolloServer({
  ...graphql,
  dataSources: () => ({
    gitHubAPI: GitHubAPI
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});