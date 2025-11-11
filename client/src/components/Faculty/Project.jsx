import React, { useState } from "react";
import "./Project.css";
import { projectData } from "./ProjectData";

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  // Show 10 projects initially, or all if showAll is true
  const projectsToShow = showAll ? projectData : projectData.slice(0, 10);

  return (
    <div className="content-wrapper-2">
      <div className="topic-2">
        <div className="hiderx">Projects</div>
      </div>
      
      <div className="grid-2">
        {projectsToShow.map((proj, index) => (
          <div key={proj.id} className="project-1">
            <p className="project-title left-to-right" style={{animationDelay: `${0.05*index}s`}}>{proj.id}. {proj.title}</p>
            {proj.fundingAgent && (
              <p className="project-detail left-to-right" style={{animationDelay: `${0.05*index}s`}}>
                <strong>Funding Agent:</strong> {proj.fundingAgent}
              </p>
            )}
            {proj.pi && (
              <p className="project-detail left-to-right" style={{animationDelay: `${0.05*index}s`}}>
                <strong>PI:</strong> {proj.pi}
              </p>
            )}
            {proj.coPi && (
              <p className="project-detail left-to-right" style={{animationDelay: `${0.05*index}s`}}>
                <strong>Co-PI:</strong> {proj.coPi}
              </p>
            )}
            {proj.duration && (
              <p className="project-detail left-to-right" style={{animationDelay: `${0.05*index}s`}}>
                <strong>Duration:</strong> {proj.duration}
              </p>
            )}
          </div>
        ))}
      </div>

        <a
          className="see-full-btn left-to-right"
          onClick={() => window.open("https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT", "_blank")}
        >
          See Full list
        </a>
    </div>
  );
};

export default Project;
