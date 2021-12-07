const {RESTDataSource} = require('apollo-datasource-rest');

class GitHubAPI extends RESTDataSource {
  constructor(){
    super();
    this.baseURL = "https://api.github.com/";
  }

  async getUser(login){
    return await this.get(`users/${login}`); //o 'get' é um método do RESTDataSource
  }
}

module.exports = new GitHubAPI();

//Verificar documentação do apollo-datasource-rest em https://www.apollographql.com/docs/apollo-server/data/data-sources/
//https://api.github.com/users/williansamer mostra os dados do usuário