import React, { Component } from 'react';
import { data } from '../testData';
import DataApi from '../dataApi';
import ArticleList from './ArticleList';

const api = new DataApi(data);

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId]
  };
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
