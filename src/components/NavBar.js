import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaLinkedin,
  FaGithub,
  FaLaptopCode,
  FaRegFileAlt,
  FaUserAstronaut,
} from "react-icons/fa";
import { AiOutlineHome } from 'react-icons/ai'
// import { BsCodeSlash } from 'react-icons/bs'

const NavBar = (props) => {

  const [viewport, setViewport] = useState(window.innerWidth <= 1024)
  const newSize = () => {
    setViewport(window.innerWidth <= 1024)
  }

useEffect(() => {
  window.addEventListener("resize", newSize)
  return () => window.removeEventListener("resize", newSize)
},[])

  return (
    <nav className={props.lightMode ? "light" : ""}>
      <div className="toggle--wrapper">
        <div className="toggle--mode">
          <p className="toggle--dark">dark</p>
          <div className="toggle--slider" onClick={props.toggleLightMode}>
            <div className="toggle--thumb"></div>
          </div>
          <p className="toggle--light">light</p>
        </div>
      </div>
      <div className="nav--menu">
        <NavLink to="/">
          <div className="small-nav-links">
            <div className="small-nav-icon">
              {viewport && <AiOutlineHome size="1.25rem" stroke-width="20" />}
            </div>
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink to="/projects">
          <div className="small-nav-links">
            <div className="small-nav-icon">
              {viewport && <FaLaptopCode size="1.25rem" strok-width="1px"/>}
            </div>
            <span>Projects</span>
          </div>
        </NavLink>
        <NavLink to="/blog">
          <div className="small-nav-links">
            <div className="small-nav-icon">
              {viewport && <FaRegFileAlt size="1.25rem" />}
            </div>
            <span>Blog</span>
          </div>
        </NavLink>
        <NavLink to="/about">
          <div className="last-child small-nav-links">
            <div className="small-nav-icon">
              {viewport && <FaUserAstronaut size="1.25rem" />}
            </div>
            <span>About</span>
          </div>
        </NavLink>
      </div>
      <div className="icon--wrapper">
        <a href="#">
          <FaLinkedin className="linkedIn--icon" size="2rem" />
        </a>
        <a href="#">
          <FaGithub className="gitHub--icon" size="2rem" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar