import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main title="Projects" description="Learn about Rohit Jagga's projects.">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/projects">Projects</Link>
          </h2>
          <p>
            Some projects that I&apos;ve worked on. See my{' '}
            <a href="https://github.com/rohitjagga02">github page</a> for the
            source code.
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
