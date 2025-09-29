import React from "react";
import vid1 from "../video/ShowReel.mp4";

const ShowReel = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-5 px-2 sm:px-4">
      <div className="w-full h-auto text-center text-white mt-10">
        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium italic mb-2 underline underline-offset-4">
          We don't create ADS , we create memories that last forever.
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold">SHOW REEL</h1>
      </div>

      <div className="w-full sm:w-[95%] h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[95vh] border border-[#e4d00a] p-[7px] rounded-lg">
        <video
          src={vid1}
          loop
          muted
          playsInline
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          className="w-full h-full object-cover rounded-lg"
        ></video>
      </div>

      <div className="w-full h-auto text-white flex flex-col justify-center items-center px-2 text-center">
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-semibold"
          style={{ textShadow: "1px 1.2px 3px #fbbf24" }}
        >
          Visibility is the first step to credibility - put your brand on TV
        </h1>
        <i
          className="ri-arrow-down-double-line arrowAnimate text-4xl sm:text-5xl -mt-1 mb-2"
          style={{
            textShadow:
              "0 0 10px #fbbf24, 0 0 20px #fbbf24, 0 0 30px #fbbf24",
          }}
        ></i>
      </div>
    </div>
  );
};

export default ShowReel;
