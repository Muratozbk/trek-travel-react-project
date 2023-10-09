import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/2.jpg'

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title='Contact'
                btnClass="hide" />
        </>
    )
}

export default Contact