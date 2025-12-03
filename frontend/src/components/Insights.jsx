import React, { useEffect, useRef, useState } from "react";
import "../styles/insights.css";
import { Link } from "react-router-dom";

// images
import ai from "../assets/images/image1.png";
import ml from "../assets/images/image2.png";
import web3 from "../assets/images/image3.png";
import llm from "../assets/images/image4.png";
import iot from "../assets/images/image5.png";
import ai_ethics from "../assets/images/image6.png";

function Insights() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 650);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset showAllCards when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile && showAllCards) {
      setShowAllCards(false);
    }
  }, [isMobile, showAllCards]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleCards = () => {
    setShowAllCards(!showAllCards);
  };

  const blogs = [
    {
      title: "AI Solutions",
      text: "Intelligent automation, chatbots, and machine learning solutions to transform your business.",
      img: ai,
      link: "/blog/ai-solutions",
      direction: "left",
    },
    {
      title: "ML Production",
      text: "Connected device solutions with dashboards and smart system integration.",
      img: ml,
      link: "/blog/ml-production",
      direction: "bottom",
    },
    {
      title: "Web3 DApps",
      text: "Development from concept to deployment with comprehensive engineering.",
      img: web3,
      link: "/blog/web3-dapps",
      direction: "right",
    },
    {
      title: "LLM Applications",
      text: "High-performance websites built with modern frameworks like React and Next.js.",
      img: llm,
      link: "/blog/llm-applications",
      direction: "left",
    },
    {
      title: "AI Automation",
      text: "Real-time analytics and connected ecosystems for smart industry.",
      img: iot,
      link: "/blog/ai-automation",
      direction: "bottom",
    },
    {
      title: "AI Ethics",
      text: "Machine learning workflows and predictive intelligence for digital products.",
      img: ai_ethics,
      link: "/blog/ai-ethics",
      direction: "right",
    },
  ];

  // Determine which cards to show
  const cardsToShow = isMobile && !showAllCards ? blogs.slice(0, 3) : blogs;

  return (
    <section ref={sectionRef} className="insights-section" id="insights">
      {/* Only one blue circle on the right */}
      <div
        className={`insight-circle-right ${isVisible ? "circle-visible" : ""}`}
      ></div>

      <div className="insights-inner">
        <div className={`insight-badge ${isVisible ? "badge-visible" : ""}`}>
          <span className="dot"></span> Blogs
        </div>

        <h2 className={`insight-title ${isVisible ? "title-visible" : ""}`}>
          Insightful Tech <span>Perspectives</span>
        </h2>

        <p
          className={`insight-subtitle ${isVisible ? "subtitle-visible" : ""}`}
        >
          Stay updated with strategic perspectives, technology deep dives, and
          innovation stories from across the digital landscape.
        </p>

        <div className="insight-grid">
          {cardsToShow.map((blog, i) => (
            <Link
              to={blog.link}
              className={`insight-card card-${blog.direction} ${
                isVisible ? "card-visible" : ""
              }`}
              key={i}
            >
              <div className="insight-image">
                <img src={blog.img} alt={blog.title} />
                <button className="card-arrow">➜</button>
              </div>

              <div className="insight-body">
                <h3>{blog.title}</h3>
                <p>{blog.text}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View More/Less button for mobile only */}
        {isMobile && (
          <button 
            className={`view-more-btn ${isVisible ? 'btn-visible' : ''}`} 
            onClick={toggleCards}
          >
            {showAllCards ? 'View Less' : 'View More'}
            <svg 
              className={`view-more-icon ${showAllCards ? 'rotate-icon' : ''}`} 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}

export default Insights;