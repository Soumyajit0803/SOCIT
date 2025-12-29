import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./NumStats.css";

gsap.registerPlugin(ScrollTrigger);

const NumCard = ({ field, value }) => {
    // We added a 'data-val' attribute to help GSAP read the target number easily
    return (
        <div className="card">
            {/* We initialize text as "0+" to avoid a flash of the final number before animation */}
            <div className="num" data-val={value}>0+</div>
            <div className="field">{field}</div>
        </div>
    );
};

const NumStats = () => {
    const containerRef = useRef(null);

    const data = [
        { field: "Students placed", value: 60 },
        { field: "Total offers", value: 70 },
        { field: "Ongoing Projects", value: 60 },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%", // Starts when section is near bottom of screen
            }
        });

        // 1. Animate the Cards (Entrance)
        tl.from(".card", {
            y: 50,
            opacity: 0,
            rotateX: -45, // Adds a nice 3D tilt effect
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)", // Bounce effect
            transformOrigin: "top center"
        });

        // 2. Animate the Numbers (Counting up)
        // We select all .num elements and animate them individually
        gsap.utils.toArray(".num").forEach((el) => {
            const target = el.getAttribute("data-val"); // Read the value (e.g., "60")
            
            gsap.to(el, {
                innerText: target, // Animate the text property
                duration: 2,
                snap: { innerText: 1 }, // Snap to whole numbers (no decimals)
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                },
                // This function ensures the "+" stays appended during the count
                onUpdate: function () {
                    el.innerText = Math.ceil(this.targets()[0].innerText) + "+";
                }
            });
        });

    }, { scope: containerRef });

    return (
        <div className="num-stats" ref={containerRef}>
            {data.map((card, key) => {
                return (
                    <NumCard 
                        field={card.field} 
                        value={card.value} 
                        key={key} 
                    />
                );
            })}
        </div>
    );
};

export default NumStats;