import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Hero.css";

gsap.registerPlugin(useGSAP);

function Hero() {
    const container = useRef();
    const titleText = "Society of";

    useGSAP(
        () => {
            const tl = gsap.timeline();

            // --- STEP 2: The Middle Card Materializes ---
            // The text is already there, now we show the container around it
            tl.from(
                ".middle",
                {
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    boxShadow: "none",
                    scale: 0,
                    duration: 1,
                    ease: "power2.out",
                },
                "-=0.2"
            ); // Overlap slightly with text finishing

            // --- STEP 3: The Logo Pops In ---
            tl.from(
                ".logo",
                {
                    scale: 0,
                    rotation: -180,
                    opacity: 0,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.7)",
                },
                "<"
            ); // Happens same time as middle card forming

            // --- STEP 4: The Fan Out (Left & Right) ---
            // They slide out from behind the Middle card
            tl.from(
                ".left",
                {
                    xPercent: 110, // Start hidden behind middle (move right)
                    opacity: 0,
                    scale: 0.8,
                    duration: 1,
                    ease: "power3.inOut", // Smooth "cinematic" movement
                },
                "-=0.6"
            )
            .from(
                ".right",
                {
                    xPercent: -110, // Start hidden behind middle (move left)
                    opacity: 0,
                    scale: 0.8,
                    duration: 1,
                    ease: "power3.inOut",
                },
                "<"
            ); // Sync with Left card

            // --- STEP 5: Content Reveal ---
            // Animate the paragraphs inside Left and Right cards
            tl.from(
                ".left .text, .right .text, .right h1, .left .upper h1",
                {
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    duration: 0.5,
                },
                "-=0.3"
            );

            tl.from(".hero-title-char", {
                opacity: 0,
                y: 50, // Comes up from below
                rotateX: -90, // 3D rotation effect
                stagger: 0.03, // Speed of typing
                duration: 0.8,
                ease: "back.out(1.7)", // Slight overshoot for bounciness
            }, "<=0.3");
        },
        { scope: container }
    );

    return (
        <div className="Hero-Frame" ref={container}>
            <div className="Hero">
                {/* --- LEFT CARD --- */}
                <div className="left">
                    <div className="upper">
                        <h1></h1>
                        <div className="text">
                            <p>
                                Welcome to the web corner of SOCIT - Society of Information Technology, IIEST Shibpur.
                            </p>
                        </div>
                    </div>
                    <div className="lower"></div>
                </div>

                {/* --- MIDDLE CARD --- */}
                <div className="middle">
                    <div className="logo"></div>
                    <div className="buffer"></div>

                    <div className="font">
                        {/* React logic to split text into spans automatically */}
                        {titleText.split("").map((char, index) => (
                            <div key={index} className="hero-title-char">
                                {char}
                            </div>
                        ))}
                        <br />
                        {"Information".split("").map((char, index) => (
                            <div key={index} className="hero-title-char">
                                {char}
                            </div>
                        ))}
                        <br />
                        {"Technology".split("").map((char, index) => (
                            <div key={index} className="hero-title-char">
                                {char}
                            </div>
                        ))}
                    </div>

                    <div className="buffer"></div>
                </div>

                {/* --- RIGHT CARD --- */}
                <div className="right">
                    <div className="upper"></div>
                    <div className="lower">
                        <h1 className="">Highlights</h1>
                        <div className="text">
                            <p>
                                Top education, AI & cybersecurity research, industry ties, top labs, strong
                                placements—empowering innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
