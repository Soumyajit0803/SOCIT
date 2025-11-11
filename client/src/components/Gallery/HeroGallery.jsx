import React from "react";
import "./HeroGallery.css";
const HeroGallery = () => {
    //add image locations and change transparency values here.
    const imageList = {
        left_u: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJOWrpHPhcPbwOpOpFlxf7CZrYSEdpIYeMg&s",
            alpha: 0.5,
        },
        left_d: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gTtvrPMLjmYmgrPwz5IuU45DCf3TRIMLGg&s",
            alpha: 0.5,
        },
        right_u: {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarLGcTBF9j9aG6fUjpLdqwUUnGg_HloHKng&s",
            alpha: 0.5,
        },
        right_d: { src: "https://oldwww.iiests.ac.in/images/campuspic/8-storeyedscienceandtechnologybuilding.jpg", alpha: 0.5 },
        mid: { src: "https://www.ecollegeadmission.com/img/blog/11700463823.webp", alpha: 0.5 },
    };

    const middle_alpha = 0.5;

    return (
        <>
            <div className="Hero-Frame">
                <div className="Hero hiderx">
                    <div className="left">
                        <div
                            className="upper left-to-right"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.2)",
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${imageList.left_u.alpha}),rgba(0, 0, 0, ${imageList.left_u.alpha})),url(${imageList.left_u.src})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        >
                            <div>{/*<Image src={imageList.left_u.src}/>*/}</div>
                        </div>
                        <div
                            className="lower left-to-right"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${imageList.left_d.alpha}),rgba(0, 0, 0, ${imageList.left_d.alpha})), url(${imageList.left_d.src})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                animationDelay: "0.2s",
                            }}
                        >
                            <div></div>
                        </div>
                    </div>
                    <div
                        className="middle"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, ${middle_alpha}),rgba(0, 0, 0, ${middle_alpha})), url(${imageList.mid.src})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="logo"></div>
                        <div className="buffer"></div>
                        <div className="font">
                            <div className="lower">Gallery</div>
                        </div>
                        <div className="buffer"></div>
                    </div>
                    <div className="right">
                        <div
                            className="upper right-to-left"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${imageList.right_u.alpha}),rgba(0, 0, 0, ${imageList.right_u.alpha})), url(${imageList.right_u.src})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                animationDelay: "0.4s"
                            }}
                        ></div>
                        <div
                            className="lower right-to-left"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, ${imageList.right_d.alpha}),rgba(0, 0, 0, ${imageList.right_d.alpha})), url(${imageList.right_d.src})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                animationDelay: "0.6s"
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroGallery;
