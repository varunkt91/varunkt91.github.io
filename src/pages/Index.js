import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Varun Tiwari's personal website. Ph.D Student at North Carolina State University, "
    + 'Ex- Remote Sensing and Geospatial Analyst at International Centre for Integrated Mountain Development , Ex: Defence Research and Development Organisation and Ex: Indian Agriculture Research Institute, India, and Indian Institute of Remote Sensing, India Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
