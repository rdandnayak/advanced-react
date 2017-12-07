import StateApi from 'state-api';
import { data } from './testData';

const store = new StateApi(data);

describe('StateApi', () => {
  it('expects articles as object', () => {
    const articles = store.getState().articles;
    const articlesId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articlesId);
    expect(articles[articlesId].title).toBe(articleTitle);
  });
  it('expects authors as object', () => {
    const authors = store.getState().authors;
    const authorId = data.authors[0].id;
    const authorFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});
