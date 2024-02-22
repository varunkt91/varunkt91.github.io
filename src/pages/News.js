import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const News = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/news.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <Main
      title="News"
      description="Learn news Varun Tiwari"
    >
      <article className="post markdown" id="news">
        <header>
          <div className="title">
            <h2><Link to="/news">News</Link></h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default News;
