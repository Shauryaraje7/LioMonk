import React, { useState } from "react";
import "../styles/innovativeSolutions.css";

import ecommerceImg from "../assets/images/innovative/ecommerce.png";
import healthcareImg from "../assets/images/innovative/healthcare.png";
import automationImg from "../assets/images/innovative/healthcare.png";

function InnovativeSolutions() {
  const items = [
    {
      title: "E-Commerce Platform",
      text: "Full-stack e-commerce solution with AI-powered recommendations and real-time analytics.",
      img: ecommerceImg,
    },
    {
      title: "Healthcare Mobile App",
      text: "Patient management and telemedicine application with secure video consultations.",
      img: healthcareImg,
    },
    {
      title: "SmartFlows Automation Platform",
      text: "A corporate website for an automation consultancy showcasing their RPA services and client portfolio.",
      img: automationImg,
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="innovative-section">
      {/* Background circles */}
      <div className="circle left-circle"></div>
      <div className="circle right-circle"></div>

      <div className="innovative-inner">

        {/* Badge */}
        <div className="innovative-badge">
          <span className="dot"></span> Featured Work
        </div>

        {/* Title */}
        <h2 className="innovative-title">
          Innovative <span>Digital Solutions</span>
        </h2>

        {/* Subtitle */}
        <p className="innovative-subtitle">
          From concept to deployment, we deliver cutting-edge digital solutions that drive growth and transform businesses through innovative technology.
        </p>

        <div className="innovative-content">

          {/* LEFT LIST */}
          <div className="innovative-list">
            {items.map((item, index) => (
              <div
                key={index}
                className={`list-item ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="innovative-image-container">
            <img
              key={active}
              src={items[active].img}
              alt="solution"
              className="innovative-image fade"
            />

            <button className="image-btn contact-btn">Contact Us</button>
            <button className="image-btn arrow-btn">➜</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default InnovativeSolutions;
