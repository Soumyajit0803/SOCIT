import React from "react";
import Hero from "../../components/Hero/Hero";
import OurFaculty from "../../components/Faculty/OurFaculty";
import Project from "../../components/Faculty/Project";
const Faculty = () => {
    return (
        <>
            <Hero mainTitle={["Faculty", "Profile"]} topLeftText="Meet our dedicated faculty members who are passionate about teaching and research." bottomRightText="Our faculty members are experts in their fields, bringing both academic excellence and industry experience to the classroom." />
            <OurFaculty/>
            <Project/>
        </>
    );
};

export default Faculty;
