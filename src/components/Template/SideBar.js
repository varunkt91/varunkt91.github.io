import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Varun Tiwari</h2>
        <p><a href="mailto:varunkt91@gmail.com">varunkt91@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Varun. I am a <a href="https://cnr.ncsu.edu/geospatial/our-people/graduate-students/">Ph.D student</a>, at North Carolina State University. Previously,
        I worked at <a href="https://bisa.org/">Borlaug Institute for South Asia (BISA), India</a> as
        Spatial Modelling Specialist, <a href="https://www.icimod.org/">International Centre for Integrated Mountain Development, Nepal</a> as Remote Sensing and Geoinformation Analyst.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
