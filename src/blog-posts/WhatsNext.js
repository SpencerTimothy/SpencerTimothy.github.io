import React from "react";
import "../CSS/writings.css";
import Aside from "../components/Aside.js";
import { ProjectsResumeButtons } from "../components/ProjectsResumeButtons";

const WhatsNext = () => {
  return (
    <div className="writings-container">
      <Aside />
      <div className="writings">
        <h1>What's Next for Me?</h1>
        <p>See what my future plans are moving forward</p>
        <img
          style={{ width: "47rem" }}
          src="../photos/blog_photos/whats-next/What's Next.png"
          alt="What's next for me photo"
        />
        <figcaption>
          <i>Some ideas on what's next for me</i>
        </figcaption>
        <p>
          As a data analyst, I am constantly searching for new and innovative
          ways to analyze and visualize data. I take pride in staying up to date
          on technologies that interest me and constantly pushing myself to
          learn new skills that will help me better understand and make sense of
          things that interest me, and the world around me. After finishing my
          portfolio website and updating my projects, I have been reflecting on
          what's next for me. In this blog post, I will share my thoughts and
          plans for the future, as I continue my evolution of personal growth,
          and to explore new potentials in the world of data analytics.
        </p>
        <h2>The Journey So Far</h2>
        <p>
          As a data enthusiast, I've worked with the basic data analysis
          techniques and libraries that form the foundation of data analysis,
          including Pandas, NumPy, and SQL. I have also developed skills in data
          visualization and dashboarding using Tableau. While these tools have
          been invaluable in my work, I believe that it's important to have a
          broader set of skills and tools that can help me better understand and
          make sense of complex data.
        </p>
        <p>
          To achieve this, I decided to explore the world of frontend
          development. While it may seem like an unusual choice for a "weekend
          worrier" data analyst like myself, I believe that it's a logical next
          step in my journey. By learning frontend development with JavaScript
          and React, I can gain complete control over the design and deployment
          of dashboards and data visualizations. Not only will I be able to
          create visually stunning and compelling data analysis tools, but I'll
          also be able to connect my ideas to the rest of the world. This new
          skill set will allow me to easily integrate my data analysis projects
          with any website or platform. I'm excited to use this knowledge to
          create dynamic, web-based data analysis tools that are accessible to
          anyone with an internet connection.
        </p>
        <p>
          With my frontend development skills, I can take my data analysis
          projects to the next level. To make my data visualizations more
          engaging and immersive, I plan to learn interactive charting
          libraries. There are many interactive charting libraries out there,
          and I plan to explore some of the most popular ones, including{" "}
          <a href="https://plotly.com/" target="_blank">
            Plotly
          </a>
          ,{" "}
          <a href="https://bokeh.org/" target="_blank">
            Bokeh
          </a>
          , and{" "}
          <a href="https://d3js.org/" target="_blank">
            D3.js
          </a>
          . These libraries can help me create dynamic and interactive data
          visualizations that can be customized and manipulated by users in
          real-time. By utilizing these libraries, I'll be able to create data
          analysis tools that are not only informative but also fun and engaging
          to use. By incorporating these interactive elements into my projects,
          I can provide users with a more intuitive and immersive experience
          that encourages them to explore and discover insights on their own.
        </p>
        <h2>Exciting Projects on the Horizon</h2>
        <p>
          In the immediate future, I plan to pursue understanding and
          implementing machine learning and{" "}
          <a href="https://www.djangoproject.com/" target="_blank">
            Django
          </a>{" "}
          simultaneously. I plan to create web-based apps using these
          interactive charting libraries, machine learning, and Django in the
          near future. Some of the projects I am considering building include a
          sentiment analysis tool that can analyze media sentiment, real-time
          stock market analysis tool that uses machine learning for prediction
          and forecasting, and an automated web scraping tool that can extract
          real-time data from multiple sources.
        </p>
        <p>
          By mastering backend/frontend web development and artificial
          intelligence, we can bridge the gap between a vision and the future.
          With these advanced skills, it's possible to create data analysis
          tools that can interact with the outside world in real-time, providing
          real-time data-driven insights and predictions. These tools can be
          integrated with various platforms, from websites to mobile
          applications, making the data more accessible and useful to users
          worldwide. With the power of these technologies, one can create
          automated and intelligent data analysis tools that can help people and
          businesses make informed decisions, ultimately leading to greater
          success and growth.
        </p>
        <ProjectsResumeButtons />
      </div>
    </div>
  );
};

export default WhatsNext;
