// import React from 'react'
// import "./Project.css"

// const Project = () => {
//   return (
//     <>
//    <div className="content-wrapper-2">
//         <div className="topic-2">Projects</div>
//         <div className="grid-2">
//           <div className="project-1"><p>Some very very long complicated cool-looking project name</p></div>
//           <div className="project-1"></div>
//           <div className="project-1"></div>
//           <div className="project-1"></div>
//           <div className="project-1"></div>
//           <div className="project-1"></div>
//           <div className="project-1"></div>
//           <div className="project-1"></div>
       
//         </div>
//          <div className="list"><a href="">See full list</a></div>
//       </div>

//     </>
//   )
// }

// export default Project


import React, { useState } from "react";
import "./Project.css";
import { projectData } from "./ProjectData";

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  // Show 10 projects initially, or all if showAll is true
  const projectsToShow = showAll ? projectData : projectData.slice(0, 10);

  return (
    <div className="content-wrapper-2">
      <div className="topic-2">Projects</div>
      
      <div className="grid-2">
        {projectsToShow.map((proj) => (
          <div key={proj.id} className="project-1">
            <p className="project-title">{proj.id}. {proj.title}</p>
            {proj.fundingAgent && (
              <p className="project-detail">
                <strong>Funding Agent:</strong> {proj.fundingAgent}
              </p>
            )}
            {proj.pi && (
              <p className="project-detail">
                <strong>PI:</strong> {proj.pi}
              </p>
            )}
            {proj.coPi && (
              <p className="project-detail">
                <strong>Co-PI:</strong> {proj.coPi}
              </p>
            )}
            {proj.duration && (
              <p className="project-detail">
                <strong>Duration:</strong> {proj.duration}
              </p>
            )}
          </div>
        ))}
      </div>

        <a
          className="see-full-btn"
          onClick={() => window.open("https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT", "_blank")}
        >
          See Full list
        </a>
    </div>
  );
};

export default Project;
