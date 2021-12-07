
module.exports = {

  User: {
    async tasks(user,_,{dataSources}) { //Este user é o user que está sendo passado pelo usuário(query). É o obj.
      return await dataSources.tasksService.getTasks(user.id);
    }
  },

  Query: {
    users: async (_, {login}, {dataSources})=>{
      const foundUser = await dataSources.userRegister.getUserByLogin(login);

      if(foundUser) return foundUser;

      const {login: loginGit, avatar_url} = await dataSources.GitHubAPI.getUser(login);

      return await dataSources.userRegister.addUser({login: loginGit, avatar_url});
    }
  }
}