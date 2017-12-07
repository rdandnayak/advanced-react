class StateApi {
  constructor(rawData) {
    this.data = {
      authors: this.mapIntoObject(rawData.authors),
      articles: this.mapIntoObject(rawData.articles)
    };
  }
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  lookupAuthor = authorId => {
    return this.data.authors[authorId];
  };
  getState = () => {
    return this.data;
  };
}

export default StateApi;
