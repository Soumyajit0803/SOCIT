import React from "react";
import "./About.css";
import CustomButton from "../CustomButton/CustomButton";

const About = () => {
    return (
        <div className="content-wrapper-about hiderx">
            <div className="topic left-to-right">About Us</div>
            <div className="content">
                
                <div className="right">
                    <p>
                        <div className="left-to-right" style = {{animationDelay: "0.2s"}}>
                            SOCIT is the official club of the Information Technology Department at IIEST, Shibpur. We are a vibrant community of tech enthusiasts, dedicated to fostering innovation, collaboration, and learning in the field of Information Technology.<br />
                            At SOCIT, we organize hackathons, workshops, coding competitions, and tech talks to help students enhance their skills and stay updated with industry trends. Our mission is to empower students with knowledge, hands-on experience, and a strong network that bridges the gap between academia and the tech industry.<br />
                        </div>
                    </p>
                    <div className="button_know_more left-to-right" style = {{animationDelay: "0.4s"}}><CustomButton text="Know more" url={"https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"} /></div>
                </div>
                <div className="left">
                    <div className="img-box" style = {{animationDelay: "0.2s"}}></div>
                </div>
            </div>
        </div>
    );
};

export default About;
