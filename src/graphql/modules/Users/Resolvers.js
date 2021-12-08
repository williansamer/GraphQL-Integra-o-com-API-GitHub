const generator = require("../../../helpers/generator")

module.exports = {

  User: {
    async tasks(user,_,{dataSources}) { //Este user é o user que está sendo passado pelo usuário(query). É o obj.
      return await dataSources.tasksService.getTasks(user.id);
    }
  },

  Query: {
    users: async (_, {login}, {dataSources})=>{
      const foundUser = await dataSources.userRegister.getUserByLogin(login); //Verificar se acha o login no DB

      if(foundUser){ //Se achar algo no DB
        foundUser.token = generator.createToken(foundUser.id) //Criando Token
        return foundUser //Retornando para o FRONT
      }
      //..senão..
      const {login: loginGit, avatar_url} = await dataSources.GitHubAPI.getUser(login); //Desestruturar os dados do usuário(login) encontrado
      const newUser = await dataSources.userRegister.addUser({login: loginGit, avatar_url});  //Criando novo usuário no DB   
    
      newUser.token = generator.createToken(newUser.id); //Criando Token para este novo usuário
      return newUser //Retornando para o FRONT
    }  
  }
}

// RESUMINDO O QUE O RESOLVERS FAZ:
/* 
  O resolver irá receber obj, args, context e info. E pode resolver todas questão do CRUD por aqui..
  ..mas quando se usa o dataSource para acessar algum DB ou API, o resolver passa informações do FRONT para o BACK para ser resolvido pelo dataSource..
  ..No dataSource, irá de fato manusear as informações, DB e/ou API e retornar o resultado para o FRONT.
*/
