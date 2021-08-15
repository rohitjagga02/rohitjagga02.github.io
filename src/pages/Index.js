import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description={"Rohit Jagga's personal website."}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">About this site</Link>
          </h2>
          <p>
            A statically-generated website written in React, Node.js, and styled
            with SCSS.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my personal website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        See the github repo{' '}
        <a href="https://github.com/rohitjagga02/rohitjagga02.github.io">
          here
        </a>{' '}
        for more info about this website.
      </p>
    </article>
  </Main>
);

export default Index;
