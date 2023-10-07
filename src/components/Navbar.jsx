import React, { Component } from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className='NavbarItems'>
                    <h1 className="navbar-logo">Trek Tripper</h1>

                    <ul className='nav-menu'>
                        {MenuItems.map((item, ind) => (
                            <li key={ind} className={item.cName}>
                                <Link to={item.url} >
                                    <i className={item.icon}> </i>
                                    <span className='itemTitle'>   {item.title}</span>
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
            </>
        )
    }
}


export default Navbar