import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/images/Group 2.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav-container') && !e.target.closest('.hamburger')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Handle section scrolling on home page
  const scrollToSection = (sectionId) => {
    closeMenu();
    
    if (location.pathname === '/') {
      // If already on home page, scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        // Clear any hash from URL first
        window.history.replaceState(null, null, ' ');
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If not on home page, navigate to home without hash first
      navigate('/');
      // Then scroll after navigation
      setTimeout(() => {
        const checkSection = () => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        };
        setTimeout(checkSection, 100);
      }, 100);
    }
  };

  // Handle Home link click - always go to top of home page
  const handleHomeClick = (e) => {
    closeMenu();
    
    if (location.pathname === '/') {
      // If already on home page, scroll to top and clear hash
      e.preventDefault();
      window.history.replaceState(null, null, '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If not on home page, the Link component will handle navigation
  };

  // Handle Logo click - same as Home
  const handleLogoClick = (e) => {
    closeMenu();
    
    if (location.pathname === '/') {
      // If already on home page, scroll to top and clear hash
      e.preventDefault();
      window.history.replaceState(null, null, '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If not on home page, the Link component will handle navigation
  };

  // Check if we need to scroll after page load (if URL has hash)
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const sectionId = location.hash.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className={`nav-container ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-logo">
        <Link to="/" onClick={handleLogoClick}>
          <img src={logo} alt="Liomonk Logo" />
        </Link>
      </div>

      <input 
        type="checkbox" 
        id="menu-toggle" 
        className="menu-toggle" 
        checked={isMenuOpen}
        onChange={handleMenuToggle}
      />
      
      <label htmlFor="menu-toggle" className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
        <li>
          <Link to="/" onClick={handleHomeClick}>Home</Link>
        </li>
        
        <li>
          <a 
            href="#services" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
          >
            Services
          </a>
        </li>
        
        <li>
          <a 
            href="#solutions" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('solutions');
            }}
          >
            Solutions
          </a>
        </li>
        
        <li>
          <a 
            href="#insights" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('insights');
            }}
          >
            Blogs
          </a>
        </li>
        
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>

      <Link to="/contact" className="contact-nav-btn" onClick={closeMenu}>
        Get Started
      </Link>
    </nav>
  );
}

export default Navbar;