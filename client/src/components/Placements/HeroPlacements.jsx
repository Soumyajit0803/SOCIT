import React from "react";
import "./HeroPlacements.css"
function Hero() {

    return (
        <div className="Hero-Frame">
        <div className="Hero hiderx">
          <div className="left">
            <div className="upper">
              {/*<h1>Our Mission</h1>*/}
                <div className="text left-to-right">
                    <p>
                        Our consistent placement record stands as a testament to the excellence of our department and the calibre of our students.
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
              <h1 className="right-to-left">Top Skills</h1>
              <div className="text right-to-left" style={{ animationDelay: "0.3s" }}><p>Recruiters look for roles on softare engineering, web/network expertise and various consultant positions.</p></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;
