const { RESTDataSource } = require('apollo-datasource-rest');
const UserNotFoundError = require('../errors/userNotFoundError');
class GitHubAPI extends RESTDataSource{
  constructor(){
    super();
    this.baseURL = 'https://api.github.com'; // this.baseURL is the baseURL for the REST API
  }

  async getUser(login){
    try {
      return await this.get(`/users/${login}`); // this.get is a method from RESTDataSource
    } catch (error) {
      if(error.extensions.response.status === 404){
      throw new UserNotFoundError(`Usuario ${login} não encontrado`)
      }
    }
  }
}

module.exports = new GitHubAPI();

//Verificar documentação do apollo-datasource-rest em https://www.apollographql.com/docs/apollo-server/data/data-sources/
//https://api.github.com/users/williansamer mostra os dados do usuário