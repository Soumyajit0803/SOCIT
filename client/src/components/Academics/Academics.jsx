import React, {useRef} from "react";
import "./Academics.css";
import CustomButton from "../CustomButton/CustomButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const semesterLinks = [
    "https://example.com/semester1",
    "https://example.com/semester2",
    "https://example.com/semester3",
    "https://example.com/semester4",
    "https://example.com/semester5",
    "https://example.com/semester6",
    "https://example.com/semester7",
    "https://example.com/semester8",
];

const Academics = () => {
    const academicsRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: academicsRef.current,
                    start: "top 80%", // Animation starts when top of element
                },
            });
            tl.from(".topic", { opacity: 0, transform: "scaleX(0)", duration: 1, ease: "power2.out" });
            tl.from(".right", { opacity: 0, transform: "translateY(50%)", duration: 0.7 });
            tl.from(".left", { opacity: 0, transform: "translateY(50%)", duration: 0.7 }, "<=0.3");
            tl.from(".img-box", { opacity: 0, duration: 1 });
            tl.from(".text", { opacity: 0, duration: 1 }, "<");
            tl.from(".sem-wrap", {
            opacity: 0,  // Fade in
            duration: 0.5,   
            y: 50,   
            stagger: 0.1, // <--- THE MAGIC SAUCE: 0.1s delay between each item
            });
            tl.from(".know-more", { opacity: 0, x: 50, duration: 0.5 });
        },
        { scope: academicsRef }
    );
    return (
        <div className="academics-wrapper" ref={academicsRef}>
            <div className="topic">
                <span className="">Academics</span>
            </div>
            <div className="content">
                <div className="left">
                    <div className="img-box"></div>
                </div>
                <div className="right">
                    <p className="text">
                        The Information Technology Department at IIEST, Shibpur offers a well-structured curriculum that
                        blends theoretical foundations with practical applications to prepare students for the
                        ever-evolving tech industry. Our academic programs focus on core computer science principles,
                        software development, networking, cybersecurity, artificial intelligence, and data science.
                        <br />
                        With a strong emphasis on research and hands-on learning, students gain exposure through
                        industry projects, internships, and lab-based coursework. The department encourages innovation,
                        problem-solving, and interdisciplinary learning, ensuring that graduates are well-equipped to
                        tackle real-world challenges.
                    </p>
                    <div className="semester-links" style={{ animationDelay: "0.3s" }}>
                        {semesterLinks.map((link, index) => (
                            <a className="sem-wrap" href={link} target="_blank" rel="noopener noreferrer">
                                <div className="sem">Semester {index + 1}</div>
                            </a>
                        ))}
                    </div>

                    <div className="know-more">
                        <CustomButton text="Academic corner" url={"https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academics;
