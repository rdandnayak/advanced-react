class StateApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }
}

export default StateApi;
