import React from 'react'
import Footer from '../common/footer'
import AppRating from '../components/AppRating'
import CredStory from '../components/CredStory'
import HeroSection from '../components/Herosection'
import Brandslove from '../components/Herosection/Brandsloves'
import Header from '../components/Herosection/common/Header'
import CredExperience from '../components/Herosection/CredExperience'
import CredSecurity from '../components/Herosection/CredSecurity'
import MobileScroll from '../components/MobileScroll'
import WindowPeak from '../components/WindowPeak'
import FeelSpecial from '../feelSpecial'
import ProductShowcase from '../ProductShowcase'

const HomePages = () => {
  return (
    <>
        <Header/> 
        <HeroSection/>
        <ProductShowcase/>
        <FeelSpecial/>
        <Brandslove/>
        <CredExperience/>
        <MobileScroll/>
      <div className="non-mobile">
        <WindowPeak />
      </div>
        <CredSecurity/>
        <CredStory/>
        <AppRating/>
        <Footer/>
    </>
  )
}

export default HomePages