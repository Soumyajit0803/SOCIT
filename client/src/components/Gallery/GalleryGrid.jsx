import React, { useLayoutEffect, useRef } from "react";
import { Image, Carousel } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./GalleryGrid.css";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryGrid({ imgArrObj }) {
    const compRef = useRef(null);

    const txtGallery =
        "Welcome to our Gallery page. This section showcases photographs highlighting the essence of our college and department — from academic events and technical fests to cultural celebrations and memorable milestones. Each picture reflects our commitment to excellence, collaboration, and growth.";

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const images = gsap.utils.toArray(".img");

            images.forEach((img) => {
                // 1. Logic to determine a random side
                // 0=Left, 1=Right, 2=Top, 3=Bottom
                const randomSide = Math.floor(Math.random() * 4);
                
                let startX = 0;
                let startY = 0;

                // Adjust the '100' value to control how far away they slide from
                switch(randomSide) {
                    case 0: startX = -100; break; // Slide from Left
                    case 1: startX = 100; break;  // Slide from Right
                    case 2: startY = -100; break; // Slide from Top
                    case 3: startY = 100; break;  // Slide from Bottom
                    default: startX = 100;
                }

                // 2. Animate from that random side to 0 (original position)
                gsap.fromTo(
                    img,
                    { 
                        opacity: 0, 
                        x: startX, 
                        y: startY 
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 1.2,
                        ease: "power3.out", // Smooth slide-in
                        scrollTrigger: {
                            trigger: img,
                            start: "top 85%", 
                        },
                    }
                );
            });
        }, compRef);

        return () => ctx.revert();
    }, [imgArrObj]);

    return (
        <div ref={compRef}>
            <div className="textGalleryTop">
                <blockquote className="txt_gallery_summary">{txtGallery}</blockquote>
            </div>

            {/* The Grid container remains untouched by GSAP */}
            <div>
                <Image.PreviewGroup>
                    <div className="container">
                        {imgArrObj.map((a, index) => {
                            return (
                                <div
                                    key={index}
                                    // GSAP targets this class '.img'
                                    className={`img ${a.imgClass}`}
                                    style={{
                                        backgroundImage: `url(${a.imgSrc})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <Image
                                        src={a.imgSrc}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </Image.PreviewGroup>
            </div>

            <div className="mobile_carousel">
                <Image.PreviewGroup>
                    <Carousel arrows={true} infinite={false}>
                        <div>
                            <div className="container_mobile">
                                {imgArrObj.slice(0, 6).map((a, index) => {
                                    return (
                                        <div
                                            key={`mob1-${index}`}
                                            className={`img mob ${a.imgClass}`}
                                            style={{
                                                backgroundImage: `url(${a.imgSrc})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        >
                                            <Image
                                                src={a.imgSrc}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <div className="container_mobile">
                                {imgArrObj.slice(6, 12).map((a, index) => {
                                    return (
                                        <div
                                            key={`mob2-${index}`}
                                            className={`img mob ${a.imgClass}`}
                                            style={{
                                                backgroundImage: `url(${a.imgSrc})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        >
                                            <Image
                                                src={a.imgSrc}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Carousel>
                </Image.PreviewGroup>
            </div>

            <div>
                <div className="text_div">
                    <blockquote
                        style={{
                            fontStyle: "italic",
                            paddingLeft: "1rem",
                            paddingRight: "1rem",
                            margin: "1rem 0",
                        }}
                        className="text_div_init"
                    >
                        <p>A good snap keeps a moment from running away</p>
                        {true && <cite style={{ display: "block" }}>— {"Eudora Welty"}</cite>}
                    </blockquote>
                </div>
            </div>
        </div>
    );
}