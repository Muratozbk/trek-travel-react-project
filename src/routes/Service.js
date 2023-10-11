import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/3.jpg'
import Footer from '../components/Footer'

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title='Service'
                btnClass="hide" />
            <Footer />
        </>
    )
}

export default Service
// 3.01.00