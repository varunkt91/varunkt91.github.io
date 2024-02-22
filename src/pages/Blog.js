import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Blog = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/blog.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <Main
      title="Blog"
      description="Learn blog Varun Tiwari"
    >
      <article className="post markdown" id="blog">
        <header>
          <div className="title">
            <h2><Link to="/blog">Blog</Link></h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Blog;
