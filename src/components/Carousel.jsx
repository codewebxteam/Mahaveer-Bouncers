import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1555933935-d0743bc139c2?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-play logic: Har 5 second mein change hoga
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* --- The Image Slider --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Overlay for cinematic look */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          
          <img 
            src={images[index]} 
            alt={`Slide ${index}`} 
            className="h-full w-full object-cover filter brightness-75 grayscale-[20%]"
          />
        </motion.div>
      </AnimatePresence>

      {/* --- Floating Content Over the Carousel --- */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          key={`content-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-[#F0F8FF]/60 text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
            Operational Excellence
          </span>
          <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            Elite <br /> <span className="opacity-20 italic font-light">Environments</span>
          </h2>
        </motion.div>
      </div>

      {/* --- Progress Indicators (Dots) --- */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[2px] transition-all duration-500 ${
              i === index ? 'w-12 bg-white' : 'w-6 bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Bottom Vignette */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent z-20"></div>
    </section>
  );
};

export default Carousel;