import React from "react";
import { ProjectsResumeButtons } from "../components/ProjectsResumeButtons";
import Aside from "../components/Aside";
import "../CSS/writings.css";

const ThisWebsite = () => {
  return (
    <div className="writings-container">
      <Aside />
      <div className="writings">
        <h1>How I Built This</h1>
        <p>Building a Portfolio Website with React</p>
        <img
          style={{ width: "50rem" }}
          src="../photos/blog_photos/how-i-built-this/how-i-built-this.png"
          alt="Screen shot"
        />
        <figcaption>
          <i>A work in progress</i>
        </figcaption>
        <p style={{ fontWeight: "500", textAlign: "center" }}>
          <i>
            To view the code for this project on GitHub, please visit this{" "}
            <a
              href="https://github.com/SpencerTimothy/SpencerTimothy.github.io"
              target="_blank"
            >
              link
            </a>
          </i>
        </p>
        <h2>Introduction</h2>
        <p>
          This website started as a portfolio template project. I wanted to
          challenge myself by using all the technologies I had learned in my
          Javascript and React courses. As I progressed, I decided to use this
          project as my actual portfolio. I spent countless hours perfecting the
          design and learning how to build a website. Although tempted to use
          CSS frameworks like Bootstrap or Material-UI, I chose not to and used
          the fundamentals that I had learned to challenge myself and have total
          control over the design.
        </p>
        <p>
          However, I did use some React and JavaScript libraries like{" "}
          <a
            href="https://www.npmjs.com/package/react-animate-on-scroll"
            target="_blank"
          >
            Animate On Scroll
          </a>{" "}
          (AOS) for animations on the homepage and{" "}
          <a href="https://reactrouter.com/en/main" target="_blank">
            React Router
          </a>{" "}
          to make a multi-page website. I may consider using other libraries in
          the future, as they can cut down the coding/debugging required to
          build a website.
        </p>
        <h2>Overview</h2>
        <p>
          I used the JavaScript framework React to build a simple website that
          replicates an online portfolio. I spent most of my time trying to
          figure out how I wanted the website to look and making everything
          responsive. Some of the functionalities I used include a dark/light
          theme mode toggle button, card components, and a carousel to map links
          to my projects and blog posts. In addition, I also added a navbar that
          appears on the bottom of a mobile device with icons, an aside
          navigation menu on each blog and project page, and a scroll-to-top
          button that only appears on screens wider than a certain size and when
          the page has been scrolled down past the navbar.
        </p>
        <h2>Tools and Technologies</h2>
        <p>
          To keep things simple, I used as much plain React, JavaScript, and CSS
          as possible. I used{" "}
          <a href="https://reactrouter.com/en/main" target="_blank">
            React Router
          </a>{" "}
          to make the project into a multi-page app and{" "}
          <a
            href="https://www.npmjs.com/package/react-animate-on-scroll"
            target="_blank"
          >
            Animate On Scroll
          </a>{" "}
          for simple animations on the homepage. I tried to use a library called{" "}
          <a
            href="https://www.npmjs.com/package/react-to-print"
            target="_blank"
          >
            React-to-print
          </a>
          , to give the user an option to print or download my resume straight
          off of the webpage, but I was unsuccessful at getting the CSS to work
          for each browser. To solve this problem, I decided to use a simpler
          approach and use a simple anchor element, that links to the document,
          which is located in the "public" folder of my website:{" "}
          <code className="code">{`<a href="document.pdf">`}</code>. In
          addition, I developed a{" "}
          <a
            href="https://github.com/SpencerTimothy/React-to-print-example"
            target="_blank"
          >
            separate application
          </a>{" "}
          using React-to-print that I can use to fill out the necessary
          information and create a PDF version of my resume. This application
          works well with Chrome and Edge, and I can easily update the PDF by
          editing the resume text in my code editor. On my website, users can
          view my resume and automatically download the PDF version by clicking
          on the download button.
        </p>
        <h2>Project Setup and Structure</h2>
        <p>
          I spent a lot of time organizing and managing all the components and
          files. In the "public" folder, I created several folders to organize
          the website, including a folder called "photos" that contains
          additional folders for my projects, blog posts, and all other photos I
          used on the website. There is also a "project_HTML" folder that holds
          the HTML for some of the visualizations that I have used in my
          projects.
        </p>
        <img
          style={{ width: "20rem" }}
          src="../photos/blog_photos/how-i-built-this/Public Folder.png"
          alt="Public folder structure"
        />
        <figcaption>
          <i>Public folder structure</i>
        </figcaption>
        <p>
          In the "src" folder, there are folders called "blog-posts" and
          "project-posts" that keep all of the blog posts and project pages for
          the website. There is a "components" folder that holds all of the
          components that I have created for this website. Finally, there is a
          "CSS" folder that I use to store all of the CSS files that style each
          component individually
        </p>
        <img
          style={{ width: "20rem" }}
          src="../photos/blog_photos/how-i-built-this/Source Folder.png"
          alt="Source folder structure"
        />
        <figcaption>
          <i>Source folder structure</i>
        </figcaption>
        <h2>Pages and Features</h2>
        <p>
          Most of the features and functionality of this website were adapted
          from different JavaScript and React tutorials that I have taken over
          the past year. Some of these features include:
        </p>
        <ul>
          <li>
            <strong>Navigation bar:</strong> A navbar is at the top of the page
            if the device has a width greater than 1024 pixels. Otherwise, a
            different type of navbar is at the bottom of the page.
          </li>
        </ul>
        <img
          src="https://media.giphy.com/media/RdoiUTOR9ob5vKSdCZ/giphy.gif"
          alt="Responsive navigation bar"
        />
        <figcaption>
          <i>Responsive navigation bar</i>
        </figcaption>
        <ul>
          <li>
            <strong>Dark/light mode:</strong> A toggle button is at the top of
            each page that allows the user to switch between a darker or lighter
            website theme. It uses a ternary option that changes the className
            of the div that wraps the entire website. When the option is
            clicked, the state is updated and the website changes its theme.
          </li>
        </ul>
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWIyYjM1OTUzYjAxYjlhMzU1ZDk1YWQ4OWQyZmM0ZTA5MWI2ZGNkYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/CAORNeyPHW6te4chX3/giphy.gif"
          alt="Switching between dark/light mode"
        />
        <figcaption>
          <i>Switching between dark/light themes</i>
        </figcaption>
        <ul>
          {/* <li>
            <strong>Card component:</strong> A card component was used to
            display each project and blog post on the homepage. The card
            displays an image, a title, a description, and a link to the full
            post or project page.
          </li> */}
          <li>
            <strong>Carousel:</strong> A carousel was used to display the
            projects and blog posts on the homepage. The carousel allows the
            user to click through the posts or projects by clicking the arrow
            buttons or swiping left/right on a touch divice. The carousel also
            automatically scrolls every 5 seconds.
          </li>
        </ul>
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTU1ZDAyZjA2OGMxMGZiZTdhY2ViMGZjOGJhZjU2MzUzOGFkYTI5MCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/foj0R1pjzzRGaIlakb/giphy.gif"
          alt="Carousel"
        />
        <figcaption>
          <i>Automatic and manual carousel</i>
        </figcaption>
        <ul>
          <li>
            <strong>Scroll to top button:</strong> A button that appears on the
            bottom right corner of the screen when the user scrolls down past
            the navbar. It takes the user back to the top of the page when
            clicked.
          </li>
        </ul>
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTNkYzk5YmMwYTgzODIyYjk3NDcyNTFlYThlZWI4YmFhMjJlZDI1NSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/A0CtWCrVIUSMAicl3L/giphy.gif"
          alt="Scroll to top button"
        />
        <figcaption>
          <i>Scroll to top button</i>
        </figcaption>
        <p>
          Several pages were created for this website, with React Router being
          used to handle the routes. Here is a list of the pages you can find on
          this website:
        </p>
        <ul>
          <li>
            <strong>Home page:</strong> This page features both the projects
            card and the blog carousel components, which are rendered using
            custom CSS and Animate on Scroll (AOS) for the animations. From
            here, users can easily navigate to any other page on the website.
          </li>
          <li>
            <strong>Projects page:</strong> On the projects page, users can find
            the projects card once again. From here, they can navigate to any of
            my projects that they are interested in.
          </li>
          <li>
            <strong>Blog Page:</strong> Similar to the projects page, the blog
            page maps all of the blog posts from the blog data file onto the
            page. Users can then navigate to any of the blog posts that they
            want to read.
          </li>
          <li>
            <strong>About page:</strong> The about page contains information
            about me, including my goals and interests. It also features buttons
            that link to my resume and project pages.
          </li>
          <li>
            <strong>Resume Page:</strong> On the resume page, users can download
            a printable version of my resume. This page uses the react-to-print
            library to generate HTML/CSS to PDF in a separate application. The
            resulting PDF document is then uploaded to the public folder, and a
            link to download the document is provided using an anchor tag with
            an href pointing towards the PDF document.
          </li>
          <li>
            <strong>Error page:</strong> To handle incorrect page navigations, a
            404 error page was added. This page informs users that the page does
            not exist, and provides a suggestion to start from the home page.
          </li>
        </ul>
        {/* <h2>Deployment and Hosting</h2>
      <p>This website was deployed using Git and hosted onto GitHub Pages.</p> */}
        <h2>Thoughts and Future Plans</h2>
        <p>
          Building this website has been a significant project for me, although
          not the most challenging. Most of the time I spent was on CSS, which
          has made me much more proficient. Although I will consider simplifying
          some of the CSS in the future, it was crucial for achieving the design
          I envisioned.
        </p>
        <p>
          I also invested time researching and implementing new technologies
          such as Animate on Scroll, React Router, React to Print, Git, and
          others to improve the site. As I become more familiar with these
          technologies, building future projects will be much easier.
        </p>
        <p>
          Organizing the increasingly larger project was also a significant
          task. Originally intended as a resume template, I initially neglected
          component organization and CSS optimization. As the project grew into
          my primary website, I went back to restructure most of the files.
        </p>
        <p>
          Surprisingly, programming functionality with React and JavaScript was
          not as challenging as expected. With previous experience, I could
          easily implement features I had worked on before, which proved very
          beneficial.
        </p>
        <p>
          While I am satisfied with the website, there are still areas for
          improvement. For example, I'd like to add an aside to the blog and
          projects pages to allow users to move between posts without navigating
          back. I also plan to simplify some of the CSS, particularly in my
          resume. However, it's time to publish, or I may never stop improving
          it.
        </p>
        <p>
          If you have any suggestions on how I can improve it, please feel free
          to reach out to me.
        </p>
        <p>Thank you for reading!</p>
        <p style={{ fontWeight: "500", textAlign: "center" }}>
          <i>
            To view the code for this project on GitHub, please visit this
            <a
              href="https://github.com/SpencerTimothy/SpencerTimothy.github.io"
              target="_blank"
            >
              {" "}
              link
            </a>
          </i>
        </p>
        <ProjectsResumeButtons />
      </div>
    </div>
  );
};

export default ThisWebsite;
