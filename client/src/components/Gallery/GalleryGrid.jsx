import React from "react";
import {Image} from "antd";
import {Carousel} from "antd";

import './GalleryGrid.css';

export default function GalleryGrid({imgArrObj}){
    //a -> {imgSrc,imgClass}
    const txtGallery = "Welcome to our Gallery page. This section showcases photographs highlighting the essence of our college and department — from academic events and technical fests to cultural celebrations and memorable milestones. Each picture reflects our commitment to excellence, collaboration, and growth.";
    return (
    <>
    <div className="textGalleryTop">
        <blockquote className="txt_gallery_summary">{txtGallery}</blockquote>
    </div>
    
    <div>
        <Image.PreviewGroup>
            <div className="container">
                {imgArrObj.map((a)=>{
                    return <div className={`img ${a.imgClass}`} style={{backgroundImage:`url(${a.imgSrc})`,backgroundSize: "cover",backgroundPosition: "center",}}><Image src={a.imgSrc} style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
                })}
            </div>
        </Image.PreviewGroup>
    </div>
    <div className="mobile_carousel">
        <Image.PreviewGroup>
            <Carousel arrows={true} infinite={false}>
                <div>
                    <div className="container_mobile">
                        {imgArrObj.slice(0,6).map((a)=>{
                            return <div className={`img mob ${a.imgClass}`} style={{backgroundImage:`url(${a.imgSrc})`,backgroundSize: "cover",backgroundPosition: "center",}}><Image src={a.imgSrc} style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
                        })}
                    </div>
                </div>
                <div>
                    <div className="container_mobile">
                        {imgArrObj.slice(6,12).map((a)=>{
                            return <div className={`img mob ${a.imgClass}`} style={{backgroundImage:`url(${a.imgSrc})`,backgroundSize: "cover",backgroundPosition: "center",}}><Image src={a.imgSrc} style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
                        })}
                    </div>
                </div>
            </Carousel>
        </Image.PreviewGroup>
    </div>
    <div>
        <div className="text_div">
            <blockquote style={{ 
            fontStyle: "italic", 
            paddingLeft: "1rem", 
            paddingRight: "1rem",
            margin: "1rem 0",
            }} className="text_div_init">
                <p>A good snap keeps a moment from running away</p>    
                {true && <cite style={{ display: "block" }}>— {"Eudora Welty"}</cite>}

            </blockquote>

        </div>
    </div>
    </>
);
}