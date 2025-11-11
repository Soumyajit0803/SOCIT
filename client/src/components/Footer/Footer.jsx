import React from "react";
import "./Footer.css";
import { Button, Avatar, Tooltip } from "antd";
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, MailOutlined, SendOutlined } from "@ant-design/icons";
import CustomButton from "../CustomButton/CustomButton";

const contributors = [
    { name: "Soumyajit Karmakar", username: "soumyajit0803" },
    { name: "Abhijit Karmakar", username: "abhijit004" },
    { name: "Asif Tanvir", username: "Asif-Tanvir-2006" },
    { name: "Satish Kumar Singh", username: "a-sksingh113" },
    { name: "Anshika Gupta", username: "flex0ing-ag" },
    { name: "Prayas Sinha", username: "sinpea" },
];

const Developer = ({ name, github }) => (
    <div className="developer">
        <a href={"https://github.com/" + github}>{name}</a>
    </div>
);
const ExtLink = ({ link, name }) => (
    <div className="extlink">
        <a href={link}>{name}</a>
    </div>
);
const Footer = () => {
    return (
        <footer className="Footer-Frame">
            <div className="Footer">
                <div className="Lower">
                    <div className="Left-Box">
                        <div className="Logo_mob">
                            <div className="Image"></div>
                            {/* <button className="more_button_mob">
                                <div className="text">More Info</div>
                                {<SendOutlined style={{ fontSize: "1.5rem" }} />}
                            </button> */}
                            <Button
                                iconPosition="end"
                                icon={<SendOutlined style={{ fontSize: "1.5rem" }} />}
                                className="more_button_mob"
                            >
                                More Info
                            </Button>
                        </div>
                        <div className="mob_middle">
                            <div className="wrapper_left">
                                <div id="fixed_height">
                                    <div className="Title">
                                        <div className="fixedImage"></div>
                                        Society of Information
                                        <br />
                                        Technology,
                                        <br />
                                        IIEST, Shibpur
                                    </div>
                                    <div className="address" style={{ color: "var(--text-secondary) !important" }}>
                                        Botanical garden area,
                                        <br />
                                        Shibpur, Howrah-700013
                                        <br />
                                        West bengal
                                    </div>
                                </div>
                                <div id="ql_mob_hidden">
                                    <div className="Title" id="sec_title">
                                        Quick Links
                                    </div>
                                    <div className="address" id="no_space">
                                        <div className="item">
                                            <ExtLink link="https://www.iiests.ac.in/" name="IIEST&nbsp;Shibpur" />
                                        </div>
                                        <div className="item">
                                            <ExtLink
                                                link="https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"
                                                name="About"
                                            />
                                        </div>
                                        {/* <div className="item">
                                            <ExtLink link="https://github.com/Soumyajit0803/SOCIT" name="Github" />
                                        </div> */}
                                        <div className="item">
                                            <ExtLink link="https://instruo.tech/" name="Instruo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="breaker_line"></div>
                            <div className="wrapper_right">
                                <div className="Links" id="fixed_height">
                                    <div className="Title">Head of Dept</div>
                                    <div>
                                        <div className="item">Prof. Tuhina Samanta</div>
                                        <div className="item-x">hod.it@faculty.iiests.ac.in</div>
                                        <div className="item-x">hod@it.iiests.ac.in</div>
                                        <div className="item-x">+91 33 2668 4561-63</div>
                                        <div className="item-x">+91 33 2668 0521-25</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Mid-Box">
                        <div className="Image"></div>
                        {/* <button className="more_button">
                            <div className="text">More Info</div>
                            {<SendOutlined style={{ fontSize: "1.5rem" }} />}
                        </button> */}
                        <CustomButton text="More Info" url={"https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"} />

                        <div className="Text">
                            <div className="Right">
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
                        </div>
                    </div>
                    <div className="Right-Box">
                        <div className="icons">
                            <Button
                                style={{ margin: "0.2rem" }}
                                icon={<LinkedinOutlined style={{ fontSize: "13px" }} />}
                            ></Button>
                            <Button
                                style={{ margin: "0.2rem" }}
                                icon={<GithubOutlined style={{ fontSize: "13px" }} />}
                            ></Button>
                            <Button
                                style={{ margin: "0.2rem" }}
                                icon={<InstagramOutlined style={{ fontSize: "13px" }} />}
                            ></Button>
                            <Button
                                style={{ margin: "0.2rem" }}
                                icon={<MailOutlined style={{ fontSize: "13px" }} />}
                            ></Button>
                        </div>
                        <div className="wrapper">
                            <div className="Links" id="ql">
                                <div className="Title">Quick Links</div>
                                <div className="item">
                                    <ExtLink link="https://www.iiests.ac.in/" name="IIEST&nbsp;Shibpur" />
                                </div>
                                <div className="item">
                                    <ExtLink link="https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT" name="About" />
                                </div>
                                {/* <div className="item">
                                            <ExtLink link="https://github.com/Soumyajit0803/SOCIT" name="Github" />
                                        </div> */}
                                <div className="item">
                                    <ExtLink link="https://instruo.tech/" name="Instruo" />
                                </div>
                            </div>
                            <div className="Links" id="fixed_height">
                                <div className="Title">Head of Dept</div>
                                <div id="details">
                                    <div className="item">Prof. Tuhina Samanta</div>
                                    <div className="item-x">hod.it@faculty.iiests.ac.in</div>
                                    <div className="item-x">hod@it.iiests.ac.in</div>
                                    <div className="item-x">+91 33 2668 4561-63</div>
                                    <div className="item-x">+91 33 2668 0521-25</div>
                                </div>
                            </div>
                            <div className="Links" id="shift_right">
                                <div className="Title">Developers</div>
                                {/* <Developer name="Soumyajit Karmakar" github="soumyajit0803" />
                                <Developer name="Abhijit Karmakar" github="abhijit004" />
                                <Developer name="Asif Tanvir" github="Asif-Tanvir-2006" />
                                <Developer name="Satish Kumar Singh" github="a-sksingh113" />
                                <Developer name="Anshika Gupta" github="flex0ing-ag" />
                                <Developer name="Prayas Sinha" github="sinpea" /> */}
                                <Avatar.Group style={{marginTop: '1rem'}}>
                                    {contributors.map(({ name, username }) => (
                                        <Tooltip title={name} key={username}>
                                            <a
                                                href={`https://github.com/${username}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Avatar
                                                    size={40}
                                                    src={`https://github.com/${username}.png`}
                                                    alt={name}
                                                />
                                            </a>
                                        </Tooltip>
                                    ))}
                                </Avatar.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="text">copyright ©2024 SoCIT. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
