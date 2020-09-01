module.exports = {
    Query: {
      categories: (_, __, { dataSources }) =>
        dataSources.jokesAPI.getAllCategories(),
      joke: (_, { category }, { dataSources }) =>
        dataSources.jokesAPI.getRandomJoke(category)
    }
  };