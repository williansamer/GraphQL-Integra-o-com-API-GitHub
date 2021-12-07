const db = require("../db");

class TasksRegisterService{
  async getTasks(user_id){ 
    console.log({user_id});
    console.log(user_id)
    return await db("tasks").where({user_id: user_id}); //Pode ser também somente "{user_id}"
  }
}

module.exports = new TasksRegisterService();