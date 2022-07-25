import React from "react";
import BlogCardPage from "./BlogCardPage";
import data from "../blogData";
<index className="css"></index>;

const Blog = () => {

  const blogCards = data.map((item) => {
    return <BlogCardPage key={item.id} item={item} />;
  });
  
  return (
    <div className="projects">
      <div className="project-card-div" style={{ marginTop: 100 }}>
        <div className="card--heading--container">
          <h2 className="card--heading">Check out my blog posts</h2>
          <p className="card--subheading"></p>
        </div>
        <section className="blog--posts">{blogCards}</section>
      </div>
    </div>
  );
};

export default Blog;
