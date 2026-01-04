import React, { useRef } from "react";
import "./AutoCarousel.css";
import { Tooltip, Card } from "antd";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    const carouselRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: carouselRef.current,
                    start: "top 80%", // Animation starts when top of element
                },
            });
            tl.from(".list-scroller", { opacity: 0, duration: 1, ease: "power2.out", stagger: 0.3 });
        },
        { scope: carouselRef }
    );
    return (
        companies && (
            <div className="list" ref={carouselRef}>
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
