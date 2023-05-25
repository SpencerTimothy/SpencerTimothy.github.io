import React from "react";
import { Link } from "react-router-dom";

const BlogCardPage = (props) => {
  return (
      <Link to={props.item.link}>
        <article>
          <div className="card--article">
            <div className="card--img">
              <img
                className="card--img"
                src={props.item.img}
                alt={props.item.alt}
              />
            </div>
            <h3 className="card--title">{props.item.title}</h3>
            <p className="card--description">{props.item.description}</p>
            <a className="card--link" href="page.html">
              Read More ▸
            </a>
          </div>
        </article>
      </Link>
  );
};

export default BlogCardPage;
