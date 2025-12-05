import React, { useEffect, useRef, useState } from "react";
import "../styles/digitalSolutions.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Images
import i1 from "../assets/images/image_1.png";
import i2 from "../assets/images/image_2.png";
import i3 from "../assets/images/image_3.png";
import i4 from "../assets/images/image_4.png";
import i5 from "../assets/images/image_5.png";
import i6 from "../assets/images/image_6.png";

function DigitalSolutions() {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const modalContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionVisible(true);
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

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalContainerRef.current && !modalContainerRef.current.contains(event.target)) {
        closeDetailModal();
      }
    };

    if (isDetailModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isDetailModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeDetailModal();
      }
    };

    if (isDetailModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isDetailModalOpen]);

  const services = [
    {
      id: 1,
      title: "AI Solutions",
      description: "Intelligent automation, chatbots, and machine learning solutions that help businesses scale faster and work smarter.",
      highlights: [
        "AI Chatbots",
        "Machine Learning",
        "Process Automation",
        "Data Analytics",
      ],
      image: i1,
      animationDirection: "left",
      detailedDescription: "Our AI Solutions harness the power of artificial intelligence to transform your business operations. We develop intelligent chatbots that provide 24/7 customer support, implement machine learning algorithms for predictive analytics, and automate complex business processes. Our AI systems learn and adapt to your business needs, providing actionable insights and improving operational efficiency by up to 60%.",
      capabilities: [
        "Custom AI Chatbot Development",
        "Predictive Analytics & Machine Learning Models",
        "Process Automation & Optimization",
        "Real-time Data Processing & Insights",
        "Natural Language Processing (NLP)",
        "Computer Vision Solutions"
      ],
      advantages: [
        "Reduce operational costs by 40%",
        "Improve customer satisfaction by 80%",
        "24/7 automated customer support",
        "Real-time decision making capabilities"
      ]
    },
    {
      id: 2,
      title: "CRM Development",
      description: "Custom CRM systems designed to manage leads, automate workflows, and streamline your entire customer lifecycle.",
      highlights: [
        "Lead Management",
        "Workflow Automation",
        "Customer Insights",
        "Sales Dashboard",
      ],
      image: i2,
      animationDirection: "left",
      detailedDescription: "We build custom CRM solutions that transform how you manage customer relationships. Our CRM systems are tailored to your specific business processes, integrating seamlessly with your existing tools. From lead capture to customer retention, we create comprehensive solutions that provide a 360-degree view of your customer journey.",
      capabilities: [
        "Custom Lead Management Pipeline",
        "Automated Workflow & Task Management",
        "Customer Behavior Analytics",
        "Sales Forecasting & Reporting",
        "Multi-channel Integration",
        "Mobile CRM Access"
      ],
      advantages: [
        "Increase sales conversion by 35%",
        "Reduce manual data entry by 70%",
        "Improve customer retention by 45%",
        "Real-time sales performance tracking"
      ]
    },
    {
      id: 3,
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment, covering backend, frontend, and complete project delivery.",
      highlights: [
        "End-to-End Development",
        "Project Management",
        "Quality Assurance",
        "Deployment",
      ],
      image: i3,
      animationDirection: "right",
      detailedDescription: "Our Full Stack Solutions provide complete end-to-end development services. We handle everything from initial concept and design to development, testing, deployment, and maintenance. Using modern technologies and agile methodologies, we ensure your project is delivered on time and within budget while meeting the highest quality standards.",
      capabilities: [
        "Full-cycle Software Development",
        "Agile Project Management",
        "Comprehensive Testing & QA",
        "Cloud Deployment & DevOps",
        "Scalable Architecture Design",
        "Post-launch Support & Maintenance"
      ],
      advantages: [
        "Single point of accountability",
        "Faster time-to-market",
        "Seamless team collaboration",
        "Reduced project management overhead"
      ]
    },
    {
      id: 4,
      title: "Web Development",
      description: "High-performance, SEO-optimized websites built using modern frameworks like React, Next.js, and Vue.js.",
      highlights: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Performance",
        "Modern UI/UX",
      ],
      image: i4,
      animationDirection: "right",
      detailedDescription: "We create stunning, high-performance websites that not only look great but also deliver exceptional user experiences and strong SEO results. Using modern frameworks and best practices, we build websites that are fast, secure, and scalable. Whether you need a simple landing page or a complex web application, we've got you covered.",
      capabilities: [
        "Responsive & Mobile-first Design",
        "Advanced SEO Optimization",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "CMS Integration (WordPress, Strapi)",
        "Performance Optimization"
      ],
      advantages: [
        "Improve site speed by 60%",
        "Increase organic traffic by 50%",
        "Better user engagement & conversion",
        "Cross-platform compatibility"
      ]
    },
    {
      id: 5,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure, CI/CD pipelines, and automated deployments to keep your systems fast, secure, and reliable.",
      highlights: [
        "Cloud Migration",
        "CI/CD Pipelines",
        "Monitoring",
        "DevOps Automation",
      ],
      image: i5,
      animationDirection: "center",
      detailedDescription: "Our Cloud & DevOps services ensure your applications run smoothly, scale effortlessly, and remain secure. We implement modern DevOps practices and leverage cloud infrastructure to automate deployment, monitoring, and scaling processes. From cloud migration to continuous integration and delivery, we optimize your entire development lifecycle.",
      capabilities: [
        "Cloud Infrastructure Setup (AWS, Azure, GCP)",
        "CI/CD Pipeline Implementation",
        "Containerization with Docker & Kubernetes",
        "Infrastructure as Code (IaC)",
        "Performance Monitoring & Alerting",
        "Security & Compliance Management"
      ],
      advantages: [
        "Reduce deployment time by 80%",
        "Improve system reliability by 99.9%",
        "Automatic scaling based on demand",
        "Reduced infrastructure costs"
      ]
    },
    {
      id: 6,
      title: "Product Engineering",
      description: "Complete lifecycle support—from ideation and prototyping to testing and product launch—for startups and businesses.",
      highlights: ["Prototyping", "Testing", "Optimization", "Launch Strategy"],
      image: i6,
      animationDirection: "center",
      detailedDescription: "Product Engineering is our holistic approach to building successful digital products. We guide you through every stage of the product lifecycle - from initial idea validation and prototyping to development, testing, and successful market launch. Our methodology combines user-centered design with agile development to create products that users love.",
      capabilities: [
        "Product Discovery & Strategy",
        "MVP Development & Prototyping",
        "User Experience Design",
        "Quality Assurance & Testing",
        "Product Analytics & Optimization",
        "Go-to-Market Strategy"
      ],
      advantages: [
        "Validate ideas before full development",
        "Faster time-to-market with MVP approach",
        "Higher product-market fit success",
        "Continuous product improvement"
      ]
    },
  ];

  const openDetailModal = (service) => {
    setSelectedService(service);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setTimeout(() => {
      setSelectedService(null);
    }, 300);
  };

  const ServiceCard = ({ service }) => (
    <div className="service-card">
      <div className="service-card-image-container">
        <img src={service.image} alt={service.title} className="service-card-image" />
        <button className="service-card-action-button" onClick={() => openDetailModal(service)}>
          <span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="service-card-content">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-description">{service.description}</p>
        <ul className="service-card-highlights">
          {service.highlights.slice(0, 3).map((highlight, idx) => (
            <li key={idx}>
              <div className="highlight-indicator"></div>
              {highlight}
            </li>
          ))}
          {service.highlights.length > 3 && (
            <li>
              <div className="highlight-indicator"></div>
              +{service.highlights.length - 3} more
            </li>
          )}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <section ref={sectionRef} className="services-section" id="services">
        <div className="services-container">
          <h2 className={`services-heading ${isSectionVisible ? "heading-visible" : ""}`}>
            Comprehensive <span>Digital Solutions</span>
          </h2>

          <p className={`services-subheading ${isSectionVisible ? "subheading-visible" : ""}`}>
            From concept to deployment, we deliver cutting-edge digital solutions
            that drive growth and transform businesses through innovative
            technology.
          </p>

          <Swiper
            spaceBetween={24}
            slidesPerView={4}
            className="services-carousel"
            breakpoints={{
              1400: { slidesPerView: 4 },
              1100: { slidesPerView: 3 },
              760: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            {services.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div
                  className={`service-card-wrapper ${
                    isSectionVisible ? "card-animated" : ""
                  } animation-${item.animationDirection}`}
                  style={{ transitionDelay: `${0.6 + index * 0.15}s` }}
                >
                  <ServiceCard service={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Service Detail Modal */}
      {isDetailModalOpen && (
        <div className={`service-modal-overlay ${isDetailModalOpen ? 'modal-active' : ''}`}>
          <div className="service-modal-content" ref={modalContainerRef}>
            <button className="service-modal-close-button" onClick={closeDetailModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {selectedService && (
              <div className="service-modal-body">
                <div className="service-modal-header">
                  <img src={selectedService.image} alt={selectedService.title} className="service-modal-image" />
                  <div className="service-modal-title-section">
                    <h2 className="service-modal-title">{selectedService.title}</h2>
                    <p className="service-modal-introduction">{selectedService.detailedDescription}</p>
                  </div>
                </div>

                <div className="service-modal-sections">
                  <div className="service-modal-section">
                    <h3 className="service-section-title">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Key Features
                    </h3>
                    <ul className="service-features-list">
                      {selectedService.capabilities.map((capability, idx) => (
                        <li key={idx}>
                          <div className="feature-checkmark"></div>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-modal-section">
                    <h3 className="service-section-title">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Business Benefits
                    </h3>
                    <ul className="service-benefits-list">
                      {selectedService.advantages.map((advantage, idx) => (
                        <li key={idx}>
                          <div className="benefit-symbol">✓</div>
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-modal-section">
                    <h3 className="service-section-title">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Quick Facts
                    </h3>
                    <div className="quick-facts-container">
                      <div className="fact-item">
                        <div className="fact-value">100%</div>
                        <div className="fact-label">Custom Solutions</div>
                      </div>
                      <div className="fact-item">
                        <div className="fact-value">24/7</div>
                        <div className="fact-label">Support Available</div>
                      </div>
                      <div className="fact-item">
                        <div className="fact-value">30 Days</div>
                        <div className="fact-label">Free Maintenance</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-modal-footer">
                  <button className="service-modal-action-button" onClick={() => {/* Add your action here */}}>
                    Get Started with {selectedService.title}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <p className="service-modal-note">Schedule a free 30-minute consultation to discuss your project requirements.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default DigitalSolutions;