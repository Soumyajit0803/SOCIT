import React from "react";
import "./Work.css";
import CustomButton from "../CustomButton/CustomButton";

const About = ({ content }) => {
    return (
        <div className="content-wrapper">
            <div className="topic" id="right_align">Our Works</div>
            <div className="content">
              
                <div className="right" id="order_2">
                    <p>
                        <div className="overflow">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto deserunt dolorum perferendis vero consequatur nesciunt rerum explicabo incidunt ab quos sapiente delectus aut non atque, nisi ut eaque a voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum non minima quaerat unde, voluptate assumenda consectetur? Amet error reiciendis ipsa quibusdam necessitatibus animi quas eligendi saepe, nihil et veritatis tenetur?<br />
                        </div>
                    </p>
                    {/* <div className="button_know_more"><CustomButton text="Know more" url={"https://www.iiests.ac.in/IIEST/AcaUnitDetails/IT"} /></div> */}
                </div>
                <div className="left" id="order_1">
                    <div className="img-box"></div>
                </div>
            </div>
        </div>
    );
};

export default About;
