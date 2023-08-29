// src/components/PhotoCarousel.js

import React from 'react';
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
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>

    );
};

export default PhotoCarousel;
