import React from "react";
import resume from "../../assets/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download>
        Download Resume
      </a>
      <a href="#contact">Contact Me</a>
    </div>
  );
};

export default CTA;
