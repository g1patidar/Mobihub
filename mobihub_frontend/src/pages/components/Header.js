import React from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'; 
import { GiCentaurHeart } from "react-icons/gi";
import "../../css/Header.css";


const Header = () => {
    return (
        <header className="header">
            <a href="/" className="logo"> <img src="./images/main_logo.png"  alt='/' />  </a>

            <input type="checkbox" id="check" />

            <label htmlFor="check" className="icons">
                <FaBars id="menu-icon" />
                <FaTimes id="close-icon" />
            </label>

            <nav className="navbar">
                <a href="/" style={{'--i': 0}}>Home</a>
                <a href="/" style={{'--i': 1}}>About</a>
                <a href="/shop" style={{'--i': 2}}>Shop</a>
                <a href="/" style={{'--i': 3}}>Services</a>
                <a href="/" style={{'--i': 4}}>Contact</a>

                <a href="/cartpage" style={{'--i': 5}}><FaShoppingCart className="cart-icon" /> </a>
                <a href="/" style={{'--i': 6}}><GiCentaurHeart className="cart-icon" /> </a>
                <a href="/" style={{'--i': 7}} ><button className="login-button">Login</button> </a>
            </nav>
        </header>
    );
}

export default Header;
