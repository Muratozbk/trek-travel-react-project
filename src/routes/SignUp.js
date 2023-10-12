import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/9.jpg'
import Footer from '../components/Footer';

function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Navbar />
            <Hero
                heroImg={AboutImg}
                title='Join Us'
                cName="hero-mid2"
            />
            <div className="from-container">
                <h1> Sign Up Here</h1>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Name' />
                    <input placeholder='Email' />
                    <input placeholder='Username' />
                    <textarea placeholder='Message' rows="4"></textarea>
                    <button>Sign Up</button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default SignUp