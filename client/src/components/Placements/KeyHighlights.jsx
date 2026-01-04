import "./KeyHighlights.css";
import { useRef } from "react";
import { Carousel } from "antd";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function KeyHighlights() {
    const carouselStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: "0",
    };

    const keyHighRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: keyHighRef.current,
                    start: "top 80%", // Animation starts when top of element
                },
            });
            tl.from(".TitleText", { opacity: 0, transform: "scaleX(0)", duration: 1, ease: "power2.out" });
            tl.from(".Container", { opacity: 0, transform: "translateY(50%)", duration: 0.7, stagger: 0.2 });
        },
        { scope: keyHighRef }
    );

    return (
        <div ref={keyHighRef}>
            <div className="TitleText">
                Key Highlights
            </div>
            <div className="StatsContainer">
                <div className="Container ll">
                    <div className="data">
                        <div className="Value">
                            <span>14</span>
                        </div>
                        <div className="LPA">
                            <span>LPA</span>
                        </div>
                    </div>

                    <div className="SalaryType">Average Salary</div>
                </div>
                <div className="Container lc">
                    <div className="data">
                        <div className="Value">
                            <span>11</span>
                        </div>
                        <div className="LPA">
                            <span>LPA</span>
                        </div>
                    </div>

                    <div className="SalaryType">
                        Median Salary
                    </div>
                </div>
                <div className="Container rc">
                    <div className="data">
                        <div className="Value">
                            <span>55</span>
                        </div>
                        <div className="LPA">
                            <span>LPA</span>
                        </div>
                    </div>

                    <div className="SalaryType">
                        Highest Salary
                    </div>
                </div>
                <div className="Container rr">
                    <div className="data">
                        <div className="Value">
                            <span>80</span>
                        </div>
                        <div className="LPA">
                            <span>%</span>
                        </div>
                    </div>

                    <div className="SalaryType">
                        Students Placed
                    </div>
                </div>
            </div>
            <div className="StatsCarousel">
                <Carousel className="MobileCarousel" infinite autoplay autoplaySpeed={3000}>
                    <div>
                        <div className="Container ll" style={carouselStyle}>
                            <div className="data">
                                <div className="Value">
                                    <span>14</span>
                                </div>
                                <div className="LPA">
                                    <span>LPA</span>
                                </div>
                            </div>

                            <div className="SalaryType">Average Salary</div>
                        </div>
                    </div>
                    <div>
                        <div className="Container lc" style={carouselStyle}>
                            <div className="data">
                                <div className="Value">
                                    <span>11</span>
                                </div>
                                <div className="LPA">
                                    <span>LPA</span>
                                </div>
                            </div>

                            <div className="SalaryType">Median Salary</div>
                        </div>
                    </div>
                    <div>
                        <div className="Container rc" style={carouselStyle}>
                            <div className="data">
                                <div className="Value">
                                    <span>55</span>
                                </div>
                                <div className="LPA">
                                    <span>LPA</span>
                                </div>
                            </div>

                            <div className="SalaryType">Highest Salary</div>
                        </div>
                    </div>
                    <div>
                        <div className="Container rr" style={carouselStyle}>
                            <div className="data">
                                <div className="Value">
                                    <span>80</span>
                                </div>
                                <div className="LPA">
                                    <span>%</span>
                                </div>
                            </div>

                            <div className="SalaryType">Placed Students</div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
