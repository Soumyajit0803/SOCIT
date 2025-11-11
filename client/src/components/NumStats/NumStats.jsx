import React from "react";
import "./NumStats.css"

const NumCard = ({ field, value, rank }) => {
    console.log(rank);
    return (
        <div className="card">
            <div className="num left-to-right" style={{animationDelay: `${rank*0.1}s`}}>{value}+</div>
            <div className="field right-to-left" style={{animationDelay: `${rank*0.1}s`}}>{field}</div>
        </div>
    );
};

const NumStats = () => {
    const data = [
        { field: "Students placed", value: 60 },
        { field: "Total offers", value: 70 },
        { field: "Ongoing Projects", value: 60 },
    ];
    var r = 1;
    return (
        <div className="num-stats hiderx">
            {data.map((card, key) => {
                return (<NumCard field={card.field} value={card.value} key={key} rank = {r++} />)
            })}
        </div>
    );
};

export default NumStats;
