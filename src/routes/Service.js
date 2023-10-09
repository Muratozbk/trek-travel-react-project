import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/3.jpg'

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title='Service'
                btnClass="hide" />
        </>
    )
}

export default Service
// 1.59.23