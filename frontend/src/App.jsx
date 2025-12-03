import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global.css";

// Import Navbar
import Navbar from "./components/Navbar";

// Import components
import Hero from "./components/Hero";
import DigitalSolutions from "./components/DigitalSolutions";
import InnovativeSolutions from "./components/InnovativeSolutions";
import Insights from "./components/Insights";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

// Blog pages
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Blog4 from "./pages/Blog4";
import Blog5 from "./pages/Blog5";
import Blog6 from "./pages/Blog6";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <DigitalSolutions />
              <InnovativeSolutions />
              <Insights />
              <Footer />
            </>
          }
        />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />
        
        {/* BLOG DETAIL PAGES */}
        <Route path="/blog/ai-solutions" element={<Blog1 />} />
        <Route path="/blog/ml-production" element={<Blog2 />} />
        <Route path="/blog/web3-dapps" element={<Blog3 />} />
        <Route path="/blog/llm-applications" element={<Blog4 />} />
        <Route path="/blog/ai-automation" element={<Blog5 />} />
        <Route path="/blog/ai-ethics" element={<Blog6 />} />
      </Routes>
    </Router>
  );
}

export default App;