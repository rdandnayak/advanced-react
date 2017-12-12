class StateApi {
  constructor(rawData) {
    this.data = {
      authors: this.mapIntoObject(rawData.authors),
      articles: this.mapIntoObject(rawData.articles),
      searchTerm: '',
      timestamp: new Date()
    };

    this.subscriptions = {};
    this.lastSubscriptionId = 0;
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
  subscribe = cb => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };
  unsubscribe = subscriptionId => {
    delete this.subscriptions[subscriptionId];
  };
  getState = () => {
    return this.data;
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach(cb => cb());
  };
  mergeWithState = stateChange => {
    this.data = {
      ...this.data,
      ...stateChange
    };
    this.notifySubscribers();
  };

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date()
      });
    }, 1000);
  };

  setSearchText = searchTerm => {
    this.mergeWithState({
      searchTerm
    });
  };
}

export default StateApi;
