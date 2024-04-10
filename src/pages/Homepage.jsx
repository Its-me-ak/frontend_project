import React from 'react'
import Header from '../common/Header'
import BannerSlide from '../components/BannerSlide'
import BannerBottomCard from '../components/BannerBottomCard'
import About from '../components/About'
import Divercity from '../components/Divercity'
import SuccessGrid from '../components/SuccessGrid'
import AppreciationProgram from '../components/AppreciationProgram'
import Testimonial from '../components/Testimonial'
import GlobalBusiness from '../components/GlobalBusiness'
import Footer from '../common/Footer'

const Homepage = () => {
  return (
    <>
      <Header/>
      <BannerSlide/>
      <BannerBottomCard/>
      <About/>
      <Divercity/>
      <SuccessGrid />
      <AppreciationProgram/>
      <Testimonial/>
      <GlobalBusiness/>
      <Footer/>
    </>
  )
}

export default Homepage
