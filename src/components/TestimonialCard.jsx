import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ci1 from "../images/Client/c1.jpeg";
import ci2 from "../images/Client/c2.jpeg";
import ci3 from "../images/Client/c3.jpeg";
import ci4 from "../images/Client/c4.jpeg";
import ci5 from "../images/Client/c5.jpeg";
import ci6 from "../images/Client/c6.jpeg";

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "The TV commercial they created for us was a total game-changer",
      image: ci1,
      quote:
        "We already had a strong local presence, but after launching our TV ad with this agency, we saw a 40% increase in sales. Their creative vision and execution were spot on",
      btn: "More Info",
    },
    {
      name: "Our radio jingle became an instant hit with customers",
      image: ci2,
      quote:
        "The team crafted a catchy and memorable jingle that truly resonated with our audience. People still recognize our brand by the tune. Excellent work.",
      btn: "More Info",
    },
    {
      name: "Each campaign has taken visibility to the next level",
      image: ci3,
      quote:
        "From digital to television, their strategies consistently deliver results. We don't just see them as an agency they are our long-term creative partner.",
      btn: "More Info",
    },
    {
      name: "Always on time, with zero compromise on quality",
      image: ci4,
      quote:
        "Their production process is efficient and seamless. Every project is delivered before deadline, and the quality has always exceeded expectations.",
      btn: "More Info",
    },
    {
      name: "They helped us build a true brand Identity",
      image: ci5,
      quote:
        "More than just a logo and tagline, they gave our business a compelling story. That narrative has helped us connect with customers on a deeper level.",
      btn: "More Info",
    },
    {
      name: "Better results than big agencies and far more personalized",
      image: ci6,
      quote:
        "We had worked with larger agencies before, but this team's attention to detail and customized solutions were unmatched. Exceptional value and service.",
      btn: "More Info",
    },
  ];

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    dots: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-10 bg-yellow-400/50 px-2 sm:px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
        Testimonials
      </h1>
      <span className="w-21 sm:w-28 h-[2.5px] bg-white rounded-full mb-6 ml-30"></span>

      <div className=" w-full sm:w-[95%] md:w-[85%] lg:w-[92%] overflow-hidden rounded-2xl">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-2 sm:px-4">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center h-[420px] sm:h-[440px] cursor-pointer">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-full border-2 border-yellow-500 object-cover p-[2px] mb-4"
                />
                <h3 className="w-full max-w-[320px] text-base sm:text-lg font-semibold text-zinc-800">
                  {t.name}
                </h3>
                <p className="w-full max-w-[320px] text-sm sm:text-base text-zinc-700 italic">
                  “{t.quote}”
                </p>
                <button className="mt-4 px-6 py-2 text-sm bg-[#0a0c33] text-white rounded-sm font-normal hover:bg-[#0f1255] transition cursor-pointer">
                  {t.btn}
                </button>
              </div>
            </div>
          ))}
        </Slider>

        <button
          onClick={next}
          className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 bg-yellow-400/20 text-white p-2 sm:p-2.5 rounded-full hover:bg-yellow-300/50 cursor-pointer"
          aria-label="previous"
        >
          <i className="ri-arrow-right-wide-line text-base sm:text-lg"></i>
        </button>

        <button
          onClick={prev}
          className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 bg-yellow-400/20 text-white p-2 sm:p-2.5 rounded-full hover:bg-yellow-300/50 cursor-pointer"
          aria-label="next"
        >
          <i className="ri-arrow-left-wide-line text-base sm:text-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
