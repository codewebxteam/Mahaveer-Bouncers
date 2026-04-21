import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import BouncerCanvasScroll from "./components/BouncerCanvasScroll";
import Carousel from "./components/Carousel";
import Message from "./components/Message";
import About from "./components/About";
import Contact from "./components/Contact";
import AboutPage from "./pages/AboutPage"; 
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

// Home Page Wrapper
const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <Hero />
    <Carousel />
    <BouncerCanvasScroll />
    <Message />
    <Services />
    <About />
    <Contact />
  </motion.div>
);

// Wrapper to handle Page Refresh/Scroll on Route Change
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // 🌊 Smooth Scroll Initialization
    const lenis = new Lenis({ smooth: true, lerp: 0.08 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    // 🎯 GSAP & ScrollTrigger Cleanup on route change
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf("*");
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#722F37]">
      <Navbar />
      <main>
        {/* 🚀 Key is the secret to fixing "removeChild" error */}
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

import { motion } from "framer-motion";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;