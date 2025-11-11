import { Card, Tooltip } from "antd";
import "./RecruitersCmp.css";
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
    { key: "tcs", name: "Tata Consultancy Services (TCS)" }
];
export default function RecruitersCmp() {
    return (
        <section className="RecruitersCmp">
            <div className="TitleText top-to-bottom">Our Recruiters</div>
            <div className="recGrid">
                {recruiterData.map((company, index) => (
                    <div className="hiderx" style={{animationDelay:`${0.05*index}s`}} ><Tooltip title={company.name} key={index} placement="top" color="var(--green)">
                        
                        <Card
                            hoverable
                            className="company-card"
                            cover={
                                <img
                                    alt={company.name}
                                    src={`../../assets/recruiters/${company.key}.webp`}
                                    className="company-logo"
                                />
                            }
                        />
                    </Tooltip></div>
                ))}
            </div>
        </section>
    );
}