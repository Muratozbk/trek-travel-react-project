import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/night.jpg'
import Footer from '../components/Footer'
import BackToTopButton from '../components/BackToTopButton'
import Trip from '../components/Trip'

function Service() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title='Service'
                btnClass="hide" />
            <Trip />
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default Service
