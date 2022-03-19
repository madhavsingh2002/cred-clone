import React, { useState } from 'react'
import './Header.css'
const Header = () => {
    const [showMobmenu, setShowMobMenu ] =useState(false);
    const toggleMobileMenu =()=>{
        setShowMobMenu(!showMobmenu)
    };
   return (
    <div className='mobile-menu-wrapper'>
        <div className={`mobile-menu only-mobile ${showMobmenu ? "overlay" : ""} `} >
            <div className='mobile-navbar'>
                <div className='mobile-nav-item'>
                    credit score check
                </div>
                <div className='mobile-nav-item'>
                    credit card bill payment
                </div>
            </div>
        </div>
        <div className='flex max-width header'>
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png'
             className='header-logo' />
            <div className='only-mobile mobile-menu-button-wrapper'>
                <button class={`hamburger hamburger--spin ${showMobmenu ? "is-active" : ""} `} type='button' onClick={toggleMobileMenu} >
                    <span class='hamburger-box'>
                        <span class='hamburger-inner'>

                        </span>
                    </span>
                </button>
            </div> 
            <div className='non-mobile flex'>
                <div className='header-nav-item'>
                    credit score check
                </div>
                <div className='header-nav-item'>
                    credit card bill payment
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header