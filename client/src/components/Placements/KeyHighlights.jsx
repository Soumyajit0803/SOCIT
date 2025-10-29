import "./KeyHighlights.css"
import {Carousel} from "antd";
export default function KeyHighlights(){
    
    
    const carouselStyle = {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        minWidth:"0"
    }
    return(
        <>
        <div className="TitleText">
            Key Highlights
        </div>
        <div className="StatsContainer">
            <div className="Container ll">
                <div className="data">
                    <div className="Value">
                        <span>
                            10
                        </span>
                    </div>
                    <div className="LPA">
                        <span>
                            LPA
                        </span>
                    </div>
                </div>

                <div className="SalaryType">
                    Median Salary
                </div>
            </div>
            <div className="Container lc">
                <div className="data">
                    <div className="Value">
                        <span>
                            10
                        </span>
                    </div>
                    <div className="LPA">
                        <span>
                            LPA
                        </span>
                    </div>
                </div>

                <div className="SalaryType">
                    Median Salary
                </div>
            </div>
            <div className="Container rc">
                <div className="data">
                    <div className="Value">
                        <span>
                            10
                        </span>
                    </div>
                    <div className="LPA">
                        <span>
                            LPA
                        </span>
                    </div>
                </div>

                <div className="SalaryType">
                    Median Salary
                </div>
            </div>
            <div className="Container rr">
                <div className="data">
                    <div className="Value">
                        <span>
                            10
                        </span>
                    </div>
                    <div className="LPA">
                        <span>
                            LPA
                        </span>
                    </div>
                </div>

                <div className="SalaryType">
                    Median Salary
                </div>
            </div>
        </div>
        <div className="StatsCarousel">
            <Carousel arrows={true} className="MobileCarousel" infinite autoplay autoplaySpeed={6000} >
                <div>
                    <div className="Container ll" style={carouselStyle}>
                    <div className="data">
                        <div className="Value">
                            <span>
                                10
                            </span>
                        </div>
                        <div className="LPA">
                            <span>
                                LPA
                            </span>
                        </div>
                    </div>

                    <div className="SalaryType">
                        Median Salary
                    </div>
                    </div>
                </div>
                <div>
                    <div className="Container lc" style={carouselStyle}>
                        <div className="data">
                            <div className="Value">
                                <span>
                                    10
                                </span>
                            </div>
                            <div className="LPA">
                                <span>
                                    LPA
                                </span>
                            </div>
                        </div>

                        <div className="SalaryType">
                            Median Salary
                        </div>
                    </div>
                </div>
                <div>
                <div className="Container rc" style={carouselStyle}>
                    <div className="data">
                        <div className="Value">
                            <span>
                                10
                            </span>
                        </div>
                        <div className="LPA">
                            <span>
                                LPA
                            </span>
                        </div>
                    </div>

                    <div className="SalaryType">
                        Median Salary
                    </div>
                </div>
                </div>
                <div>
                <div className="Container rr" style={carouselStyle}>
                    <div className="data">
                        <div className="Value">
                            <span>
                                10
                            </span>
                        </div>
                        <div className="LPA">
                            <span>
                                LPA
                            </span>
                        </div>
                    </div>

                    <div className="SalaryType">
                        Median Salary
                    </div>
                </div>
                </div>
            </Carousel>
        </div>
        </>
    )
}