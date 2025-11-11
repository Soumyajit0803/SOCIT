import React from "react";

const Hero = () => {
    return (
        <>
          <div className="Hero-Frame hiderx">
        <div className="Hero">
          <div className="left">
            <div className="upper">
              <h1 className="left-to-right">Guiding Excellence</h1>
              <div className="text left-to-right" style={{ animationDelay: "0.3s" }}><p>A Distinguished Faculty Committed to Academic and Professional Growth.</p></div>
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
              <h1 className="right-to-left">Highlights</h1>
              <div className="text right-to-left" style={{ animationDelay: "0.3s" }}><p>Top education, AI & cybersecurity research, industry ties, top labs, strong placements—empowering innovation.</p></div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Hero;
