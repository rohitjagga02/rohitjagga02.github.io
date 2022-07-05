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
        Economics at <a href="https://www.upenn.edu/">UPenn</a>. This summer, I
        am working as an SDE Intern at{' '}
        <a href="https://www.amazon.com/">Amazon</a>. Last summer, I worked as a
        Machine Learning Research Intern at{' '}
        <a href="https://www.chop.edu/">CHOP</a> and as a Software Engineer
        Intern at <a href="https://www.offwego.io/">OffWeGo</a>. I&apos;m
        currently looking for summer 2023 internships in tech &amp; quant
        finance.
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
