import React, { useRef } from "react";
import "./Project.css";
import { projectData } from "./ProjectData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const container = useRef();
  
  // Only showing 10 for the animation context
  const projectsToShow = projectData.slice(0, 10);

  useGSAP(() => {
    // Animate the title first
    gsap.from(".topic-2", {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".topic-2",
        start: "top 85%",
      }
    });

    // Animate the grid items with a stagger
    gsap.from(".project-1", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1, // This creates the "one after another" effect
      scrollTrigger: {
        trigger: ".project-1",
        start: "top 80%", 
        // toggleActions: "play none none none" // Plays once when entering
      }
    });
  }, { scope: container }); // Scoping prevents targeting elements outside this component

  return (
    <div className="content-wrapper-2" ref={container}>
      <div className="topic-2">
        <div>Projects</div>
      </div>
      
      <div className="grid-2">
        {projectsToShow.map((proj, index) => (
          <div key={proj.id} className="project-1">
            {/* Removed inline animationDelay as GSAP handles the timing now */}
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
        href="https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"
        target="_blank"
        rel="noopener noreferrer"
      >
        See Full list
      </a>
    </div>
  );
};

export default Project;