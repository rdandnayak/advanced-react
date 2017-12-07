import React from 'react';
import Article from './Article';

const ArticleList = props => {
  return (
    <section>
      {Object.values(props.articles).map(article => {
        return <Article key={article.id} article={article} />;
      })}
    </section>
  );
};

export default ArticleList;
