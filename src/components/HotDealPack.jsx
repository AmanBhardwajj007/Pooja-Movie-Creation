import React from "react";
import img1 from "../images/HDP/bhabhi-ji.jpeg";
import img2 from "../images/HDP/kapil.jpeg";
import img3 from "../images/HDP/kbc.jpeg";
import img4 from "../images/HDP/tarak-mehta.jpeg";

const HotDealPack = () => {
  const dealPackagesCard = [
    {
      id: 1,
      image: img1,
      title: "Bhabhi Ji Ghar Par Hain",
      btn: "More Info",
    },
    {
      id: 2,
      image: img2,
      title: "Kapil Sharma Show",
      btn: "More Info",
    },
    {
      id: 3,
      image: img3,
      title: "KBC",
      btn: "More Info",
    },
    {
      id: 4,
      image: img4,
      title: "Tarak Mehta Ka Ooltah Chashmah",
      btn: "More Info",
    },
  ];

  return (
    <div className="w-full h-auto bg-zinc-800 py-10 px-2 sm:px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mt-4 text-white">
        Hot Deal Packages
      </h1>

      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7 place-items-center p-2 sm:p-4">
        {dealPackagesCard.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-[300px] overflow-hidden flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[300px] sm:h-[330px] md:h-[350px] object-cover rounded-xl"
            />

            <div className="p-4 flex flex-col items-center">
              <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#e4d00a] text-center">
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
  );
};

export default HotDealPack;
