import React from 'react'
import ProjectsCardPage from './ProjectsCardPage' 
import data from '../projectData'
import { Routes, Route } from 'react-router-dom'
import MPT from '../project-posts/MPT'
// import { Routes, Route } from "react-router-dom";
<index className="css"></index>

const Projects = () => {
  const projectCards = data.map((item) => {
    return <ProjectsCardPage key={item.id} item={item} />;
  });
  return (
      <div className="projects">
        <div className="project-card-div" style={{ marginTop: 100 }}>
          <div className="card--heading--container">
            <h2 className="card--heading">Check out my projects</h2>
            <p className="card--subheading"></p>
          </div>
          <section className="blog--posts">{projectCards}</section>
        </div>
      </div>
  );
}

export default Projects