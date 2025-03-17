import React from "react";
import "./NumStats.css"

const NumCard = ({ field, value }) => {
    return (
        <div className="card">
            <div className="num">{value}+</div>
            <div className="field">{field}</div>
        </div>
    );
};

const NumStats = () => {
    const data = [
        { field: "Ongoing Projects", value: 400 },
        { field: "Ongoing Projects", value: 400 },
        { field: "Ongoing Projects", value: 400 },
    ];
    return (
        <div className="num-stats">
            {data.map((card, key) => {
                return (<NumCard field={card.field} value={card.value} key={key}/>)
            })}
        </div>
    );
};

export default NumStats;
