import React from "react";
import '../CSS/footer.css'
import { FaReact  }from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <p>
        This website was made with React{" "}
        <span>
          <FaReact size="1.5rem" className="react-icon" />
        </span>
      </p>
      <p>
        To read how I built this website, read {" "}
        <Link to="blog/how-i-built-this" className="footer-link">
          this blog post
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
