import React, { useState, useEffect } from "react";
import { sliderImg } from "../assets.js";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderImg.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <div className="relative w-full overflow-hidden shadow-lg">
      {/* Slider Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {sliderImg.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="
              w-full flex-shrink-0 object-cover
              h-[220px] 
              sm:h-[250px]
              md:h-[250px] 
              lg:h-[310px]
              xl:h-[430px] 
              2xl:h-[500px] 
            "
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 sm:left-6 md:left-8 lg:left-[32px] -translate-y-1/2 
        bg-black/40 hover:bg-black/70 text-white p-2 sm:p-2.5 md:p-3 rounded-full cursor-pointer"
      >
        <i className="ri-arrow-left-wide-fill text-base sm:text-lg md:text-xl"></i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 sm:right-6 md:right-8 lg:right-[20px] -translate-y-1/2 
        bg-black/40 hover:bg-black/70 text-white p-2 sm:p-2.5 md:p-3 rounded-full cursor-pointer"
      >
        <i className="ri-arrow-right-wide-line text-base sm:text-lg md:text-xl"></i>
      </button>
    </div>
  );
};

export default Slider;
