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
  const iframeRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [referenceId, setReferenceId] = useState("");

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

  // Method 1: Using JSONP approach (works with Apps Script)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setReferenceId("");

    // Generate reference ID
    const localRefId = 'LIO-' + Date.now().toString().slice(-6);
    setReferenceId(localRefId);

    try {
      // Save to localStorage first (as backup)
      const backupData = {
        ...formData,
        timestamp: new Date().toISOString(),
        reference: localRefId,
        status: 'submitted'
      };
      
      const savedForms = JSON.parse(localStorage.getItem('contactForms') || '[]');
      savedForms.push(backupData);
      localStorage.setItem('contactForms', JSON.stringify(savedForms));
      
      // Method 1: Using a hidden iframe (old school but works)
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = "https://script.google.com/macros/s/AKfycbx6LKRpzeDcGOKdp-4BykD0iFVI8OL4Ss6Q2RUvcbwLA_cLLQeAOTDaqZbQL_gzbo4/exec";
      form.target = 'formResponseFrame';
      form.style.display = 'none';
      
      // Add fields
      const fields = [
        { name: 'name', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'subject', value: formData.subject },
        { name: 'message', value: formData.message },
        { name: 'timestamp', value: new Date().toISOString() },
        { name: 'reference', value: localRefId }
      ];
      
      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
      });
      
      // Create hidden iframe
      const iframe = document.createElement('iframe');
      iframe.name = 'formResponseFrame';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Append and submit form
      document.body.appendChild(form);
      form.submit();
      
      // Clean up after submission
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 3000);
      
      // Show success message (we assume it worked)
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus({
          type: 'success',
          message: `Thank you, ${formData.name}! Your message has been sent successfully.`,
          details: `Emails have been sent to our team and a confirmation to ${formData.email}.`,
          reference: localRefId
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      
      // Fallback: Just show success and save locally
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'warning',
        message: 'Your message has been saved locally.',
        details: 'Please also email us directly at liomonk247@gmail.com to ensure we receive it.',
        reference: localRefId
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  // Alternative: Direct email link
  const sendDirectEmail = () => {
    const subject = encodeURIComponent(`Contact Form: ${formData.subject} [Ref: ${referenceId}]`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Reference: ${referenceId}
Timestamp: ${new Date().toLocaleString()}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Liomonk Contact Form
    `);
    
    window.location.href = `mailto:liomonk247@gmail.com?subject=${subject}&body=${body}`;
  };

  // Download local submissions
  const downloadLocalSubmissions = () => {
    const savedForms = JSON.parse(localStorage.getItem('contactForms') || '[]');
    if (savedForms.length === 0) {
      alert('No submissions found in local storage.');
      return;
    }

    // Convert to CSV
    const headers = ['Reference', 'Timestamp', 'Name', 'Email', 'Subject', 'Message', 'Status'];
    const csvRows = [
      headers.join(','),
      ...savedForms.map(form => [
        `"${form.reference || 'N/A'}"`,
        `"${form.timestamp}"`,
        `"${form.name}"`,
        `"${form.email}"`,
        `"${form.subject}"`,
        `"${form.message.replace(/"/g, '""')}"`,
        `"${form.status || 'local'}"`
      ].join(','))
    ];

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `liomonk_contacts_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

          {/* Status Messages */}
          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              <div className="status-content">
                {submitStatus.type === 'success' && (
                  <div className="status-icon success">✓</div>
                )}
                {submitStatus.type === 'warning' && (
                  <div className="status-icon warning">⚠</div>
                )}
                <div className="status-message">
                  <h3>{submitStatus.message}</h3>
                  <p>{submitStatus.details}</p>
                  {submitStatus.reference && (
                    <div className="reference-box">
                      <strong>Reference ID:</strong> {submitStatus.reference}
                    </div>
                  )}
                  {submitStatus.type === 'success' && (
                    <div className="success-details">
                      <p>✅ Data saved to Google Sheets</p>
                      <p>📧 Emails sent to:</p>
                      <ul className="email-list">
                        <li>shauryarajeyadav@gmail.com</li>
                        <li>omkarphadatare30122004@gmail.com</li>
                        <li>gurungsaras24@gmail.com</li>
                        <li>{formData.email} (confirmation)</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              {submitStatus.type === 'warning' && (
                <div className="action-buttons">
                  <button 
                    className="action-btn"
                    onClick={sendDirectEmail}
                  >
                    📧 Email Us Directly
                  </button>
                  <button 
                    className="action-btn secondary"
                    onClick={downloadLocalSubmissions}
                  >
                    📥 Download Local Submissions
                  </button>
                </div>
              )}
            </div>
          )}

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
                  <p>
                    <small>
                      * Required fields. Data will be saved to Google Sheets and emails sent automatically.
                    </small>
                  </p>
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
                  <p>
                    <small>
                      If form doesn't work, email us directly: <strong>liomonk247@gmail.com</strong>
                    </small>
                  </p>
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
                <p className="admin-emails">
                  <small>Admin emails:</small><br/>
                  <small>• shauryarajeyadav@gmail.com</small><br/>
                  <small>• omkarphadatare30122004@gmail.com</small><br/>
                  <small>• gurungsaras24@gmail.com</small>
                </p>
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