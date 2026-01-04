import { Card, Tooltip } from "antd";
import "./RecruitersCmp.css";
import AutoCarousel from "../AutoCarousel/AutoCarousel";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const recruiterData = [
    { key: "google", name: "Google" },
    { key: "microsoft", name: "Microsoft" },
    { key: "goldmansachs", name: "Goldman Sachs" },
    { key: "jpmc", name: "JPMorgan Chase" },
    { key: "deutschebank", name: "Deutsche Bank" },
    { key: "bny", name: "BNY Mellon" },
    { key: "accenture", name: "Accenture" },
    { key: "pwc", name: "PwC" },
    { key: "willis", name: "Willis Towers Watson" },
    { key: "media", name: "Media.net" },
    { key: "tigeranalytics", name: "Tiger Analytics" },
    { key: "wellsfargo", name: "Wells Fargo" },
    { key: "openlm", name: "OpenLM" },
    { key: "natwest", name: "NatWest Group" },
    { key: "jktech", name: "JK Tech" },
    { key: "hcl", name: "HCL Tech" },
    { key: "tcs", name: "Tata Consultancy Services" },
];
export default function RecruitersCmp() {
    const recruiterRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: recruiterRef.current,
                    start: "top 80%", // Animation starts when top of element
                },
            });
            tl.from(".TitleText", { opacity: 0, transform: "scaleX(0)", duration: 1, ease: "power2.out" });
        },
        { scope: recruiterRef }
    );
    return (
        <section className="RecruitersCmp" ref={recruiterRef}>
            <div className="TitleText">Our Recruiters</div>
                <AutoCarousel companies={recruiterData} />
        </section>
    );
}
