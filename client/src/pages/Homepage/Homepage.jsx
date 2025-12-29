import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Academics from "../../components/Academics/Academics";
import NumStats from "../../components/NumStats/NumStats";
import Work from "../../components/Our_Works/Work";
const Homepage = () => {
    return (
        <>
            <Hero mainTitle={["Society of", "Information", "Technology"]} topLeftText="Welcome to the web corner of SOCIT - Society of Information Technology, IIEST Shibpur." bottomRightText="Top education, AI & cybersecurity research, industry ties, top labs, strong placements—empowering innovation." />
            <About />
            <Academics />
            <NumStats />
            {/* <Work /> */}
        </>
    );
};

export default Homepage;
