import React from "react";

const Hero = () => {
    return (
        <>
          <div className="Hero-Frame">
        <div className="Hero">
          <div className="left">
            <div className="upper">
              <h1>Our Mission</h1>
              <div className="text"><p>Aim to provide quality education, foster innovation, and advance research in Information Technology.</p></div>
            </div>
            <div className="lower"></div>
          </div>
          <div className="middle">
            <div className="logo"></div>
            <div className="buffer"></div>
            <div className="font">Faculty
              <div className='lower'>
                Corner
  
              </div>
            </div>
            <div className="buffer"></div>
          </div>
          <div className="right">
            <div className="upper"></div>
            <div className="lower">
              <h1>Highlights</h1>
              <div className="text"><p>Top education, AI & cybersecurity research, industry ties, top labs, strong placements—empowering innovation.</p></div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Hero;
