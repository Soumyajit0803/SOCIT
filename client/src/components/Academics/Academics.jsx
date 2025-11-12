import React from "react";
import "./Academics.css";
import CustomButton from "../CustomButton/CustomButton";

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
    return (
        <div className="academics-wrapper hiderx">
            <div className="topic">
                <span className="right-to-left">Academics</span>
            </div>
            <div className="content">
                <div className="left">
                    <div className="img-box"></div>
                </div>
                <div className="right">
                    <p className="right-to-left" style={{ animationDelay: "0.2s" }}>
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
                    <div className="semester-links right-to-left" style={{ animationDelay: "0.3s" }}>
                        {semesterLinks.map((link, index) => (
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <div className="sem">Semester {index + 1}</div>
                            </a>
                        ))}
                    </div>

                    <div className="right-to-left" style={{ animationDelay: "0.4s", marginTop: "20px" }}>
                        <CustomButton text="Academic corner" url={"https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academics;
