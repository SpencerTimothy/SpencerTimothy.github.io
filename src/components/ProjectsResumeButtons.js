import React from 'react'
import '../CSS/projectsResumeButtons.css'
import { useNavigate } from "react-router-dom";


export const ProjectsResumeButtons = () => {

    const navigate = useNavigate();

    return (
        <div className="button-div">
            <div className="projects-btn-animate">
                <button
                    onClick={() => navigate("/projects")}
                    className="projects-btn"
                >
                See my projects
                </button>
            </div>
            <div className="resume-btn-animate">
                <button onClick={() => navigate("/resume")} 
                    className="resume-btn">
                Jump to resume
                </button>
            </div>
        </div>
    );
}
