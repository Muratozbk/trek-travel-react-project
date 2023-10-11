import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Img12 from '../assets/12.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={Img12}
                title='Your Journey Your Story'
                text="Choose your favourite destination."
                buttonText="Travel Plan"
                url='/'
                btnClass="show"
            />

            <Destination />
            <Trip />
            <Footer />
        </>
    )
}

export default Home