import React from "react";
import "./Autocarousel.css";
import { Tooltip, Card } from "antd";

const CompanyCard = ({ name, img }) => {
    return (
        <div className="companycard">
            <div className="logo">
                <img src={`../../assets/recruiters/${img}.webp`} alt={name} />
            </div>
            <div className="company-name">
                <span>{name}</span>
            </div>
        </div>
    );
};

const AutoCarousel = ({ companies }) => {
    return (
        companies && (
            <div className="list">
                <div className="list-scroller">
                    {companies.map((company, i) => (
                        <CompanyCard key={i} name={company.name} img={company.key}></CompanyCard>
                    ))}
                </div>
                <div className="list-scroller">
                    {companies.map((company, i) => (
                        <CompanyCard key={i} name={company.name} img={company.key}></CompanyCard>
                    ))}
                </div>
            </div>
        )
    );
};

export default AutoCarousel;
