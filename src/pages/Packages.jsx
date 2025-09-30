import React from "react";
import bannerHotDealImg from '../images/hotDeal.png'
import bannerHotDealImg2 from '../images/hotDeal2.png'

const plans = [
  {
    name: "Gold",
    subHeading:
      "Our most popular solution provides everything you need to get started.",
    price: "$1",
    original: "$5",
    duration: "Per Month",
    features: [
      "4 Weeks Branding",
      "Daily Exposures",
      "Exposures During 10 Sec",
    ],
    btn: "Select",
    bg: "bg-zinc-700/30",
  },
  {
    name: "Diamond",
    subHeading:
      "Power, control and flexibility. Run a server the way you want.",
    price: "$100",
    original: "$500",
    duration: "Per Month",
    features: [
      "1-Year Branding",
      "Every Mon-Fri",
      "Prime Branding on Sony TV, SAB TV, Aaj Tak",
    ],
    btn: "Select",
    bg: "bg-zinc-700/30",
  },
  {
    name: "Platinum",
    subHeading:
      "Dedicated hosting provides improved security and complete costumized.",
    price: "$1000",
    original: "$5000",
    duration: "Per Month",
    features: [
      "2-Years Branding",
      "Per Exposure Duration 10 Sec",
      "Prime Branding on Sony TV, SAB TV, Aaj Tak, Zee Business, Kapil Sharma Show",
    ],
    btn: "Select",
    bg: "bg-zinc-700/30",
  },
];

const PackagesCards = () => {
  return (
    <div className="w-full bg-[#232526]">
      <div className="w-[100%] h-[100vh] ">
        <img
          className="w-full h-[100vh] object-center object-cover"
          src={bannerHotDealImg2}
          alt="About Banner"
        />
      </div>

      <div className="text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-4 sm:p-6 ${plan.bg} flex flex-col`}
            >
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">
                  {plan.name} Plan
                </h2>
                <p className="text-sm sm:text-md mb-2 leading-5">
                  {plan.subHeading}
                </p>
                <p className="text-3xl sm:text-4xl font-extrabold mb-1">
                  {plan.price}{" "}
                  <span className="text-xs sm:text-sm font-medium">
                    ({plan.duration})
                  </span>
                </p>
                <p className="line-through text-xs sm:text-sm text-gray-200 mb-4">
                  Normal: {plan.original}/Month
                </p>
                <p className="text-md sm:text-lg font-semibold mb-2">
                  Features
                </p>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">
                        <i className="ri-drag-move-fill"></i>
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-6 sm:mt-10 px-4 sm:px-6 py-2 text-xs sm:text-sm bg-transparent border border-white text-white rounded-sm font-normal hover:bg-[#0a0c33] hover:border-transparent transition ease-in-out cursor-pointer">
                {plan.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesCards;
