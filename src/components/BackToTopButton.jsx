
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }

    }, []);

    return (
        <>
            {isVisible && (
                <Link to="top"  >
                    <div className="back-to-top">
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>
                </Link>
            )}
        </>
    )
}

export default BackToTopButton