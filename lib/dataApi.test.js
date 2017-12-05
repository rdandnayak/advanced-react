import StateApi from 'state-api';
import { data } from './testData';

const api = new StateApi(data);

describe('StateApi', () => {
  it('expects articles as object', () => {
    const articles = api.getArticles();
    const articlesId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articlesId);
    expect(articles[articlesId].title).toBe(articleTitle);
  });
  it('expects authors as object', () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});
