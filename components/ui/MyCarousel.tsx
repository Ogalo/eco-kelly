'use client'
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgUrl: '/assets/img-1.jpg', alt:'img 1'},
  { imgUrl: '/assets/img-2.jpg', alt:'img 2'},
  { imgUrl: '/assets/img-3.jpg', alt:'img 3'},
  { imgUrl: '/assets/img-4.jpg', alt:'img 4'},
  { imgUrl: '/assets/img-5.jpg', alt:'img 5'},
  { imgUrl: '/assets/img-6.jpg', alt:'img 6'},
 
]

const MyCarousel = () => {
  return (
    <div className='hero-carousel'>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image)=>(
          <Image
            key={image.alt}
            src={image.imgUrl}
            alt={image.alt}
            width={450}
            height={450}
            className="object-contain"
          />
        ))}

      </Carousel>


    </div>
  );
};

export default MyCarousel;
