
module.exports = {
  Query: {
    users: async (_, {login}, {dataSources})=>{
      return await dataSources.GitHubAPI.getUser(login);
    }
  }
}