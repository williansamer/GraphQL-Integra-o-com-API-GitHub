const NoPermissionError = require("../../../src/errors/noPermissionError")
const TaskNotFoundError = require("../../../src/errors/taskNotFoundError")

module.exports = (error)=>{
  if(error.originalError instanceof NoPermissionError){
    return new NoPermissionError(error.message);
  }
  if(error.originalError instanceof TaskNotFoundError){
    return new TaskNotFoundError(error.message);
  }
  return error;
}