import Hero from "../../components/Hero/Hero";
import KeyHighlights from "../../components/Placements/KeyHighlights";
import SalaryStats from "../../components/Placements/SalaryStats";
import RecruitersCmp from "../../components/Placements/RecruitersCmp";
export default function Placements(){
    return(
        <>
        <Hero mainTitle={["Placement", "Stats"]} topLeftText="Our consistent placement record stands as a testament to the excellence of our department and the calibre of our students." bottomRightText="Always imbibing top skills recruiters look for in present day engineering roles." />
        <KeyHighlights/>
        <SalaryStats/>
        <RecruitersCmp/>
        </>
    )
}
