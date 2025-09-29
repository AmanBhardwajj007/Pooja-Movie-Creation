import React from 'react'
import i1 from '../images/about_us_sec.webp'

const AboutusSec = () => {
  return (
    <div className='w-full min-h-[90vh] flex justify-center items-center bg-zinc-800 px-2 sm:px-4'>
      <div className='w-full max-w-[1300px] min-h-[85vh] text-white flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-0'>
        <div className='w-full lg:w-[55%] ml-0 lg:ml-5'>
          <h1 className='w-50 h-12 pt-[10px] text-center border-l-4 border-[#e4d00a] text-2xl font-medium
          '>
            About Us 
            <i className="ri-arrow-right-line ml-2"></i>
          </h1>
          <p className='w-full lg:w-[80%] text-[15px] sm:text-[16px] mt-6 leading-[21px]'>
            A moment to reflect on the incredible journey we've had at Pooja Movie Creations since our inception in 2008. It is truly remarkable that we have evolved into one of the most respected names in the advertising industry. We have worked with esteemed celebrities in TV ad films and endorsements, through which the entire image of creating any brand as a top brand reflects in our experience. Our clients know us through this tagline: "We don't create ads, we create brands.
          </p>
          <div className='w-full h-10'>
            <button className='px-[40px] py-2 mt-5 rounded-[3px] bg-[#e4d00a] text-zinc-800 font-medium cursor-pointer
              border border-transparent hover:border-gray-200 hover:bg-transparent hover:text-white
              transition duration-300 ease-in-out'>
              Read More
            </button>
          </div>
        </div>

        <div className='w-full sm:w-[80%] md:w-[60%] lg:w-[40%] border-2 border-[#bdaa00] p-[6px] rounded-lg'>
          <img src={i1} className='rounded-lg w-full h-auto max-h-[400px] object-cover bg-center' alt="" />
          <h1 className='text-center mt-2 text-[20px] sm:text-[22px] font-semibold'>17 YEARS OF EXCELLENCE</h1>
          <div className='flex justify-center gap-1'>
            <i className="ri-star-fill text-[#e4d00a] text-xl sm:text-2xl mt-[-8px]"></i>
            <i className="ri-star-fill text-[#e4d00a] text-xl sm:text-2xl mt-[-8px]"></i>
            <i className="ri-star-fill text-[#e4d00a] text-xl sm:text-2xl mt-[-8px]"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutusSec
