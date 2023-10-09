import React, { Component } from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <>
                <nav className='NavbarItems'>
                    <h1 className="navbar-logo">Trek Tripper</h1>

                    <div className="menu-icons"
                        onClick={this.handleClick}>
                        <i className={`fas ${this.state.clicked ?
                            "fa-times" : "fa-bars"}`}></i>
                    </div>

                    <ul className={this.state.clicked ? 'nav-menu activeNav' :
                        'nav-menu'}>
                        {MenuItems.map((item, ind) => (
                            <li key={ind} className={item.cName}>
                                <Link to={item.url} >
                                    <span className='itemTitle'>
                                        <i className={item.icon}> </i>
                                        {item.title}</span>
                                </Link>
                            </li>
                        ))}

                        <button>Sign Up</button>
                    </ul>
                </nav>
            </>
        )
    }
}
// 1.11.20

export default Navbar