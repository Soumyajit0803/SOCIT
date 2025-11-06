import React from "react";
import HeroGallery from "../../components/Gallery/HeroGallery";
import GalleryGrid from "../../components/Gallery/GalleryGrid";

const Gallery = () => {
    const imgArr = [
        {imgClass:"cl1",imgSrc:"public/assets/gallery/gallery-1.webp"},
        {imgClass:"cl2",imgSrc:"public/assets/gallery/gallery-3.webp"},
        {imgClass:"cl3",imgSrc:"public/assets/gallery/gallery-13.webp"},
        {imgClass:"cl4",imgSrc:"public/assets/gallery/gallery-4.webp"},
        {imgClass:"cl5",imgSrc:"public/assets/gallery/gallery-5.webp"},
        {imgClass:"cl6",imgSrc:"public/assets/gallery/gallery-6.webp"},
        {imgClass:"cl7",imgSrc:"public/assets/gallery/gallery-7.webp"},
        {imgClass:"cl8",imgSrc:"public/assets/gallery/gallery-8.webp"},
        {imgClass:"cl9",imgSrc:"public/assets/gallery/gallery-9.webp"},
        {imgClass:"cl10",imgSrc:"public/assets/gallery/gallery-10.webp"},
        {imgClass:"cl11",imgSrc:"public/assets/gallery/gallery-11.webp"},
        {imgClass:"cl12",imgSrc:"public/assets/gallery/gallery-12.webp"},
        {imgClass:"cl13",imgSrc:"public/assets/gallery/gallery-2.webp"}
    ]
    return (
        <>
            <HeroGallery/>
            <GalleryGrid imgArrObj={imgArr}/>
        </>
    );
};

export default Gallery;
