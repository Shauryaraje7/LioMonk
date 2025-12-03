import React, { useEffect, useRef, useState } from "react";
import "../styles/insights.css";
import { Link } from "react-router-dom";

// images
import ai from "../assets/images/image 5.png";
import iot from "../assets/images/image 5.png";
import fullstack from "../assets/images/image 5.png";
import web from "../assets/images/image 5.png";

function Insights() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const blogs = [
    {
      title: "AI Solutions",
      text: "Intelligent automation, chatbots, and machine learning solutions to transform your business.",
      img: ai,
      link: "/blog/ai-solutions",
      direction: "left"
    },
    {
      title: "CRM Development",
      text: "Connected device solutions with dashboards and smart system integration.",
      img: iot,
      link: "/blog/ai-solutions",
      direction: "bottom"
    },
    {
      title: "Full Stack Solutions",
      text: "Development from concept to deployment with comprehensive engineering.",
      img: fullstack,
      link: "/blog/ai-solutions",
      direction: "right"
    },
    {
      title: "Web Development",
      text: "High-performance websites built with modern frameworks like React and Next.js.",
      img: web,
      link: "/blog/ai-solutions",
      direction: "left"
    },
    {
      title: "CRM Development",
      text: "Real-time analytics and connected ecosystems for smart industry.",
      img: iot,
      link: "/blog/ai-solutions",
      direction: "bottom"
    },
    {
      title: "AI Solutions",
      text: "Machine learning workflows and predictive intelligence for digital products.",
      img: ai,
      link: "/blog/ai-solutions",
      direction: "right"
    },
  ];

  return (
    <section ref={sectionRef} className="insights-section">
      {/* Only one blue circle on the right */}
      <div className={`insight-circle-right ${isVisible ? 'circle-visible' : ''}`}></div>

      <div className="insights-inner">
        <div className={`insight-badge ${isVisible ? 'badge-visible' : ''}`}>
          <span className="dot"></span> Blogs
        </div>

        <h2 className={`insight-title ${isVisible ? 'title-visible' : ''}`}>
          Insightful Tech <span>Perspectives</span>
        </h2>

        <p className={`insight-subtitle ${isVisible ? 'subtitle-visible' : ''}`}>
          Stay updated with strategic perspectives, technology deep dives, and
          innovation stories from across the digital landscape.
        </p>

        <div className="insight-grid">
          {blogs.map((blog, i) => (
            <Link 
              to={blog.link} 
              className={`insight-card card-${blog.direction} ${isVisible ? 'card-visible' : ''}`}
              key={i}
              style={{ transitionDelay: `${0.6 + i * 0.1}s` }}
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
      </div>
    </section>
  );
}

export default Insights;