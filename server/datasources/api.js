const { RESTDataSource } = require('apollo-datasource-rest');
const fetch = require('node-fetch');

class JokesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes/';
  }

  async getAllCategories() {
    const response = await this.get('categories');
    const toObj = this.convertToObject(response);
    return toObj;
  }

  async getRandomJoke(category) {
    const query = `random?category=${category}`
    const response = await this.get(query);
    return response;
  }

  convertToObject(arr) {
    const obj = {};
    arr.forEach(el => {
        obj[el] = el;
    });

    return obj;
  }
}

module.exports = JokesAPI;
