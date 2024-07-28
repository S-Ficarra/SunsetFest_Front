import { React, useState } from "react";
import { NavLink } from 'react-router-dom';
import './hamburgermenu.css'


const  HamburgerMenu= () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`lineHam ${isOpen ? 'lineHam-1' : ''}`}></div>
                <div className={`lineHam ${isOpen ? 'lineHam-2' : ''}`}></div>
                <div className={`lineHam ${isOpen ? 'lineHam-3' : ''}`}></div>
            </div>
            <div className={`MenuLinksMobile ${isOpen ? 'open' : ''}`}>
                <NavLink to="/actualites">ACTUALITÉS</NavLink>
                <NavLink to="/lineup">LINE-UP</NavLink>
                <NavLink to="/">BILLETS</NavLink>
                <NavLink to="/informations">INFORMATIONS</NavLink>
                <NavLink to="/carte">CARTE</NavLink>
            </div>
        </div>
    );
}

export default HamburgerMenu;