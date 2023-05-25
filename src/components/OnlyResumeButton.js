import React from 'react'
import '../CSS/OnlyResumeButton.css'
import { useNavigate } from "react-router-dom";



export const OnlyResumeButton = () => {
    
    const navigate = useNavigate();

  return (
    <div>
      <button
        className="only-resume-button"
        onClick={() => navigate("/resume")}
      >
        Jump to resume
      </button>
    </div>
  );
}
