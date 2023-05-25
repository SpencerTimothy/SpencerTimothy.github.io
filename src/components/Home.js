import React, { useEffect } from "react";
import "../CSS/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import ProjectsCard from "./ProjectsCard";
import data from "../projectData";
import Features from "./Features";
import BlogCard from "./BlogCard";
import { ProjectsResumeButtons } from "./ProjectsResumeButtons";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projectCards = data.map((item) => {
    return <ProjectsCard key={item.id} item={item} />;
  });

  const navigate = useNavigate();

  return (
    <div className="home--page">
      <header className="profile--header">
        <div className="profile--img--container">
          <img
            className="profile--img"
            src="../photos/profile/Yours Truly.JPG"
            alt="Yours Truly"
          />
        </div>
        <h1 className="header--text">Hi, I'm Spencer</h1>
        <p className="header--subtext">
          Exploring the world through the lens of data science
        </p>
        <div className="button-animate">
          <ProjectsResumeButtons />
        </div>
      </header>
      <div className="project-card-div">
        <div
          className="card--heading--container"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <h2 className="card--heading">Check out my projects</h2>
          <p className="card--subheading"></p>
        </div>
        <section className="blog--posts">{projectCards}</section>
      </div>
      <BlogCard />
      <Features />
    </div>
  );
};

export default Home;
