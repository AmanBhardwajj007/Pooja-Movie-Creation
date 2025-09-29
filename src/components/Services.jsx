import React from "react";
import i1 from "../images/services/1.jpeg";
import i11 from "../images/services/1_(1).jpeg";
import i2 from "../images/services/2.jpeg";
import i22 from "../images/services/2_(2).jpg";
import i3 from "../images/services/3.jpeg";
import i33 from "../images/services/3_(3).jpg";
import i4 from "../images/services/4.jpeg";
import i44 from "../images/services/4_(4).jpg";
import i5 from "../images/services/5.jpeg";
import i55 from "../images/services/5_(5).jpg";
import adsB from "../images/services/advertising-banner.jpeg";
import img1 from "../images/Advertising/1.jpeg";
import img2 from "../images/Advertising/2.jpeg";
import img3 from "../images/Advertising/3.jpeg";
import img4 from "../images/Advertising/4.jpeg";
import img5 from "../images/Advertising/5.jpeg";
import img6 from "../images/Advertising/6.jpeg";
import img7 from "../images/Advertising/7.jpeg";

const Services = () => {
  const products = [
    { id: 1, image: i1, hoverImage: i11, title: "TV AD AGENCY", btn: "More Info" },
    { id: 2, image: i2, hoverImage: i22, title: "RADIO AD AGENCY", btn: "More Info" },
    { id: 3, image: i3, hoverImage: i33, title: "PVR CINEMAS", btn: "More Info" },
    { id: 4, image: i4, hoverImage: i44, title: "METRO ADVERTISING", btn: "More Info" },
    { id: 5, image: i5, hoverImage: i55, title: "AIRPORT ADVERTISING", btn: "More Info" },
  ];

  const adsProducts = [
    { id: 1, image: img1, title: "IPL CRICKET GROUND ADVERTISING", btn: "More Info" },
    { id: 2, image: img2, title: "IPL SILVER SCREENS ADVERTISING", btn: "More Info" },
    { id: 3, image: img3, title: "IPL TEAM ADVERTISING", btn: "More Info" },
    { id: 4, image: img4, title: "IPL TV SPOTS ADVERTISING", btn: "More Info" },
    { id: 5, image: img5, title: "IPL OTT ADVERTISING", btn: "More Info" },
    { id: 6, image: img6, title: "IPL CRICKET BATS BRANDING AND ADVERTISING", btn: "More Info" },
    { id: 7, image: img7, title: "IPL PLAYERS T SHIRTS BRANDING", btn: "More Info" },
  ];

  return (
    <div className="w-full h-auto bg-[#232526] px-2 sm:px-4">
      <div className="text-center p-4 pt-10">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
          style={{ textShadow: "1px 1.2px 1px #fbbf24, 1px 1.2px 1.5px #fbbf24" }}
        >
          OUR CORE BUSINESS IS SIMPLE
        </h1>
        <p className="text-base sm:text-lg mt-2.5 text-[#e4d00a]">
          To make powerful television branding accessible, effective, and affordable for every business
        </p>
      </div>

      <div className="w-full h-auto p-4 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mt-4 text-white">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-7">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white/5 rounded-xl overflow-hidden shadow-md transition hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2),0_0_16px_4px_rgba(255,215,0,0.3)] flex flex-col items-center text-center"
            >
              <div className="relative w-full h-[200px] sm:h-[220px] overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover rounded-t-xl transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                />
                <img
                  src={product.hoverImage}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-xl opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#e4d00a]">
                  {product.title}
                </h3>
                <button className="mt-4 px-6 py-2 text-sm bg-[#0a0c33] text-white rounded-sm font-normal hover:bg-[#0f1255] transition cursor-pointer">
                  {product.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 bg-zinc-800 my-5 rounded-lg" style={{
        boxShadow: '0 0 20px 4px rgba(218, 198, 21, 0.5)'}}>
        <div className="w-full h-auto p-1  border border-zinc-600 border-dashed">
          <div className="p-2">
            <img
              src={adsB}
              alt="Advertising Banner"
              className="w-full h-auto bg-center bg-cover rounded-md"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 my-7 p-2 sm:p-4">
            {adsProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white/2 rounded-xl overflow-hidden shadow-md transition flex flex-col items-center text-center w-full sm:w-[280px]"
              >
                <div className="w-full h-[200px] sm:h-[220px] overflow-hidden">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#e4d00a]">
                    {product.title}
                  </h3>
                  <button className="mt-4 px-6 py-2 text-sm bg-[#0a0c33] text-white rounded-sm font-normal hover:bg-[#0f1255] transition cursor-pointer">
                    {product.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
