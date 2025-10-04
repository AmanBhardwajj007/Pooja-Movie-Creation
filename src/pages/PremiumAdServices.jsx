import React from "react";
import bgImg from '../images/services/serBanBG2.jpg';
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

const PremiumAdsServices = () => {
  const servicesCards = [
    {
      id: 1,
      image: i1,
      hoverImage: i11,
      title: "TV AD AGENCY",
      para: "Advertising Agency Services, Ad Film Production House, Corporate Video Production, Brand Promotion, Production House, Advertising Agency.",
      btn: "More Info",
    },
    {
      id: 2,
      image: i2,
      hoverImage: i22,
      title: "RADIO AD AGENCY",
      para: "Tiket Counters Brandings , Movie Theathre Brandings , Movie Theatre Screen Advt Branding.",
      btn: "More Info",
    },
    {
      id: 3,
      image: i3,
      hoverImage: i33,
      title: "PVR CINEMAS",
      para: "Tiket Counters Brandings , Movie Theathre Brandings , Movie Theatre Screen Advt Branding.",
      btn: "More Info",
    },
    {
      id: 4,
      image: i4,
      hoverImage: i44,
      title: "METRO ADVERTISING",
      para: "Metro Rapping Outer Branding , Metro Handles , Metro Panels Brandings.",
      btn: "More Info",
    },
    {
      id: 5,
      image: i5,
      hoverImage: i55,
      title: "AIRPORT ADVERTISING",
      para: "Display Screens Brandings , Trolleys Brandings , Luggage Display Brandings , Security Check Brandings, Security Check Tray Branding.",
      btn: "More Info",
    },
  ];

  return (
    <div className="w-full bg-[#232526]">
      <div className="relative flex justify-center items-center">
        <h1 className="absolute z-20 text-white pageHeading">Services</h1>
        <img
          className="w-full h-[100vh] bg-center bg-cover"
          src={bgImg}
          alt="About Banner"
        />
        <div className="absolute z-10 inset-0 bg-black/40"></div>
      </div>

      {/* Card Section */}
      <div className="w-full h-auto p-4 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mt-4 text-white">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-7">
          {servicesCards.map((product) => (
            <div
              key={product.id}
              className="group bg-white/5 rounded-xl overflow-hidden flex flex-col items-center text-center"
              style={{ boxShadow: "0 0 10px 1.5px rgba(218, 198, 21, 0.5)" }}
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
                <div className="h-35">
                  <h3 className="text-[17.5px] sm:text-[16px] font-semibold text-[#e4d00a] mb-1">
                    {product.title}
                  </h3>
                  <p className="text-[12px] sm:text-[14px] text-[#c0ad00]">
                    {product.para}
                  </p>
                </div>
                <button className="w-full mt-4 px-6 py-2 text-sm bg-[#0a0c33] text-white rounded-sm font-normal hover:bg-[#0f1255] transition cursor-pointer">
                  {product.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumAdsServices;
