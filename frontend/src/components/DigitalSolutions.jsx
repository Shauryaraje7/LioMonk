import React, { useEffect, useRef, useState } from "react";
import "../styles/digitalSolutions.css";

import SolutionCard from "./SolutionCard";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Using same image for now
import defaultImg from "../assets/images/image 5.png";
import i1 from "../assets/images/image_1.png";
import i2 from "../assets/images/image_2.png";
import i3 from "../assets/images/image_3.png";
import i4 from "../assets/images/image_4.png";
import i5 from "../assets/images/image_5.png";
import i6 from "../assets/images/image_6.png";

function DigitalSolutions() {
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
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const cards = [
    {
      title: "AI Solutions",
      text: "Intelligent automation, chatbots, and machine learning solutions that help businesses scale faster and work smarter.",
      points: [
        "AI Chatbots",
        "Machine Learning",
        "Process Automation",
        "Data Analytics",
      ],
      img: i1,
      direction: "left",
    },
    {
      title: "CRM Development",
      text: "Custom CRM systems designed to manage leads, automate workflows, and streamline your entire customer lifecycle.",
      points: [
        "Lead Management",
        "Workflow Automation",
        "Customer Insights",
        "Sales Dashboard",
      ],
      img: i2,
      direction: "left",
    },
    {
      title: "Full Stack Solutions",
      text: "End-to-end development from concept to deployment, covering backend, frontend, and complete project delivery.",
      points: [
        "End-to-End Development",
        "Project Management",
        "Quality Assurance",
        "Deployment",
      ],
      img: i3,
      direction: "right",
    },
    {
      title: "Web Development",
      text: "High-performance, SEO-optimized websites built using modern frameworks like React, Next.js, and Vue.js.",
      points: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Performance",
        "Modern UI/UX",
      ],
      img: i4,
      direction: "right",
    },
    {
      title: "Cloud & DevOps",
      text: "Scalable infrastructure, CI/CD pipelines, and automated deployments to keep your systems fast, secure, and reliable.",
      points: [
        "Cloud Migration",
        "CI/CD Pipelines",
        "Monitoring",
        "DevOps Automation",
      ],
      img: i5,
      direction: "middle",
    },
    {
      title: "Product Engineering",
      text: "Complete lifecycle support—from ideation and prototyping to testing and product launch—for startups and businesses.",
      points: ["Prototyping", "Testing", "Optimization", "Launch Strategy"],
      img: i6,
      direction: "middle",
    },
  ];

  return (
    <section ref={sectionRef} className="digital-section">
      <div className="digital-inner">
        {/* Badge */}
        <div className={`digital-badge ${isVisible ? "badge-visible" : ""}`}>
          <span className="dot"></span>
          We Offer
        </div>

        {/* Title */}
        <h2 className={`digital-title ${isVisible ? "title-visible" : ""}`}>
          Comprehensive <span>Digital Solutions</span>
        </h2>

        {/* Subtitle */}
        <p
          className={`digital-subtitle ${isVisible ? "subtitle-visible" : ""}`}
        >
          From concept to deployment, we deliver cutting-edge digital solutions
          that drive growth and transform businesses through innovative
          technology.
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={24}
          slidesPerView={4}
          speed={900}
          className="solutions-swiper"
          breakpoints={{
            1400: { slidesPerView: 4 },
            1100: { slidesPerView: 3 },
            760: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`solution-card-wrapper ${
                  isVisible ? "card-visible" : ""
                } card-${item.direction}`}
                style={{ transitionDelay: `${0.6 + index * 0.15}s` }}
              >
                <SolutionCard {...item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default DigitalSolutions;
