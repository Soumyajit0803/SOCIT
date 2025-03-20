import React from "react";
import "./Footer.css";
import { Button } from "antd";
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, MailOutlined, SendOutlined } from "@ant-design/icons";
const Footer = () => {
    return (
        <footer className="Footer-Frame">
            <div className="Footer">
                <div className="Lower">
                    <div className="Left-Box">
                        <div className="Logo_mob">
                            <div className="Image"></div>
                            <button className="more_button_mob">
                                <div className="text">More Info</div>
                                {<SendOutlined style={{ fontSize: "1.5rem" }} />}
                            </button>
                        </div>
                        <div className="mob_middle">
                            
                            <div className="wrapper_left">
                                <div id="fixed_height">
                                    <div className="Title">
                                        <div className="fixedImage"></div>
                                        Society of Information 
                                        <br />Technology,
                                        <br />
                                        IIEST, Shibpur
                                    </div>
                                    <div className="address">
                                        Botanical garden area, 
                                        <br />Shibpur, Howrah-700013
                                        <br />
                                        West bengal
                                    </div>
                                </div>
                                <div id="ql_mob_hidden">
                                    <div className="Title" id="sec_title">
                                        Quick Links
                                    </div>
                                    <div className="address" id="no_space">
                                        <div className="item">Home</div>
                                        <div className="item">Academics</div>
                                        <div className="item">Placement</div>
                                        <div className="item">Events</div>
                                    </div>
                                </div>

                            </div>
                            <div id="breaker_line">
                                
                            </div>
                            <div className="wrapper_right">
                                <div className="Links" id="fixed_height">
                                    <div className="Title">Head of Dept</div>
                                    <div>
                                        <div className="item">Prof. Tuhina Samanta</div>
                                        <div className="item">hod.it@faculty.iiests.ac.in</div>
                                        <div className="item">hod@it.iiests.ac.in</div>
                                        <div className="item">+91 33 2668 4561-63</div>
                                        <div className="item">+91 33 2668 0521-25</div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Mid-Box">
                        <div className="Image"></div>
                        <button className="more_button">
                            <div className="text">More Info</div>
                            {<SendOutlined style={{ fontSize: "1.5rem" }} />}
                        </button>

                        <div className="Text">
                            <div className="Right">
                                <Button
                                    shape="circle"
                                    size="large"
                                    style={{ margin: "0.2rem" }}
                                    icon={<LinkedinOutlined style={{ fontSize: "1.3rem" }} />}
                                ></Button>
                                <Button
                                    shape="circle"
                                    size="large"
                                    style={{ margin: "0.2rem" }}
                                    icon={<GithubOutlined style={{ fontSize: "1.3rem" }} />}
                                ></Button>
                                <Button
                                    shape="circle"
                                    size="large"
                                    style={{ margin: "0.2rem" }}
                                    icon={<InstagramOutlined style={{ fontSize: "1.3rem" }} />}
                                ></Button>
                                <Button
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
                                <div className="item">Home</div>
                                <div className="item">Placements</div>
                                <div className="item">Events</div>
                                <div className="item">Gallery</div>
                            </div>
                            <div className="Links" id="fixed_height">
                                <div className="Title">Head of Dept</div>
                                <div id="details">
                                    <div className="item">Prof. Tuhina Samanta</div>
                                    <div className="item">hod.it@faculty.iiests.ac.in</div>
                                    <div className="item">hod@it.iiests.ac.in</div>
                                    <div className="item">+91 33 2668 4561-63</div>
                                    <div className="item">+91 33 2668 0521-25</div>

                                </div>

                            </div>
                            <div className="Links" id="shift_right">
                                <div className="Title">Developers</div>
                                <div className="item">Asif</div>
                                <div className="item">Asif</div>
                                <div className="item">Asif</div>
                                <div className="item">Asif</div>
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
