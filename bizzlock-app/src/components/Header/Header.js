import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header> 
            <a href="/"><img src="/test.png" alt="bizzlock-logo" className="logo"/></a>
            <div className="right-navigation">
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </header>
    )
}

export default Header;