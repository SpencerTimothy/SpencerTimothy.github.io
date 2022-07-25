import React,{ useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { useNavigate } from 'react-router-dom'
import ProjectsCard from './ProjectsCard'
import data from '../projectData'
import Features from './Features'
import BlogCard from './BlogCard'

const Home = () => {
  const projectCards = data.map((item) => {
    return <ProjectsCard key={item.id} item={item} />;
  });

  useEffect(() => {
    AOS.init({duration: 1000});
  },[])

  const navigate = useNavigate()

  return (
    <div className="home--page">
      <header className="profile--header">
        <div className="profile--img--container">
          <img
            className="profile--img"
            src="./photos/IMG_1343.JPG"
            alt="Yours Truly"
          />
        </div>
        <h1
          className="header--text">
          This is my blog
        </h1>
        <p className="header--subtext">
          This is a blog about programming
        </p>
        <div className="button-div">
          <button
            onClick={() => navigate('projects')}
            className="projects-btn"
          >
            See my projects
          </button>
          <button
            onClick={() => navigate('resume')}
            className="resume-btn"
          >
            Jump to resume
          </button>
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
}

export default Home