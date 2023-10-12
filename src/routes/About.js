import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/night.jpg'
import Footer from '../components/Footer'
import BackToTopButton from '../components/BackToTopButton'

function About() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={AboutImg}
                title='About'
                btnClass="hide" />

            <div className="about-container">
                <h1>Our Story</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti excepturi ad quasi ex debitis sint quibusdam cumque laudantium possimus, adipisci delectus, expedita sit quo magnam consectetur earum soluta. Veritatis accusantium reiciendis qui expedita ut? Rem, ut? Id, doloremque ab facilis, laudantium ea soluta, dolore esse dolorem illo fugiat obcaecati culpa? </p>
                <h1>Our Mission</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti excepturi ad quasi ex debitis sint quibusdam cumque laudantium possimus, adipisci delectus, expedita sit quo magnam consectetur earum soluta. Veritatis accusantium reiciendis qui expedita ut? Id, doloremque ab facilis, laudantium ea soluta, dolore esse dolorem illo fugiat obcaecati culpa? </p>
                <h1>Our Vision</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti excepturi ad quasi ex debitis sint quibusdam cumque laudantium possimus, adipisci delectus, expedita sit quo magnam consectetur earum soluta. Veritatis accusantium reiciendis qui expedita ut? Rem, ut? Id, doloremque ab facilis. </p>
            </div>
            <Footer />
            <BackToTopButton />
        </>
    )
}

export default About