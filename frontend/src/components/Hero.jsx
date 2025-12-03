import React, { useEffect, useState } from "react";
import "../styles/hero.css";

import Navbar from "./Navbar.jsx";
import heroBG from "../assets/images/hero-bg.png";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
    id="hero"
      className="hero-section"
      style={{
        backgroundImage: `url(${heroBG})`,
      }}
    >
      {/* Navbar sits on top of the SAME background */}
      <Navbar />

      <div className="hero-overlay"></div>

      <div className="hero-content">
    

        <h1 className={`hero-title ${isVisible ? 'title-visible' : ''}`}>
          We Build Ideas <br />
          into <span>Reality</span>
        </h1>

        <p className={`hero-subtitle ${isVisible ? 'subtitle-visible' : ''}`}>
          End-to-end full-stack development, AI solutions, and complete <br />
          product building done for you.
        </p>

        <div className={`hero-buttons ${isVisible ? 'buttons-visible' : ''}`}>
          <button className="hero-btn hero-btn-light">Launch</button>
          <button className="hero-btn hero-btn-dark">Free Quote</button>
        </div>
      </div>
    </section>

 

  );
}

export default Hero;