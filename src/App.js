import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Blog from './components/Blog';
import Projects from './components/Projects'
import About from './components/About';
import Footer from './components/Footer';

function App() {
    const [lightMode, setLightMode] = useState(false)
    const toggleLightMode = () => {
      setLightMode(prevState => !prevState)
    }

  return (
    <div className={lightMode ? "light" : "dark"}>
      <NavBar lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <div className='body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='projects' element={<Projects />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
