import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import NumStats from "../../components/NumStats/NumStats";
import Work from "../../components/Our_Works/Work";
const Homepage = () => {
    return (
        <>
            <Hero />
            <About />
            <Work />
            <NumStats />
        </>
    );
};

export default Homepage;
