import React from "react";
import "./Footer2.css";
import { Button, Avatar, Tooltip } from "antd";
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, MailOutlined, SendOutlined } from "@ant-design/icons";
import CustomButton from "../CustomButton/CustomButton";
import FooterAnim from "../FooterAnim/FooterAnim";

const ExtLink = ({ link, name }) => (
    <div className="extlink">
        <a href={link}>{name}</a>
    </div>
);

const Socials = () => {
    return (
        <div style={{ margin: "1rem 0 1rem 0" }}>
            <Button
                shape="circle"
                size="large"
                style={{ margin: "0.2rem" }}
                icon={<LinkedinOutlined style={{ fontSize: "1.3rem" }} />}
                href="https://www.linkedin.com/company/socit-iiests/posts/?feedView=all"
                rel="noopener noreferrer"
                target="blank"
            ></Button>
            <Button
                href="https://github.com/Soumyajit0803/SOCIT"
                rel="noopener noreferrer"
                target="blank"
                shape="circle"
                size="large"
                style={{ margin: "0.2rem" }}
                icon={<GithubOutlined style={{ fontSize: "1.3rem" }} />}
            ></Button>
            <Button
                href="https://www.instagram.com/socit_iiests?igsh=MXIxNXc5NXdoaXlpdA=="
                rel="noopener noreferrer"
                target="blank"
                shape="circle"
                size="large"
                style={{ margin: "0.2rem" }}
                icon={<InstagramOutlined style={{ fontSize: "1.3rem" }} />}
            ></Button>
            <Button
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
    return (
        <footer className="socit-footer">
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
                                        <Avatar size={40} src={`https://github.com/${username}.png`} alt={name} style={{border: "var(--appborder)"}}/>
                                    </a>
                                </Tooltip>
                            ))}
                        </Avatar.Group>
                    </div>
                </div>
            </div>
            <div className="copyright">copyright &copy; {new Date().getFullYear()} SOCIT. All rights reserved.</div>
        </footer>
    );
};

export default Footer2;
