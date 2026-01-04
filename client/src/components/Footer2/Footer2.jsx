import React, { useRef } from "react";
import "./Footer2.css";
import { Button, Avatar, Tooltip } from "antd";
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, MailOutlined } from "@ant-design/icons";
import CustomButton from "../CustomButton/CustomButton";
import FooterAnim from "../FooterAnim/FooterAnim";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExtLink = ({ link, name }) => (
    <div className="extlink">
        <a href={link}>{name}</a>
    </div>
);

const Socials = () => {
    return (
        // Added class 'social-icon' for GSAP targeting
        <div style={{ margin: "1rem 0 1rem 0" }} className="socials-container">
            <Button
                className="social-icon"
                shape="circle"
                size="large"
                style={{ margin: "0.2rem" }}
                icon={<LinkedinOutlined style={{ fontSize: "1.3rem" }} />}
                href="https://www.linkedin.com/company/socit-iiests/posts/?feedView=all"
                rel="noopener noreferrer"
                target="blank"
            ></Button>
            <Button
                className="social-icon"
                href="https://github.com/Soumyajit0803/SOCIT"
                rel="noopener noreferrer"
                target="blank"
                shape="circle"
                size="large"
                style={{ margin: "0.2rem" }}
                icon={<GithubOutlined style={{ fontSize: "1.3rem" }} />}
            ></Button>
            <Button
                className="social-icon"
                href="https://www.instagram.com/socit_iiests?igsh=MXIxNXc5NXdoaXlpdA=="
                rel="noopener noreferrer"
                target="blank"
                shape="circle"
                size="large"
                style={{ margin: "0.2rem" }}
                icon={<InstagramOutlined style={{ fontSize: "1.3rem" }} />}
            ></Button>
            <Button
                className="social-icon"
                href="mailto:hod@it.iiests.ac.in"
                rel="noopener noreferrer"
                target="blank"
                shape="circle"
                size="large"
                style={{ margin: "0.2rem" }}
                icon={<MailOutlined style={{ fontSize: "1.3rem" }} />}
            ></Button>
        </div>
    );
};

const contributors = [
    { name: "Soumyajit Karmakar", username: "soumyajit0803" },
    { name: "Abhijit Karmakar", username: "abhijit004" },
    { name: "Asif Tanvir", username: "Asif-Tanvir-2006" },
    { name: "Satish Kumar Singh", username: "a-sksingh113" },
    { name: "Anshika Gupta", username: "flex0ing-ag" },
    { name: "Prayas Sinha", username: "sinpea" },
];

const Footer2 = () => {
    const footerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 80%", // Start slightly earlier so users see movement
            }
        });

        // 1. Animate the main 3 columns (Left, Mid, Right)
        // We use a general selector to stagger the main blocks first
        tl.from(".left, .mid, .right", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });

        // 2. Stagger the Quick Links specifically
        tl.from(".extlink", {
            x: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.4"); // Overlap slightly with previous animation

        // 3. Pop in the Developer Avatars
        tl.from(".contri .ant-avatar", {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "back.out(1.7)" // Nice bounce effect
        }, "-=0.2");

        // 4. Slide up Social Icons
        tl.from(".social-icon", {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(2)"
        }, "<"); // Run at the same time as avatars

        // 5. Finally, the Copyright text
        tl.from(".copyright p", {
            opacity: 0,
            duration: 1
        });

    }, { scope: footerRef });

    return (
        <footer className="socit-footer" ref={footerRef}>
            <div className="for-mob">
                <FooterAnim />
                <CustomButton text="More Info" url={"https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"} />
                <Socials />
            </div>

            <div className="always">
                <div className="left">
                    <span className="clg">
                        Society of Information Technology <br />
                        IIEST, Shibpur
                    </span>
                    <span className="loc">Botanical garden area, Shibpur, Howrah-711103 West bengal</span>
                    <div className="quick-links">
                        <span style={{ fontSize: "1.5rem", fontWeight: 700 }}>Quick Links</span>
                        <ExtLink link="https://www.iiests.ac.in/" name="IIEST&nbsp;Shibpur" />
                        <ExtLink link="https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT" name="About" />
                        <ExtLink link="https://instruo.tech/" name="Instruo" />
                    </div>
                </div>
                <div className="mid">
                    <FooterAnim />
                    <CustomButton text="More Info" url={"https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"} />
                    <Socials />
                </div>
                <div className="right">
                    <span className="hod">Head of Department</span>
                    <span className="hodname">Prof. Tuhina Samanta</span>
                    <span className="hodinfo">
                        hod.it@faculty.iiests.ac.in
                        <br />
                        hod@it.iiests.ac.in
                        <br />
                        +91 33 2668 4561-63
                        <br />
                        +91 33 2668 0521-25
                    </span>
                    <div className="contri">
                        <span className="heading">Developers</span>
                        <Avatar.Group style={{ marginTop: "1rem" }}>
                            {contributors.map(({ name, username }) => (
                                <Tooltip title={name} key={username}>
                                    <a
                                        href={`https://github.com/${username}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Avatar size={40} src={`https://github.com/${username}.png`} alt={name} style={{ border: "var(--appborder)" }} />
                                    </a>
                                </Tooltip>
                            ))}
                        </Avatar.Group>
                    </div>
                </div>
            </div>
            <div className="copyright"><p>copyright &copy; {new Date().getFullYear()} SOCIT. All rights reserved.</p></div>
        </footer>
    );
};

export default Footer2;