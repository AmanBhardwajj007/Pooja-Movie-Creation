import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import AboutUs from './pages/AboutUs'
import PremiumAdServices from './pages/PremiumAdServices'
import CelebrityEndorsement from './pages/CelebrityEndorsement'
import Packages from './pages/Packages'
import HotSellingPack from './pages/HotSellingPack'
import GoToTop from './components/GoToTop'

const App = () => {
  return (
    <>
      <GoToTop/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/premiumAdSer' element={<PremiumAdServices/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/celebsEndorsement' element={<CelebrityEndorsement/>} />
        <Route path='/packages' element={<Packages/>} />
        <Route path='/hotSellingPackages' element={<HotSellingPack/>} />
        <Route path='/contactus' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
