import React,{ useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import ProjectsCard from './ProjectsCard'
import data from '../data'
import Features from './Features'
import BlogCard from './BlogCard'
import Footer from './Footer'

const Home = () => {
  const projectCards = data.map((item) => {
    return <ProjectsCard key={item.id} item={item} />;
  });

  useEffect(() => {
    AOS.init({duration: 1000});
  },[])



  return (
    <div className="home--page">
      <header className="profile--header">
        <div className="profile--img--container">
          <img
            // data-aos="fade-up"
            // data-aos-once="true"
            className="profile--img"
            src="./photos/IMG_1343.JPG"
            alt="Yours Truly"
          />
        </div>
        <h1
          className="header--text"
          // data-aos="fade-up"
          // data-aos-delay="500"
          // data-aos-once="true"
        >
          This is my blog
        </h1>
        <p
          className="header--subtext"
          // data-aos="fade-up"
          // data-aos-delay="1000"
          // data-aos-once="true"
        >
          This is a blog about programming
        </p>
      {/* </header> */}
      <div className="button-div">
        <button
          className="projects-btn"
          // data-aos="fade-right"
          // data-aos-delay="1500"
          // data-aos-once="true"
        >
          Go to projects
        </button>
        <button
          className="resume-btn"
          // data-aos="fade-left"
          // data-aos-delay="1500"
          // data-aos-once="true"
        >
          Jump to resume
        </button>
      </div>
      </header>
      <div className='project-card-div'>
        <div
          className="card--heading--container"
          data-aos="fade-up"
          data-aos-once="true"
          >
          <h2 className="card--heading">Check out my projects</ h2>
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