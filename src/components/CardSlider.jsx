import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({
  images,
  imgHeight = "370px",
  slidesToShow = 3,
  headingText,
  headingClass = "",
  lineClass = "",
  border = "",
  arrowleft = "",
  arrowright = "",
}) => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-2 sm:px-4">
      <h1
        className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center ${headingClass}`}
      >
        {headingText}
      </h1>
      <span
        className={`sm:w-20 rounded-full h-[2.5px] bg-white mb-6 ${lineClass}`}
        ></span>

      <div
        className={`relative w-full sm:w-[95%] md:w-[85%] lg:w-[92%] overflow-hidden rounded-2xl ${border}`}
      >
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, i) => (
            <div key={i} className="px-2">
              <img
                src={src}
                alt={`slide-${i}`}
                style={{ height: imgHeight }}
                className="w-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </Slider>

        <button
          onClick={prev}
          className={`absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-2.5 rounded-full hover:bg-black/60 ${arrowleft}`}
          aria-label="previous"
        >
          <i className="ri-arrow-left-wide-line text-base sm:text-lg"></i>
        </button>

        <button
          onClick={next}
          className={`absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-2.5 rounded-full hover:bg-black/60 ${arrowright}`}
          aria-label="next"
        >
          <i className="ri-arrow-right-wide-line text-base sm:text-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
