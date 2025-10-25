
import React, { useEffect, useState } from 'react';
import cozyDog from '../../assets/sty1.webp';
import cozyCat from '../../assets/two.png';
// import cozyDog2 from '../../assets/doggy.webp';

const images = [cozyDog, cozyCat];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 4000);
        return () => clearInterval(slideInterval);
    }, []);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-[1100px] mx-auto overflow-hidden rounded-xl shadow-lg bg-gray-100">

            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>

            <button
                onClick={goToPrevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 backdrop-blur-md text-xl font-bold px-3 py-1 rounded-full shadow-md transition"
            >
                &#10094;
            </button>

            <button
                onClick={goToNextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white/80 backdrop-blur-md text-xl font-bold px-3 py-1 rounded-full shadow-md transition"
            >
                &#10095;
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Banner;
