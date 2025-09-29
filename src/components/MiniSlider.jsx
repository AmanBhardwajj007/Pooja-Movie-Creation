import React, { useState } from "react";

const images = import.meta.glob("../images/TVchannels/*.{png,jpg,jpeg,svg}", {
  eager: true,
  as: "url",
});
const channelImages = Object.keys(images).map((key) => images[key]);

const images2 = import.meta.glob(
  "../images/TVnewschannels/*.{png,jpg,jpeg,svg}",
  { eager: true, as: "url" }
);
const channelImages2 = Object.keys(images2).map((key) => images2[key]);

const MiniSlider = () => {
  const [hoverSpeed, setHoverSpeed] = useState(false);
  const [hoverSpeedTwo, setHoverSpeedTwo] = useState(false);

  return (
    <div className="w-full h-auto bg-[#232526] px-2 sm:px-4">
      {/* TV CHANNELS */}
      <div className="w-full flex flex-col items-center justify-center py-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-5 text-center">
          TOP PREMIUM TV CHANNELS
        </h1>
        <div
          className="overflow-hidden w-full h-[140px] sm:h-[160px] md:h-[170px] pt-4"
          onMouseEnter={() => setHoverSpeed(true)}
          onMouseLeave={() => setHoverSpeed(false)}
        >
          <div
            className={`flex animate-slider gap-6 sm:gap-8 ${
              hoverSpeed ? "animation-slow" : ""
            }`}
          >
            {[...channelImages, ...channelImages].map((src, index) => (
              <div
                key={index}
                className="bg-white h-[110px] sm:h-[130px] w-[200px] sm:w-[240px] flex-shrink-0 border border-zinc-600 rounded-md overflow-hidden hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={`channel-${index}`}
                  className="h-full w-full object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEWS CHANNELS */}
      <div className="w-full flex flex-col items-center justify-center py-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-5 text-center">
          TOP TV NEWS CHANNELS
        </h1>
        <div
          className="overflow-hidden w-full h-[140px] sm:h-[160px] md:h-[170px] pt-4"
          onMouseEnter={() => setHoverSpeedTwo(true)}
          onMouseLeave={() => setHoverSpeedTwo(false)}
        >
          <div
            className={`flex animate-slider-reverse gap-6 sm:gap-8 ${
              hoverSpeedTwo ? "animation-slow" : ""
            }`}
          >
            {[...channelImages2, ...channelImages2].map((src, index) => (
              <div
                key={index}
                className="bg-white h-[110px] sm:h-[130px] w-[200px] sm:w-[240px] flex-shrink-0 border border-zinc-600 rounded-md overflow-hidden hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={`news-${index}`}
                  className="h-full w-full object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slider {
          display: flex;
          animation: scroll 20s linear infinite;
        }
        .animate-slider-reverse {
          display: flex;
          animation: scrollReverse 20s linear infinite;
        }
        .animation-slow {
          animation-duration: 40s !important;
        }
      `}</style>
    </div>
  );
};

export default MiniSlider;
