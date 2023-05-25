import React from "react";
import projectData from "../projectData";
import blogData from "../blogData.js";
import "../CSS/aside.css";
import { NavLink } from "react-router-dom";

const Aside = () => {
  const projects = projectData.map((project) => (
    <li key={project.title}>
      <code>{"</> "}</code>
      <NavLink to={`/projects/${project.link}`}>{project.title}</NavLink>
    </li>
  ));

  const blog = blogData.map((post) => (
    <li key={post.title}>
      <code>{"</> "}</code>
      <NavLink to={`/blog/${post.link}`}>{post.title}</NavLink>
    </li>
  ));

  return (
    <aside className="side-menu">
      <h4>Projects</h4>
      <ul>{projects}</ul>
      <h4>Blog</h4>
      <ul>{blog}</ul>
    </aside>
  );
};

export default Aside;
