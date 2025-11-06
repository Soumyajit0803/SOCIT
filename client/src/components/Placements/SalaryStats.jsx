import "./SalaryStats.css";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
const placementStats = [
    { label: "Upto 10 LPA", value: 50, color: "#FFCF50" },
    { label: "10-20 LPA", value: 29.7, color: "#97B067" },
    { label: "20-30 LPA", value: 15.6, color: "#437057" },
    { label: "30+ LPA", value: 4.7, color: "#2F5249" },
];

export default function SalaryStats() {
    const {innerWidth} = window;
    console.log(innerWidth);
    const position = innerWidth > 1000 ? {cx: 500, cy: 0} : {};
    
    return (
        <>
            <div className="TitleText_SS">Salary Stats</div>

            <div className="SalaryStats">
                <div className="SalaryText">
                    Over the years, our students have consistently demonstrated exceptional talent, securing prestigious
                    offers from leading organizations. The salary statistics from 2025 report alongside reflect the dedication, skill, and the
                    institute's commitment to nurturing excellence in every domain of technology and innovation.
                </div>
                <div className="salary-piechart">
                    <PieChart
                        series={[
                            {
                                arcLabel: (item) => `${item.label}`,
                                highlightScope: { fade: "global", highlight: "item" },
                                faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                                data: [...placementStats],
                                innerRadius: innerWidth > 1000 ? 120: 30,
                                outerRadius: innerWidth > 1000 ? 500 : innerWidth/2 - 50,
                                paddingAngle: 1,
                                cornerRadius: innerWidth > 1000 ? 20: 10,
                                startAngle: innerWidth > 1000 ? 180 : 0,
                                endAngle: innerWidth > 1000 ? 270 : 360,
                                ...position,
                                valueFormatter: (item) => `${item.value}%`
                            },
                        ]}
                        width={innerWidth >= 1000 ? 500 : innerWidth - 100}
                        height={innerWidth > 1000 ? 510 : innerWidth - 90}
                        hideLegend={true}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                              cursor: 'pointer',
                            },
                          }}
                    />
                </div>
            </div>
        </>
    );
}