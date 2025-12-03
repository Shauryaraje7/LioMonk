import React, { useEffect, useRef } from "react";
import "../styles/contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  const circleRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("circle-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (circleRef.current) observer.observe(circleRef.current);

    // Animate elements on load
    setTimeout(() => {
      if (badgeRef.current) badgeRef.current.classList.add("badge-visible");
      if (titleRef.current) titleRef.current.classList.add("title-visible");
      if (subtitleRef.current) subtitleRef.current.classList.add("subtitle-visible");
      if (formRef.current) formRef.current.classList.add("form-visible");
      if (infoRef.current) infoRef.current.classList.add("info-visible");
    }, 100);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="contact-page">
      <Navbar />
      
      <section className="contact-section">
        {/* Background circle */}
        <div className="contact-circle-right" ref={circleRef}></div>

        <div className="contact-inner">
          {/* Badge */}
          <div className="contact-badge" ref={badgeRef}>
            <div className="dot"></div>
            <span>GET IN TOUCH</span>
          </div>

          {/* Title */}
          <h1 className="contact-title" ref={titleRef}>
            Let's Build Something <span>Extraordinary</span>
          </h1>

          {/* Subtitle */}
          <p className="contact-subtitle" ref={subtitleRef}>
            Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours.
          </p>

          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-container" ref={formRef}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info" ref={infoRef}>
              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Visit Our Office</h3>
                <p>123 Innovation Street</p>
                <p>Tech Valley, CA 94000</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H19C18.45 20.92 18 20.47 18 19.92V16.92C18 16.37 18.45 15.92 19 15.92H21C21.55 15.92 22 16.37 22 16.92ZM19 12.92H21C21.55 12.92 22 13.37 22 13.92V15.92C22 16.47 21.55 16.92 21 16.92H19C18.45 16.92 18 16.47 18 15.92V13.92C18 13.37 18.45 12.92 19 12.92ZM4 3.92H20C21.1 3.92 22 4.82 22 5.92V11.92C22 12.47 21.55 12.92 21 12.92H19C18.45 12.92 18 12.47 18 11.92V8.92C18 8.37 17.55 7.92 17 7.92H4C3.45 7.92 3 8.37 3 8.92V19.92C3 20.47 3.45 20.92 4 20.92H11C11.55 20.92 12 20.47 12 19.92V19.92" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Call Us</h3>
                <p>+91 9822474542</p>
                <p>+91 8237536226</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Email Us</h3>
                <p>liomonk247@gmail.com</p>
                {/* <p>support@liomonk.com</p> */}
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Business Hours</h3>
                <p>Mon - Fri: 9am - 6pm</p>
                <p>Sat: 10am - 4pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;