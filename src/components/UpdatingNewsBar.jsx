import React from 'react'

const UpdatingNewsBar = () => {
  return (
    <div className='w-full h-9 bg-zinc-800 text-white flex items-center px-2 sm:px-4'>
      <marquee
        behavior="smooth" 
        direction="left" 
        scrollamount="10" 
        scrolldelay="110" 
        loop="-1"
      >
        <div className='inline-flex items-center whitespace-nowrap'>
          <i className="ri-star-fill text-amber-300 mr-1.5"></i>
          <h1 className='text-[13px] sm:text-[14px] md:text-[15px] pt-[.6px]'>
            17 Years Of Excellence India's No. 1 TV Media and TV Celebrity Advertisement Making Company
          </h1>
          <i className="ri-star-fill text-amber-300 ml-1.5"></i>
        </div>
      </marquee>
    </div>
  )
}

export default UpdatingNewsBar
