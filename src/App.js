import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects'
import Resume from './components/Resume';
import MPT from './project-posts/MPT'
import Blog from './components/Blog';
import ThisWebsite from './blog-posts/ThisWebsite'
import About from './components/About';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';

function App() {
    const [lightMode, setLightMode] = useState(false)
    const toggleLightMode = () => {
      setLightMode(prevState => !prevState)
    }

  return (
    <div className={lightMode ? "light" : "dark"}>
      <NavBar lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="resume" element={<Resume />}/>
          <Route path="projects" element={<Projects />} />
          <Route path="projects/modern-portfolio-theory" element={<MPT />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/how-i-built-this" element={<ThisWebsite />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
