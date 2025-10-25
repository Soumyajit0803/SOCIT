import React from "react";
import "./HeroGallery.css";
const HeroGallery = () => {
    //add image locations and change transparency values here.
    const imageList = {
        left_u:{src:"/assets/placeholder.png",alpha:0.5},
        left_d:{src:"/assets/placeholder.png",alpha:0.5},
        right_u:{src:"/assets/placeholder.png",alpha:0.5},
        right_d:{src:"/assets/placeholder.png",alpha:0.5}
    };
    
    const middle_alpha = 0.5;

    return (
        <>
        <div className="Hero-Frame">
        <div className="Hero">
          <div className="left">
            <div className="upper" style = {{
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${imageList.left_u.alpha}),rgba(0, 0, 0, ${imageList.left_u.alpha})),url(${imageList.left_u.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
              <div>
                {/*<Image src={imageList.left_u.src}/>*/}
              </div>
            </div>
            <div className="lower" style = {{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${imageList.left_d.alpha}),rgba(0, 0, 0, ${imageList.left_d.alpha})), url(${imageList.left_d.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                <div>
                </div>
            </div>
          </div>
          <div className="middle" style = {{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${middle_alpha}),rgba(0, 0, 0, ${middle_alpha})), url(${imageList.right_u.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
            <div className="logo"></div>
            <div className="buffer"></div>
            <div className="font">
              <div className='lower'>
                Gallery
              </div>
            </div>
            <div className="buffer"></div>
          </div>
          <div className="right">
            <div className="upper" style = {{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${imageList.right_u.alpha}),rgba(0, 0, 0, ${imageList.right_u.alpha})), url(${imageList.left_d.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}></div>
            <div className="lower" style = {{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${imageList.right_d.alpha}),rgba(0, 0, 0, ${imageList.right_d.alpha})), url(${imageList.left_d.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default HeroGallery;
