import React from 'react';
import './styles.css';
import { useState } from 'react';
import logo from '../../parmesean.svg'

import { Button } from '@material-ui/core';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const toggle_menu = () => {
        if(toggle) { setToggle(false); } else { setToggle(true); }
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <a href="/" id="navbar__logo">
                      <img src={logo} className="logoSmall" alt="Greg"></img>
                    </a>
                    <div className={toggle ? "navbar__toggle is-active" : "navbar__toggle"} id="mobile-menu" onClick={toggle_menu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className={toggle ? "navbar__menu active" : "navbar__menu"}>
                        <li className="navbar__item">
                            <a href="/#" className="navbar__links">
                            About Me
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="/#" className="navbar__links">
                            Projects
                            </a>
                        </li>
                        <li className="navbar__btn">
                            <a href="/#" className="button">
                                b1
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
