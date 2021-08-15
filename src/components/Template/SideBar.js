import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Rohit Jagga</h2>
        <p>
          <a href="mailto:rjagga@wharton.upenn.edu">rjagga@wharton.upenn.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Rohit. I am a dual-degree student in Computer Science &amp;
        Economics at the{' '}
        <a href="https://www.upenn.edu/">University of Pennsylvania</a>, where
        I&apos;m a TA for{' '}
        <a href="https://sites.google.com/seas.upenn.edu/cis545-f20">
          CIS545: Big Data Analytics
        </a>
        . This summer, I worked as a Machine Learning Research Intern at{' '}
        <a href="https://www.chop.edu/">CHOP</a> and Software Engineer Intern at{' '}
        <a href="https://www.offwego.io/">OffWeGo</a>. I&apos;m currently
        looking for summer 2022 internships in software engineering, product
        management, &amp; data science.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Rohit Jagga <Link to="/">rohitjagga02.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
