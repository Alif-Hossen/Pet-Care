import React, { useEffect, useState } from 'react';
import cozyDog from '../../assets/h111.jpg'
import cozyCat from '../../assets/two.png'

const images = [
    cozyDog,
    cozyCat,
    // ...অন্যান্য ছবি
];

const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);
        return () => clearInterval(slideInterval);
    }, []);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };


    return (
        <div className="relative w-full max-w-[1350px] mx-auto overflow-hidden shadow-lg rounded-xl">
            {/* স্লাইডার ছবি */}
            <div className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                       ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>

            {/* নেভিগেশন Arrows (ডান ও বাম বাটন) */}
            {/* 💡 এখানে আগের কোডটি সামান্য পরিবর্তন করা হয়েছে */}
            <button
                onClick={goToPrevSlide}
                className="slider-arrow left" // index.css থেকে ক্লাস
                aria-label="Previous Slide"
            >
                &#10094; {/* বাম arrow চিহ্ন */}
            </button>
            <button
                onClick={goToNextSlide}
                className="slider-arrow right" // index.css থেকে ক্লাস
                aria-label="Next Slide"
            >
                &#10095; {/* ডান arrow চিহ্ন */}
            </button>

            {/* স্লাইড ইন্ডিকেটর (নিচের ডটগুলো) - এটি আগের মতোই থাকবে */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`block w-3 h-3 rounded-full bg-white transition-all duration-300
                       ${index === currentSlide ? 'bg-opacity-100 scale-125' : 'bg-opacity-50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Banner;