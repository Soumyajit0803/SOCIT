import React from "react";
import HeroGallery from "../../components/Gallery/HeroGallery";
import GalleryGrid from "../../components/Gallery/GalleryGrid";

const Gallery = () => {
    const imgArr = [
        {imgClass:"cl1",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl2",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl3",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl4",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl5",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl6",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl7",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl8",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl9",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl10",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl11",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl12",imgSrc:"/assets/placeholder.png"},
        {imgClass:"cl13",imgSrc:"/assets/placeholder.png"}
    ]
    return (
        <>
            <HeroGallery/>
            <GalleryGrid imgArrObj={imgArr}/>
        </>
    );
};

export default Gallery;
