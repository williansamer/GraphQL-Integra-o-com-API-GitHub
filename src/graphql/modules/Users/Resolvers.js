
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

// RESUMINDO O QUE O RESOLVERS FAZ:
/* 
  O resolver irá receber obj, args, context e info. E pode resolver todas questão do CRUD por aqui..
  ..mas quando se usa o dataSource para acessar algum DB ou API, o resolver passa informações do FRONT para o BACK para ser resolvido pelo dataSource..
  ..No dataSource, irá de fato manusear as informações, DB e/ou API e retornar o resultado para o FRONT.
*/