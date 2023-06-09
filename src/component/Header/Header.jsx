import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/resgister">Register</Link>
            <Link to="/resgister-rbs">Register RBS</Link>
        </nav>
    );
};

export default Header;