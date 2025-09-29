import React from 'react'
import Navbar from '../components/Navbar'
import UpdatingNewsBar from '../components/UpdatingNewsBar'
import Slider from '../components/Slider'
import ShowReel from '../components/ShowReel'
import AboutusSec from '../components/AboutusSec'
import Footer from '../components/Footer'
import Services from '../components/Services'
import MiniSlider from '../components/MiniSlider'
import MapComp from '../components/MapComp'
import CardSlider from '../components/CardSlider'
import img1 from "../images/awards/5.jpeg";
import img2 from "../images/awards/6.jpeg";
import img3 from "../images/awards/7.jpeg";
import img4 from "../images/awards/8.jpeg";
import img5 from "../images/awards/9.jpeg";
import img6 from "../images/awards/10.jpeg";
import img7 from "../images/awards/11.jpeg";
import img8 from "../images/celebrity-endorsement/1.jpeg";
import img9 from "../images/celebrity-endorsement/2.jpeg";
import img10 from "../images/celebrity-endorsement/3.jpeg";
import img11 from "../images/celebrity-endorsement/4.jpeg";
import img12 from "../images/celebrity-endorsement/5.jpeg";
import img13 from "../images/celebrity-endorsement/6.jpeg";
import img14 from "../images/celebrity-endorsement/7.jpeg";
import img15 from "../images/celebrity-endorsement/8.jpeg";
import ContactusForm from '../components/ContactusForm'
import HotDealPack from '../components/HotDealPack'
import TestimonialSlider from '../components/TestimonialCard'

const Home = () => {
  return (
    <div className='w-full h-auto'>
      <UpdatingNewsBar/>
      <Navbar/>
      <Slider/>
      <ShowReel/>
      <AboutusSec/>
      <Services/>
      <MiniSlider/>
      <HotDealPack/>
      <CardSlider 
        headingText="Celebrity Endorsement"
        headingClass="mt-1"
        lineClass="w-20 ml-83"
        images={[img8, img9, img10, img11, img12, img13, img14, img15]} 
        imgHeight="h-[360px]" 
        slidesToShow={3}
      />
      <CardSlider 
        headingText="Awards"
        headingClass="mt-1"
        lineClass="w-17 ml-13"
        images={[img1, img2, img3, img4, img5, img6, img7]} 
        imgHeight="h-[300px]" 
        slidesToShow={3} 
        border="border-2 border-yellow-500 px-2.5 pt-4 pb-3 rounded-2xl"
        arrowleft='left-6'
        arrowright='right-6'
      />
      <TestimonialSlider/>
      <div className='flex p-5 gap-5 justify-between items-center'>
        <ContactusForm/>
        <MapComp/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
