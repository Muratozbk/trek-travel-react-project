
import React, { useState, useEffect } from 'react'

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollListener = () => window.scrollY > 300 ?
        setIsVisible(true) : setIsVisible(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {isVisible && (

                <div className="back-to-top"
                    onClick={scrollToTop}>
                    <i className="fa-solid fa-angle-up"></i>
                </div>

            )}
        </>
    )
}

export default BackToTopButton