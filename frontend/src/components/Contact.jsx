import React, { useEffect, useRef, useState } from "react";
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
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setTimeout(() => {
      if (badgeRef.current) badgeRef.current.classList.add("badge-visible");
      if (titleRef.current) titleRef.current.classList.add("title-visible");
      if (subtitleRef.current) subtitleRef.current.classList.add("subtitle-visible");
      if (formRef.current) formRef.current.classList.add("form-visible");
      if (infoRef.current) infoRef.current.classList.add("info-visible");
    }, 100);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);

    try {
      // REPLACE WITH YOUR NEW DEPLOYED URL AFTER STEP 3 ABOVE
      const response = await fetch("https://script.google.com/macros/s/AKfycbx6LKRpzeDcGOKdp-4BykD0iFVI8OL4Ss6Q2RUvcbwLA_cLLQeAOTDaqZbQL_gzbo4/exec", {
        method: "POST",
        body: formDataToSend
      });

      const result = await response.text();
      console.log('Server response:', result);  // Check console for "success" or errors

      alert(`Thank you, ${formData.name}! Your form has been submitted successfully. We'll contact you soon via email at ${formData.email}.`);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error('Submission error:', error);
      alert('Submission failed. Please email us directly at liomonk247@gmail.com with your details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendDirectEmail = () => {
    const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Liomonk Contact Form
    `);
    
    window.location.href = `mailto:liomonk247@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      <Navbar />
      
      <section className="contact-section">
        <div className="contact-circle-right" ref={circleRef}></div>

        <div className="contact-inner">
          <div className="contact-badge" ref={badgeRef}>
            <div className="dot"></div>
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="contact-title" ref={titleRef}>
            Let's Build Something <span>Extraordinary</span>
          </h1>

          <p className="contact-subtitle" ref={subtitleRef}>
            Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours.
          </p>

          <div className="contact-content">
            <div className="contact-form-container" ref={formRef}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name *" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address *" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Subject *" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Tell us about your project... *" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <div className="form-info">
                  <p><small>* Required fields.</small></p>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <div className="spinner"></div>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
                
                <div className="form-backup">
                  <p><small>If form doesn't work, email us directly: <strong>liomonk247@gmail.com</strong></small></p>
                  <button 
                    type="button"
                    className="direct-email-btn"
                    onClick={sendDirectEmail}
                    disabled={isSubmitting}
                  >
                    📧 Email Directly Now
                  </button>
                </div>
              </form>
            </div>

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
                <p className="primary-email">liomonk247@gmail.com</p>
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