import React, { Component } from 'react';
import { data } from '../testData';
import StateApi from 'state-api';
import ArticleList from './ArticleList';
import axios from 'axios';

// const api = new StateApi(data);

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: {},
      authors: {}
    };
  }

  async componentDidMount() {
    let resp = await axios.get('/data');
    const api = new StateApi(resp.data);

    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));
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
