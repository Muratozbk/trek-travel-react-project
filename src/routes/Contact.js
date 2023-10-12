import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/2.jpg'
import Footer from '../components/Footer'
import BackToTopButton from '../components/BackToTopButton'

function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title='Contact'
                btnClass="hide" />

            <div className="from-container">
                <h1>Send a message to us!</h1>
                <form >
                    <input placeholder='Name' />
                    <input placeholder='Email' />
                    <input placeholder='Subject' />
                    <textarea placeholder='Message' rows="4"></textarea>
                    <button>Send Message</button>
                </form>
            </div>

            <Footer />
            <BackToTopButton />
        </>
    )
}

// 3.13.30

export default Contact