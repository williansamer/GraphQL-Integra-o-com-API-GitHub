const GitHubAPI = require('../../../src/services/GitHub.service');
const TasksRegisterService = require('../../../src/services/TasksRegisterService');
const UserRegisterService = require('../../../src/services/UserRegisterService');

module.exports = ()=>{
  return {
    GitHubAPI: GitHubAPI,
    userRegister: UserRegisterService,
    tasksService: TasksRegisterService
  }
}