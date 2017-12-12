import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: '#ccc',
    padding: 10
  },
  title: {
    fontWeight: 'bold'
  },
  date: {
    fontSize: '0.75em',
    color: '#888'
  },
  authorName: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'inline-block'
  },
  body: {
    paddingLeft: 20,
    paddingBottom: 10
  }
};

const dateDisplay = dateString => {
  return new Date(dateString).toDateString();
};

class Article extends React.PureComponent {
  render() {
    const { article, author } = this.props;

    return (
      <section styles={styles.section}>
        <div style={styles.article}>{article.title}</div>
        <div style={styles.date}>{dateDisplay(article.date)}</div>
        <div>
          <a href={author.website} style={styles.authorName}>
            {author.firstName} {author.lastName}
          </a>
        </div>
        <div style={styles.body}>{article.body}</div>
      </section>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
};

// let author = store.lookupAuthor(article.authorId);

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
}

export default storeProvider(extraProps)(Article);
