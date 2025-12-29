import React, { useRef } from "react";
import "./About.css";
import CustomButton from "../CustomButton/CustomButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 80%", // Animation starts when top of element 
                },
            });
            tl.from(".topic", { opacity: 0, transform: "scaleX(0)", duration: 1, ease: "power2.out" });
            tl.from(".right", { opacity: 0, transform: "translateY(50%)", duration: 0.7 });
            tl.from(".left", { opacity: 0, transform: "translateY(50%)", duration: 0.7 }, "<=0.3");
            tl.from(".img-box", { opacity: 0, duration: 1 });
            tl.from(".text", { opacity: 0, duration: 1 }, "<");
            tl.from(".button_know_more", { opacity: 0, x: 50, duration: 1 }, "<");
        },
        { scope: aboutRef }
    );
    return (
        <div className="content-wrapper-about" ref={aboutRef}>
            <div className="topic">About Us</div>
            <div className="content">
                <div className="right">
                    <p>
                        <div className="text" style={{ animationDelay: "0.2s" }}>
                            SOCIT is the official club of the Information Technology Department at IIEST, Shibpur. We
                            are a vibrant community of tech enthusiasts, dedicated to fostering innovation,
                            collaboration, and learning in the field of Information Technology.
                            <br />
                            At SOCIT, we organize hackathons, workshops, coding competitions, and tech talks to help
                            students enhance their skills and stay updated with industry trends. Our mission is to
                            empower students with knowledge, hands-on experience, and a strong network that bridges the
                            gap between academia and the tech industry.
                            <br />
                        </div>
                    </p>
                    <div className="button_know_more">
                        <CustomButton text="Know more" url={"https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"} />
                    </div>
                </div>
                <div className="left">
                    <div className="img-box"></div>
                </div>
            </div>
        </div>
    );
};

export default About;
