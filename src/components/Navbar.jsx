import React, { Component } from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className='NavbarItems'>
                    <h1 className="navbar-logo">Trek</h1>
                    <ul className='nav-menu'>
                        <li>
                            <Link to={'/'}>
                                <i class='fa-solid fa-house-user'>home</i>
                            </Link>

                        </li>
                    </ul>
                </nav>
            </>
        )
    }
}


export default Navbar