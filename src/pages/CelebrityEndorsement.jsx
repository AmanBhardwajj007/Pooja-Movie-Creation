import React from "react";
import bannerImg from "../images/celebrity-endorsement/CEbg.jpg";
import ic1 from "../images/celebrity-endorsement/1.jpeg";
import ic2 from "../images/celebrity-endorsement/2.jpeg";
import ic3 from "../images/celebrity-endorsement/3.jpeg";
import ic4 from "../images/celebrity-endorsement/4.jpeg";
import ic5 from "../images/celebrity-endorsement/5.jpeg";
import ic6 from "../images/celebrity-endorsement/6.jpeg";
import ic7 from "../images/celebrity-endorsement/7.jpeg";
import ic8 from "../images/celebrity-endorsement/8.jpeg";
import ic9 from "../images/celebrity-endorsement/9.jpeg";
import ibc1 from "../images/celebrity-endorsement/brand-collabs/1.jpeg";
import ibc2 from "../images/celebrity-endorsement/brand-collabs/2.jpeg";
import ibc3 from "../images/celebrity-endorsement/brand-collabs/3.jpeg";
import ibc4 from "../images/celebrity-endorsement/brand-collabs/4.jpeg";
import ibc5 from "../images/celebrity-endorsement/brand-collabs/5.jpeg";
import ibc6 from "../images/celebrity-endorsement/brand-collabs/6.jpeg";
import celebrityImg from '../images/celebrity-endorsement/celebrity-img.jpeg'

const CelebrityEndorsement = () => {
  const collabImages = [ic1, ic2, ic3, ic4, ic5, ic6, ic7, ic8, ic9];

  const brandCollabImages = [ibc1, ibc2, ibc3, ibc4, ibc5, ibc6];

  return (
    <div className="w-full h-auto">
      {/* Banner */}
      <div className="relative w-full h-[85vh] flex justify-center items-center">
        <h1 className="absolute z-20 text-white pageHeading2">
          Celebrity Endorsement
        </h1>
        <img
          className="w-full h-full object-center object-cover"
          src={bannerImg}
          alt="About Banner"
        />
        <div className="absolute z-10 inset-0 bg-black/50"></div>
      </div>

      {/* Why Celebrity Endorsement */}
      <section className="w-full h-auto bg-zinc-800 flex justify-evenly px-10 py-13">
        <div className="w-[36%] overflow-hidden pt-4">
          <img
            className="w-full h-auto bg-center bg-cover rounded-lg"
            src={celebrityImg}
            alt="Celebrity Endorsement"
          />
        </div>

        <div className="w-[68%] md:w-[50%] min-h-[80vh] p-4 flex flex-col justify-start">
          <h1 className="text-2xl text-white font-semibold mb-4 leading-7">
            Why CELEBRITY ENDORSEMENT requires for any BRAND ADVERTISING ?
          </h1>

          <h2 className="text-lg font-semibold mt-2 text-[#e4d00a]">
            1. What is a celebrity endorsement?
          </h2>
          <p className="text-white text-sm leading-5">
            Celebrity endorsement, also known as celebrity branding or celebrity
            advertising, is a marketing strategy that uses a celebrity's fame
            and image to promote a brand or product. Other use cases include
            not-for-profit organizations that leverage a celebrity's fame to
            raise awareness or funding around a cause, or event marketers
            leveraging a celebrity's fame and popularity to create buzz and
            prestige around their virtual or hybrid event.
          </p>
          <p className="text-white mt-1 text-sm leading-5">
            Your celebrity of choice doesn't need to be a movie star. Brands
            have produced excellent branding campaigns with music artists,
            sports personalities, social media influencers, or even fictitious
            characters like cartoons. The two basic requirements that will
            define your choice of celebrity are image(does the
            celebrity represent your values) and following(how
            large an audience will you reach via this celebrity).
          </p>

          <h2 className="text-lg font-semibold mt-2 text-[#e4d00a]">
            2. Why use celebrities for advertising?
          </h2>
          <p className="text-white text-sm leading-5">
            Brands partner with celebrities for a number of reasons. According to Forbes contributor Steve Olenski, celebrity endorsement helps increase sales in the short term and brand awareness in the long term. Celebrity marketing is also very effective to mark a major change for a brand, like the introduction of a new product, market expansion, or brand repositioning. Nike traditionally sponsored mainly tennis and track athletes. When they decided to expand their market, they partnered with NBA star Michael Jordan to create a new product line and release a series of ads that yielded tremendous success.
          </p>
          <p className="text-white mt-1 text-sm leading-5">
           Celebrity branding can also be a powerful strategy to differentiate yourself from your competitors and get the edge in a highly competitive market. For Kaltura, the David Duchovny campaign marked a big change in the way we tell our brand story. We shifted our main focus from lead generation campaigns and smart acquisition to include a 360-degree brand awareness campaign.
          </p>
        </div>
      </section>

      <section className="rounded-xl w-[99.9%] py-10 px-4">
        <h2 className="text-3xl font-bold my-6 pl-5 ml-8 border-l-4 border-[#e4d00a] text-white">
          Collabs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {collabImages.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl border-2 border-transparent hover:border-[#e4d00a] transition-all duration-300"
            >
              <img
                src={img}
                alt={`Collab ${index + 1}`}
                className="w-full h-auto max-h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Optional overlay text */}
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Collab {index + 1}
              </div> */}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl w-[97%] m-5 bg-zinc-800/90 py-10 px-4"
      style={{ boxShadow: "0 0 15px 2.5px rgba(218, 198, 21, 0.5)" }}>
        <h2 className="text-3xl font-bold mb-6 pl-5 ml-2 border-l-4 border-[#e4d00a] text-white">
          Brand Collabs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {brandCollabImages.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl border-2 border-transparent hover:border-[#e4d00a] transition-all duration-300"
            >
              <img
                src={img}
                alt={`Collab ${index + 1}`}
                className="w-full h-auto max-h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CelebrityEndorsement;
