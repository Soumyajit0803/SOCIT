import React from "react";
import "./Hero.css"
function Hero() {

    return (
        <div className="Hero-Frame hiderx">
        <div className="Hero">
          <div className="left">
            <div className="upper">
              <h1></h1>
              <div className="text left-to-right"><p>Welcome to the web corner of SOCIT - Society of Information Technology, IIEST Shibpur.</p></div>
            </div>
            <div className="lower"></div>
          </div>
          <div className="middle">
            <div className="logo"></div>
            <div className="buffer"></div>
            <div className="font hiderx" style = {{animationDelay: "0.2s"}}>
              Society of Information Technology
            
            </div>
            <div className="buffer"></div>
          </div>
          <div className="right">
            <div className="upper"></div>
            <div className="lower">
              <h1 className="right-to-left">Highlights</h1>
              <div className="text right-to-left"><p>Top education, AI & cybersecurity research, industry ties, top labs, strong placements—empowering innovation.</p></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;
