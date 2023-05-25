import React from "react";
import ResumeText from "./ResumeText";

const Resume = () => {
  return (
    <div>
      <a
        className="download"
        href="../MyResume2023.pdf"
        download="SpencerTimothyResume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="print-resume">Download resume</button>
      </a>
      <ResumeText />
      <a
        className="download"
        href="./MyResume2023.pdf"
        download="SpencerTimothyResume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="print-resume">Download as PDF</button>
      </a>
    </div>
  );
};

export default Resume;
