'use client'

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PhotoCarousel = ({ images }) => {
    return (
        <div className="carousel-container">

            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                interval={3000} // Change the interval as needed (in milliseconds)
                stopOnHover={true}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                showThumbs={false}
                width="400px" // Set the width
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <Image src={image} alt={`Slide ${index}`} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
                    </div>
                ))}
            </Carousel>
        </div>

    );
};

export default PhotoCarousel;
