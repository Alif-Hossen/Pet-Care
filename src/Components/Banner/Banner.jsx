import React, { useEffect, useState } from "react";
import cozyDog from "../../assets/sty1.webp";
import cozyCat from "../../assets/two.png";
import cozyCat2 from '../../assets/img.avif'


const images = [cozyDog, cozyCat, cozyCat2];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full flex justify-center mt-6"> 

      {/* Slider Container - Width বাড়ানো হলো: w-[80%] -> w-[90%] */}
      <div className="relative w-[90%] rounded-2xl overflow-hidden shadow-xl bg-white">

        {/* Image Display Area - Height বাড়ানো হলো: 
            260px -> 300px, 340px -> 400px, 420px -> 500px, 450px -> 550px */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] bg-white flex items-center justify-center">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Pet Care Image"
              className={`absolute max-h-full max-w-full object-contain transition-opacity duration-700 
              ${index === current ? "opacity-100" : "opacity-0"}`}
              style={{
                backgroundColor: "white" 
              }}
            />
          ))}

        </div>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full opacity-70 hover:opacity-100 transition-opacity" 
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full opacity-70 hover:opacity-100 transition-opacity" 
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all 
                ${current === index ? "bg-indigo-600 scale-125" : "bg-gray-400"}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;