import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Awards = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/awards.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  return (
    <Main
      title="Awards"
      description="Learn awards Varun Tiwari"
    >
      <article className="post markdown" id="awards">
        <header>
          <div className="title">
            <h2><Link to="/awards">Awards</Link></h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Awards;
