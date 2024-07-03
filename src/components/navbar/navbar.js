import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/LogoTexteOnlysmall.png'
import './navbar.css'
import HamburgerMenu from "./hamburgermenu/hamburgermenu";


function NavBar () {
    return (

        <header>
            <nav className="navbar">
                <div>
                    <NavLink to='/'><img src={logo} alt="Retour à l'accueil" /></NavLink> 
                </div>
                <div className="MenuLinks">
                    <NavLink>ACTUALITÉS</NavLink>
                    <span>|</span>
                    <NavLink to='/lineup'>LINE-UP</NavLink>
                    <span>|</span>
                    <NavLink>BILLETS</NavLink>
                    <span>|</span>
                    <NavLink>INFORMATIONS</NavLink>
                    <span>|</span>
                    <NavLink>CARTE</NavLink>
                </div>
                <HamburgerMenu />
                </nav>
        </header>
    );
}

export default NavBar;