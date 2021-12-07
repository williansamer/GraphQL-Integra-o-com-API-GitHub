module.exports = {
  Query: {
    tasks: async(_, __, { dataSources, user_id }) => { 
      return await dataSources.tasksService.getTasks(user_id);
    },
    task: async(_, {id}, { dataSources, user_id }) => { 
      return await dataSources.tasksService.getTaskById(user_id, id);
    }
  },

  Mutation: {
    createTask: async(_, {data}, {dataSources, user_id}) => {
      return await dataSources.tasksService.createTask(user_id, data);
    },
    deleteTask: async(_, {id}, {dataSources, user_id}) => {
      return await dataSources.tasksService.deleteTask(user_id, id);
    },
    updateTask: async(_, {id, data}, {dataSources, user_id}) => {
      return await dataSources.tasksService.updateTask(user_id, id, data);
    }
  }
}