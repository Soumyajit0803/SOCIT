import React from "react";
import "./HeroPlacements.css"
function Hero() {

    return (
        <div className="Hero-Frame">
        <div className="Hero">
          <div className="left">
            <div className="upper">
              {/*<h1>Our Mission</h1>*/}
                <div className="text">
                    <p>
                        Our consistent placement record reflects the strength of our department and students.
                    </p>
                </div>
            </div>
            <div className="lower"></div>
          </div>
          <div className="middle">
            <div className="logo"></div>
            <div className="buffer"></div>
            <div className="font">
              Placement <br/>Stats
            
            </div>
            <div className="buffer"></div>
          </div>
          <div className="right">
            <div className="upper"></div>
            <div className="lower">
              <h1>Our Values</h1>
              <div className="text"><p>Top education, AI & cybersecurity research, industry ties, top labs, strong placements—empowering innovation.</p></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;
