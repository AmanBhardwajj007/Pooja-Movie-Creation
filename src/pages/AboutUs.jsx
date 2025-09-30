import React from "react";
import bgImg from '../images/AboutUs_Img/abbg.jpg'
import img1 from '../images/AboutUs_Img/ab1.jpeg'
import img2 from '../images/AboutUs_Img/ab2.jpeg'
import img3 from '../images/AboutUs_Img/ab3.jpeg'

const Aboutus = () => {
  return (
    <div className="w-full bg-[#232526]">
      <div className="relative flex justify-center items-center">
        <h1 className="absolute z-20 text-white pageHeading">About Us</h1>
        <img 
          className="w-full h-[90vh] bg-center bg-cover"
          src={bgImg}
          alt="About Banner"
        />
        <div className="absolute z-10 inset-0 bg-black/40"></div>
        
      </div>

      {/* Who We Are */}
      <div className="max-w-[96%] bg-zinc-800 m-auto p-4 mt-6 rounded-xl flex flex-col md:flex-row gap-7">
        {/* Left Image */}
        <div className="w-[45%] ">
          <img
            className="w-[100%] h-[85%] mt-[52px] rounded-lg bg-center bg-cover"
            src={img1}
            alt="Who We Are"
          />
        </div>

        {/* Right Content */}
        <div className="w-[55%] overflow-y-auto">
          <h2 className="mt-10 text-3xl font-bold mb-3 pl-5 border-l-4 border-[#e4d00a] text-white">
            Who We Are
          </h2>
          <div className="w-[96%] text-gray-300">
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              At Pooja Movie Creations, we are more than just an advertising
              agency — we are passionate creators, storytellers, and visionaries
              who understand the power of emotion-driven branding. Established
              with the purpose of helping businesses grow through strategic
              advertising, our agency brings a blend of creativity, innovation,
              and market insight to every campaign.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              We believe that effective advertising isn't just about selling a
              product — it's about connecting with your audience on a deeper
              level. That's why we approach every project with a focus on
              storytelling, authenticity, and impact. Our team is made up of
              skilled professionals from diverse backgrounds — strategists,
              content creators, designers, and media experts — all working
              together with one goal: to elevate your brand.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              Whether you're a small startup aiming for recognition or a
              well-established business looking to expand your reach, we are
              committed to becoming your creative partner. Our strength lies in
              understanding your brand's essence and translating it into content
              that resonates with your audience.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              <strong>Value for Money:</strong> We believe in "Jo Dikhta Hai,
              Wahi Bikta Hai" — and we help our clients get visible through the
              right platforms, at the right price.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              <strong>Dedicated Team Support:</strong> Our expert media team
              ensures end-to-end support — from concept creation to ad telecast
              — with transparency and commitment
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[96%] bg-zinc-800 m-auto p-4 mt-6 rounded-xl flex flex-col md:flex-row gap-7"
      style={{ boxShadow: '0 0 20px 4px rgba(218, 198, 21, 0.5)'}}>
        {/* left Content */}
        <div className="w-[55%] pt-6 overflow-y-auto">
          <h2 className="mt-10 text-3xl font-bold mb-3 ml-5 pl-5 border-l-4 border-[#e4d00a] text-white">
            How Pooja Movie Creations Works
          </h2>
          <div className="w-[96%] text-gray-300 pl-5">
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              We specialize in delivering end-to-end advertising and brand promotion services designed to help businesses grow and thrive in a competitive market. At Pooja Movie Creations, we create high-impact campaigns across digital, print, and media platforms — all tailored to meet your unique business goals.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              Our services include digital ad campaigns (Google Ads, Meta/Facebook Ads), social media marketing, video advertisements, influencer partnerships, brand films, and outdoor advertising. We also offer creative strategy, scriptwriting, content production, and campaign management — everything your brand needs to make a lasting impression.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              We don't just run ads — we craft compelling narratives that speak directly to your audience. Our process is data-driven but fueled by creativity. We take the time to understand your market, your goals, and your vision — then execute campaigns that deliver measurable results.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
             Whether you want to launch a new product, build your brand identity, or increase sales through targeted advertising, our team will design a customized solution for you. We combine creativity, strategy, and technology to ensure every rupee you invest works harder for your brand.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
             With Pooja Movie Creations, your message doesn’t just reach people — it moves them.
            </p>
          </div>
        </div>

         {/* right Image */}
        <div className="w-[45%] h-[90%]">
          <img
            className="w-[100%] h-[85%] mt-[20px] rounded-lg bg-center bg-cover"
            src={img2}
            alt="Who We Are"
          />
        </div>
      </div>

      <div className="max-w-[96%] bg-zinc-800 m-auto p-4 mt-6 rounded-xl flex flex-col md:flex-row gap-7">
        {/* Left Image */}
        <div className="w-[45%] ">
          <img
            className="w-[100%] h-[85%] mt-[52px] rounded-lg bg-center bg-cover"
            src={img3}
            alt="Who We Are"
          />
        </div>

        {/* Right Content */}
        <div className="w-[55%] overflow-y-auto">
          <h2 className="mt-16 text-3xl font-bold mb-3 pl-5 border-l-4 border-[#e4d00a] text-white">
            🏆 What Makes Us Unique?
          </h2>
          <div className="w-[96%] text-gray-300">
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              Choosing Pooja Movie Creations means choosing a partner who truly cares about your growth. We’re not here to push generic ad templates — we’re here to craft unique brand experiences that inspire, engage, and convert.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              Our tagline reflects our core philosophy: "WE DON'T CREATE ADS, WE CREATE MEMORIES THAT LAST FOREVER."And we live by that. We believe the best campaigns are the ones people talk about, remember, and share. That's why every project we take on is guided by creativity, quality, and authenticity.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              What sets us apart is our commitment to understanding your brand — its values, tone, and aspirations. We dig deep into your business to build strategies that align with your identity and connect with your audience on an emotional level.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
             We blend data with design, storytelling with strategy, and passion with precision. Our team works closely with you throughout the journey, from concept to campaign execution, ensuring transparency and excellence at every stage.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              With Pooja Movie Creations, you don't just get an ad agency — you get a dedicated creative ally focused on building lasting value for your brand.
            </p>
            <p className="mb-2.5 text-[15.3px] leading-[18.8px]">
              Let's create something unforgettable — together.
            </p>
          </div>
        </div>
      </div>

      {/* Why TV Media Advertising */}
      <div className="w-full bg-zinc-700/40 text-white p-12 mt-6">
        <h2 className="text-[36px] font-bold mb-1">
          <i className="ri-tv-line mr-3 text-[#e4d00a]"></i>Why TV Media Advertising is Essential for Brands
        </h2>

        <p className="w-[90%] mb-2.5 text-[17px] leading-[22px]">
          In today's highly competitive market, visibility and trust are key to
          building a successful brand. TV media advertising remains one of the
          most powerful and effective ways to achieve both — even in the digital
          era.
        </p>

        <h3 className="font-semibold mb-2 mt-5">
          ✅ Here's Why TV Advertising is a Must for Every Brand:
        </h3>

        <ul className="list-disc list-inside space-y-2 text-[15.3px]">
          <li>
            <strong>Unmatched Reach & Mass Exposure:</strong> Television has the
            widest reach across urban and rural markets...
          </li>
          <li>
            <strong>Builds Trust & Credibility:</strong> Brands seen on reputed
            TV channels are instantly perceived as trustworthy...
          </li>
          <li>
            <strong>Targeted Advertising:</strong> You can advertise on channels
            based on your audience — news, entertainment, regional, or niche...
          </li>
          <li>
            <strong>Emotional Connection:</strong> TV ads use storytelling,
            visuals, sound, and emotion, making them more memorable...
          </li>
          <li>
            <strong>Competitive Edge:</strong> If your competitors are on TV and
            you're not, you may miss out on mindshare...
          </li>
          <li>
            <strong>Perfect for Product Launches:</strong> TV is ideal for
            creating mass hype during product launches, festival offers, or
            awareness campaigns.
          </li>
          <li>
            <strong>Cost-Effective:</strong> With smart media planning, even
            low-budget brands can advertise on national TV...
          </li>
        </ul>

        <p className="w-[90%] mt-4 text-[15.3px] font-semibold">
          TV media advertising gives your brand visibility, credibility,
          emotional impact, and market dominance — all at once. It's not just an
          ad, it's a brand investment.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
