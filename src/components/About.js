import React from "react";
import "../CSS/writings.css";
import { ProjectsResumeButtons } from "./ProjectsResumeButtons";

const About = () => {
  return (
    <div style={{ margin: "3rem auto", width: "60rem" }} className="writings">
      <h1>About Me</h1>
      <p>Want to know more about me? Glad you asked...</p>
      <p>
        Hi there! I'm Spencer, a self taught data analyst with a passion for
        using data to uncover insights and help make informed decision making.
        I've honed my skills through several completed and ongoing projects and
        am constantly seeking new opportunities to challenge myself and further
        develop my expertise.
      </p>
      <p>
        In this portfolio, I aim to share my progress and demonstrate my
        proficiency in a variety of technologies, including Tableau, Python,
        React.js, and SQL. From data visualization to machine learning, I'm
        constantly exploring new approaches and techniques to extract actionable
        insights from data and share my knowledge and experience with others.
      </p>
      <p>
        Technology has always been a passion of mine, and I am constantly amazed
        by how it continues to evolve and transform our world. I believe that
        the technologies I am learning, such as data analytics, machine
        learning, and web development, have the potential to shape our future in
        incredible ways. Through my work and projects, I strive to utilize these
        technologies to create innovative solutions and uncover insights that
        can make a positive impact on society. I am excited to be a part of this
        rapidly growing field and look forward to the opportunities ahead, where
        I can continue to expand my knowledge and skills, and contribute to the
        advancements that technology has on our lives.
      </p>
      <p>
        As a proud member of the data community, I'm excited to share my
        knowledge and experience through my portfolio and blog. Whether you're
        an industry peer or simply interested in the fascinating world of data,
        I look forward to connecting and collaborating with you. So please, take
        a look around, explore my portfolio, and don't hesitate to reach out if
        you have any questions or ideas you'd like to discuss!
      </p>
      <p>
        Want to get in contact with me? Check out my resume for my contact
        information, or click this{" "}
        <a href="mailto:spencer.t.timothy@gmail.com?subject=Hey%21%20We%27d%20like%20to%20contact%20you%20about%20your%20website%21">
          link
        </a>{" "}
        to send me an email!
      </p>
      <ProjectsResumeButtons />
    </div>
  );
};

export default About;
