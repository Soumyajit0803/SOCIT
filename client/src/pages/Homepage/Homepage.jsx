import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Academics from "../../components/Academics/Academics";
import NumStats from "../../components/NumStats/NumStats";
import Work from "../../components/Our_Works/Work";
const Homepage = () => {
    return (
        <>
            <Hero />
            <About />
            <Academics />
            <NumStats />
            {/* <Work /> */}
        </>
    );
};

export default Homepage;
