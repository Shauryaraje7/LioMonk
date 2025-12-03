import React from "react";
import "../styles/footer.css";

import logo from "../assets/images/Group 2.svg"; // update to your logo path

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner">

        {/* Left section with logo + text */}
        <div className="footer-col footer-about">
          <img src={logo} alt="Liomonk" className="footer-logo" />
          <p>
            We build ideas into reality with cutting-edge technology and innovative 
            solutions. Your trusted partner for web, app, AI, and IoT development.
          </p>
        </div>

        {/* Middle columns */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>SERVICES</h4>
          <ul>
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>AI Solutions</li>
            <li>CRM Development</li>
            <li>Full Projects</li>
          </ul>
        </div>

        {/* Right column */}
        <div className="footer-col footer-connect">
          <h4>LET'S CONNECT</h4>

          <div className="footer-input-box">
            <input type="email" placeholder="Enter your email" />
          </div>

          <button className="footer-launch-btn">Launch</button>
        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Bottom */}
      <div className="footer-bottom">
        Liomonk © 2025. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
