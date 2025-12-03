import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global.css";

import Hero from "./components/Hero";
import DigitalSolutions from "./components/DigitalSolutions";
import InnovativeSolutions from "./components/InnovativeSolutions";
import Insights from "./components/Insights";
import Footer from "./components/Footer";

// Blog pages
import Blog1 from "./pages/Blog1";
// import Blog2 from "./pages/Blog2";
// import Blog3 from "./pages/Blog3";
// import Blog4 from "./pages/Blog4";
// import Blog5 from "./pages/Blog5";
// import Blog6 from "./pages/Blog6";

function App() {
  return (
    <Router>
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

        {/* BLOG PAGES */}
        <Route path="/blog/ai-solutions" element={<Blog1 />} />
        <Route path="/blog/iot-development" element={<Blog1 />} />
        <Route path="/blog/full-stack" element={<Blog1 />} />
        <Route path="/blog/web-development" element={<Blog1 />} />
        <Route path="/blog/iot-2" element={<Blog1 />} />
        <Route path="/blog/ai-2" element={<Blog1 />} />
      </Routes>
    </Router>
  );
}

export default App;
