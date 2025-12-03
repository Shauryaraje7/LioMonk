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
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const modalRef = useRef(null);

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

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  const cards = [
    {
      id: 1,
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
      fullDescription: "Our AI Solutions harness the power of artificial intelligence to transform your business operations. We develop intelligent chatbots that provide 24/7 customer support, implement machine learning algorithms for predictive analytics, and automate complex business processes. Our AI systems learn and adapt to your business needs, providing actionable insights and improving operational efficiency by up to 60%.",
      features: [
        "Custom AI Chatbot Development",
        "Predictive Analytics & Machine Learning Models",
        "Process Automation & Optimization",
        "Real-time Data Processing & Insights",
        "Natural Language Processing (NLP)",
        "Computer Vision Solutions"
      ],
      benefits: [
        "Reduce operational costs by 40%",
        "Improve customer satisfaction by 80%",
        "24/7 automated customer support",
        "Real-time decision making capabilities"
      ]
    },
    {
      id: 2,
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
      fullDescription: "We build custom CRM solutions that transform how you manage customer relationships. Our CRM systems are tailored to your specific business processes, integrating seamlessly with your existing tools. From lead capture to customer retention, we create comprehensive solutions that provide a 360-degree view of your customer journey.",
      features: [
        "Custom Lead Management Pipeline",
        "Automated Workflow & Task Management",
        "Customer Behavior Analytics",
        "Sales Forecasting & Reporting",
        "Multi-channel Integration",
        "Mobile CRM Access"
      ],
      benefits: [
        "Increase sales conversion by 35%",
        "Reduce manual data entry by 70%",
        "Improve customer retention by 45%",
        "Real-time sales performance tracking"
      ]
    },
    {
      id: 3,
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
      fullDescription: "Our Full Stack Solutions provide complete end-to-end development services. We handle everything from initial concept and design to development, testing, deployment, and maintenance. Using modern technologies and agile methodologies, we ensure your project is delivered on time and within budget while meeting the highest quality standards.",
      features: [
        "Full-cycle Software Development",
        "Agile Project Management",
        "Comprehensive Testing & QA",
        "Cloud Deployment & DevOps",
        "Scalable Architecture Design",
        "Post-launch Support & Maintenance"
      ],
      benefits: [
        "Single point of accountability",
        "Faster time-to-market",
        "Seamless team collaboration",
        "Reduced project management overhead"
      ]
    },
    {
      id: 4,
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
      fullDescription: "We create stunning, high-performance websites that not only look great but also deliver exceptional user experiences and strong SEO results. Using modern frameworks and best practices, we build websites that are fast, secure, and scalable. Whether you need a simple landing page or a complex web application, we've got you covered.",
      features: [
        "Responsive & Mobile-first Design",
        "Advanced SEO Optimization",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "CMS Integration (WordPress, Strapi)",
        "Performance Optimization"
      ],
      benefits: [
        "Improve site speed by 60%",
        "Increase organic traffic by 50%",
        "Better user engagement & conversion",
        "Cross-platform compatibility"
      ]
    },
    {
      id: 5,
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
      fullDescription: "Our Cloud & DevOps services ensure your applications run smoothly, scale effortlessly, and remain secure. We implement modern DevOps practices and leverage cloud infrastructure to automate deployment, monitoring, and scaling processes. From cloud migration to continuous integration and delivery, we optimize your entire development lifecycle.",
      features: [
        "Cloud Infrastructure Setup (AWS, Azure, GCP)",
        "CI/CD Pipeline Implementation",
        "Containerization with Docker & Kubernetes",
        "Infrastructure as Code (IaC)",
        "Performance Monitoring & Alerting",
        "Security & Compliance Management"
      ],
      benefits: [
        "Reduce deployment time by 80%",
        "Improve system reliability by 99.9%",
        "Automatic scaling based on demand",
        "Reduced infrastructure costs"
      ]
    },
    {
      id: 6,
      title: "Product Engineering",
      text: "Complete lifecycle support—from ideation and prototyping to testing and product launch—for startups and businesses.",
      points: ["Prototyping", "Testing", "Optimization", "Launch Strategy"],
      img: i6,
      direction: "middle",
      fullDescription: "Product Engineering is our holistic approach to building successful digital products. We guide you through every stage of the product lifecycle - from initial idea validation and prototyping to development, testing, and successful market launch. Our methodology combines user-centered design with agile development to create products that users love.",
      features: [
        "Product Discovery & Strategy",
        "MVP Development & Prototyping",
        "User Experience Design",
        "Quality Assurance & Testing",
        "Product Analytics & Optimization",
        "Go-to-Market Strategy"
      ],
      benefits: [
        "Validate ideas before full development",
        "Faster time-to-market with MVP approach",
        "Higher product-market fit success",
        "Continuous product improvement"
      ]
    },
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedCard(null);
    }, 300);
  };

  const SolutionCard = ({ card }) => (
    <div className="solution-card">
      <div className="card-top">
        <img src={card.img} alt={card.title} className="card-image" />
        <button className="card-arrow" onClick={() => openModal(card)}>
          <span>➜</span>
        </button>
      </div>
      <div className="card-body">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-text">{card.text}</p>
        <ul className="card-points">
          {card.points.slice(0, 3).map((point, idx) => (
            <li key={idx}>
              <div className="check-icon"></div>
              {point}
            </li>
          ))}
          {card.points.length > 3 && (
            <li>
              <div className="check-icon"></div>
              +{card.points.length - 3} more
            </li>
          )}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <section ref={sectionRef} className="digital-section" id="services"  >
        <div className="digital-inner">
          <h2 className={`digital-title ${isVisible ? "title-visible" : ""}`}>
            Comprehensive <span>Digital Solutions</span>
          </h2>

          <p
            className={`digital-subtitle ${isVisible ? "subtitle-visible" : ""}`}
          >
            From concept to deployment, we deliver cutting-edge digital solutions
            that drive growth and transform businesses through innovative
            technology.
          </p>

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
              <SwiperSlide key={item.id}>
                <div
                  className={`solution-card-wrapper ${
                    isVisible ? "card-visible" : ""
                  } card-${item.direction}`}
                  style={{ transitionDelay: `${0.6 + index * 0.15}s` }}
                >
                  <SolutionCard card={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className={`modal-overlay ${isModalOpen ? 'modal-open' : ''}`}>
          <div className="modal-content" ref={modalRef}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {selectedCard && (
              <div className="modal-body">
                <div className="modal-header">
                  <img src={selectedCard.img} alt={selectedCard.title} className="modal-image" />
                  <div className="modal-title-section">
                    <h2 className="modal-title">{selectedCard.title}</h2>
                    <p className="modal-intro">{selectedCard.fullDescription}</p>
                  </div>
                </div>

                <div className="modal-sections">
                  <div className="modal-section">
                    <h3 className="section-title">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Key Features
                    </h3>
                    <ul className="features-list">
                      {selectedCard.features.map((feature, idx) => (
                        <li key={idx}>
                          <div className="feature-check"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3 className="section-title">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Business Benefits
                    </h3>
                    <ul className="benefits-list">
                      {selectedCard.benefits.map((benefit, idx) => (
                        <li key={idx}>
                          <div className="benefit-icon">✓</div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3 className="section-title">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Quick Facts
                    </h3>
                    <div className="quick-facts">
                      <div className="fact-item">
                        <div className="fact-number">100%</div>
                        <div className="fact-text">Custom Solutions</div>
                      </div>
                      <div className="fact-item">
                        <div className="fact-number">24/7</div>
                        <div className="fact-text">Support Available</div>
                      </div>
                      <div className="fact-item">
                        <div className="fact-number">30 Days</div>
                        <div className="fact-text">Free Maintenance</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button className="modal-cta" onClick={() => {/* Add your action here */}}>
                    Get Started with {selectedCard.title}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <p className="modal-note">Schedule a free 30-minute consultation to discuss your project requirements.</p>
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