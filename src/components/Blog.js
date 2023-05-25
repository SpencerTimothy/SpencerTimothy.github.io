import React from "react";
import { ProjectsResumeButtons } from "./ProjectsResumeButtons";
import BlogCardPage from "./BlogCardPage";
import data from "../blogData";
import "../CSS/projectsCard.css";

<index className="css"></index>;

const Blog = () => {
  const blogCards = data.map((item) => {
    return <BlogCardPage key={item.id} item={item} />;
  });

  return (
    <div className="blog-div">
      <div className="blog-card-div">
        <div className="card--heading--container">
          <h1 className="card-heading">Blog Posts</h1>
          <p className="card-subheading">
            See what I've been up to, in my latest blog posts
          </p>
        </div>
        <section className="blog--posts">{blogCards}</section>
      </div>
      <div className="call-to-action">
        <ProjectsResumeButtons />
      </div>
    </div>
  );
};

export default Blog;
