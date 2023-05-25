// import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import ModernPortfolioTheory from "./project-posts/ModernPortfolioTheory";
import USMassShootings from "./project-posts/USMassShootings";
import USCensusData from "./project-posts/USCensusData";
import BakerySales from "./project-posts/BakerySales";
import Blog from "./components/Blog";
import ThisWebsite from "./blog-posts/ThisWebsite";
import WhatsNext from "./blog-posts/WhatsNext";
import About from "./components/About";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode((prevState) => !prevState);
  };

  return (
    <div className={lightMode ? "light" : "dark"}>
      <ScrollToTop />
      <NavBar lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route
            path="projects/Modern-Portfolio-Theory"
            element={<ModernPortfolioTheory />}
          />
          <Route
            path="projects/US-Mass-Shootings"
            element={<USMassShootings />}
          />
          <Route path="projects/US-Census-Data" element={<USCensusData />} />
          <Route path="projects/Bakery-Sales" element={<BakerySales />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/how-i-built-this" element={<ThisWebsite />} />
          <Route path="blog/What's-Next-for-Me/" element={<WhatsNext />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
  );
}

export default App;
