import React from 'react';
import './Navbar.css';
import Logo from "../../assets/logo.jpg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img 
        src={Logo}
        alt='logo'
      style={{height : "50px"}}
        />
      </div>
      <div className="navbar-items">
        <a href="#our-story">Our Story</a>
        <a href="#our-collection">Our Collection</a>
        <a href="#our-projects">Our Projects</a>
        <a href="#our-services">Our Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
