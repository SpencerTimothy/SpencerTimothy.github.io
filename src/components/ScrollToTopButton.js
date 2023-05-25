import {React} from 'react'
import { useState, useEffect } from "react";
import '../CSS/scrollToTopButton.css'

import { FiChevronsUp } from "react-icons/fi";


const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY > 50 && window.innerWidth > 1024);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {showScrollButton && (
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          <FiChevronsUp />
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton
