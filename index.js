const { ApolloServer} = require('apollo-server');
const graphql = require('./src/graphql');
const GitHubAPI = require('./src/services/GitHub.service');
const TasksRegisterService = require('./src/services/TasksRegisterService');
const UserRegisterService = require('./src/services/UserRegisterService');

const server = new ApolloServer({
  ...graphql,
  dataSources: ()=>{
    return {
      GitHubAPI: GitHubAPI,
      userRegister: UserRegisterService,
      tasksService: TasksRegisterService
    }
  },
  context: async ({req})=>{
    const user_id = await req.headers.authorization;

    return {user_id}
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});