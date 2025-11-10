import React from "react";
import "./About.css";
import CustomButton from "../CustomButton/CustomButton";

const About = () => {
    return (
        <div className="content-wrapper-about">
            <div className="topic">About Us</div>
            <div className="content">
                
                <div className="right">
                    <p>
                        <div className="">
                            SOCIT is the official club of the Information Technology Department at IIEST, Shibpur. We are a vibrant community of tech enthusiasts, dedicated to fostering innovation, collaboration, and learning in the field of Information Technology.<br />
                            At SOCIT, we organize hackathons, workshops, coding competitions, and tech talks to help students enhance their skills and stay updated with industry trends. Our mission is to empower students with knowledge, hands-on experience, and a strong network that bridges the gap between academia and the tech industry.<br />
                        </div>
                    </p>
                    <CustomButton text="Know more" url={"https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"} />
                </div>
                <div className="left">
                    <div className="img-box"></div>
                </div>
            </div>
        </div>
    );
};

export default About;
