import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
// import "./HeroGallery.css";

const HeroGallery = () => {
    const container = useRef(null);

    const imageList = {
        left_u: { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJOWrpHPhcPbwOpOpFlxf7CZrYSEdpIYeMg&s", alpha: 0.5 },
        left_d: { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gTtvrPMLjmYmgrPwz5IuU45DCf3TRIMLGg&s", alpha: 0.5 },
        right_u: { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarLGcTBF9j9aG6fUjpLdqwUUnGg_HloHKng&s", alpha: 0.5 },
        right_d: { src: "https://oldwww.iiests.ac.in/images/campuspic/8-storeyedscienceandtechnologybuilding.jpg", alpha: 0.5 },
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

            // 1. Left Upper - From Top
            tl.from(".left-u", { y: -100, opacity: 0 }, 0);
            
            // 2. Left Lower - From Left
            tl.from(".left-d", { x: -100, opacity: 0 }, 0);

            // 3. Right Upper - From Right
            tl.from(".right-u", { x: 100, opacity: 0 }, 0);

            // 4. Right Lower - From Bottom
            tl.from(".right-d", { y: 100, opacity: 0 }, 0);

            // 5. Middle - Scale/Fade in
            tl.from(".middle", { scale: 0.6, opacity: 0, duration: 1.5 }, 0);

        }, container);

        return () => ctx.revert(); // Cleanup
    }, []);

    const getBgStyle = (img) => ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${img.alpha}), rgba(0, 0, 0, ${img.alpha})), url(${img.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    });

    return (
        <div className="Hero-Frame" ref={container}>
            <div className="Hero">
                <div className="left">
                    <div className="upper left-u" style={getBgStyle(imageList.left_u)}></div>
                    <div className="lower left-d" style={getBgStyle(imageList.left_d)}></div>
                </div>

                <div className="middle" style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.7)), url("/assets/gallery/gallery-hero.webp")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                    <div className="font">
                        <div className="lower">Gallery</div>
                    </div>
                </div>

                <div className="right">
                    <div className="upper right-u" style={getBgStyle(imageList.right_u)}></div>
                    <div className="lower right-d" style={getBgStyle(imageList.right_d)}></div>
                </div>
            </div>
        </div>
    );
};

export default HeroGallery;