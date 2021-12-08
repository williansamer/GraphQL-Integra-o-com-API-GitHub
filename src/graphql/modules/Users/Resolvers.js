module.exports = {
  Query: {
    users: async (_, { login }, { dataSources }) => {
      return await dataSources.gitHubAPI.getUser(login);
    },
  },
};
