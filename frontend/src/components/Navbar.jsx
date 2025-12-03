import React from "react";
import "../styles/navbar.css";
import logo from "../assets/images/Group 2.svg"; // update to your logo path

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        {/* Your logo image or SVG */}
        <img src={logo} alt="Liomonk Logo" />
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Free Quote</a></li>
      </ul>

      <button className="launch-btn">Launch</button>
    </nav>
  );
}

export default Navbar;
