import React from "react";
import ProjectsCardPage from "./ProjectsCardPage";
import data from "../projectData";
import { useNavigate } from "react-router-dom";
import { OnlyResumeButton } from "./OnlyResumeButton";
import "../CSS/projectsCard.css"

<index className="css"></index>;

const Projects = () => {
  const projectCards = data.map((item) => {
    return <ProjectsCardPage key={item.id} item={item} />;
  });

  const navigate = useNavigate();

  return (
    <div className="projects-div">
      <div className="project-card-div">
        <div className="card--heading--container">
          <h1 className="card-heading">Projects</h1>
          <p className="card-subheading">Check out my latest and greatest projects</p>
        </div>
        <section className="blog--posts">{projectCards}</section>
      </div>
      <OnlyResumeButton />
    </div>
  );
};

export default Projects;
