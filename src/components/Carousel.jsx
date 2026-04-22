import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Import images (IMPORTANT FIX)
import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";

const images = [img1, img2, img3, img3];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#0A1D56] dark:bg-[#050505]">

      {/* 🔥 Responsive Height */}
      <div className="w-full h-[70vh] md:h-screen p-2 md:p-6">

        {/* 🔥 Border Container */}
        <div className="relative w-full h-full 
        rounded-xl md:rounded-3xl 
        overflow-hidden border border-white/10 shadow-2xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              {/* ✅ Image */}
              <img
                src={images[index]}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* 🔥 Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-blue-900/30 to-black/60"></div>
            </motion.div>
          </AnimatePresence>

          {/* 🔘 Dots */}
          <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-[3px] md:h-1 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-8 md:w-12 bg-blue-600'
                    : 'w-3 md:w-4 bg-white/40'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Carousel;