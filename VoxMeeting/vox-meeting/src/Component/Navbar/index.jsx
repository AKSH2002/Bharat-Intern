import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="Full-logo-white.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/about">About Us</Link> {/* Link to the AboutUs page */}
      </div>
    </nav>
  );
};

export default Navbar;
