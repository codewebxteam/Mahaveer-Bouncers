import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target } from 'lucide-react';

const floatingItemVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden transition-colors duration-500 bg-[#F5F5F7] dark:bg-[#050505]">
      
      {/* --- Background Glow Orbs --- */}
      {/* Light Mode: Milky White/Katha Glow | Dark Mode: Ice White Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#722F37]/5 dark:bg-white/5 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white dark:bg-[#F0F8FF]/5 blur-[120px] rounded-full"></div>

      {/* --- 3D Floating Elements --- */}
      <motion.div
        className="absolute top-[18%] left-[12%] p-5 bg-white/60 dark:bg-white/5 backdrop-blur-md border border-[#722F37]/10 dark:border-white/20 rounded-3xl shadow-xl hidden md:block"
        variants={floatingItemVariants}
        animate="animate"
      >
        <Shield size={38} className="text-[#722F37] dark:text-[#F0F8FF]" strokeWidth={1} />
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] left-[18%] p-4 bg-white/60 dark:bg-white/5 backdrop-blur-md border border-[#722F37]/5 dark:border-white/10 rounded-2xl hidden md:block"
        variants={{ animate: { ...floatingItemVariants.animate, y: [0, 15, 0] } }}
        animate="animate"
      >
        <Target size={28} className="text-[#722F37]/30 dark:text-[#F0F8FF]/60" strokeWidth={1.5} />
      </motion.div>

      <motion.div
        className="absolute top-[25%] right-[12%] px-6 py-2 bg-white dark:bg-white/10 backdrop-blur-xl border border-[#722F37]/10 dark:border-white/20 rounded-full flex items-center gap-3 shadow-lg hidden md:flex"
        variants={floatingItemVariants}
        animate="animate"
      >
        <div className="w-2 h-2 bg-[#722F37] dark:bg-[#F0F8FF] rounded-full animate-pulse shadow-[0_0_10px_#722F37] dark:shadow-[0_0_10px_#F0F8FF]"></div>
        <span className="text-[#722F37] dark:text-[#F0F8FF] text-[10px] font-black uppercase tracking-[0.3em]">Mahaveer Guard Force</span>
      </motion.div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center font-sans">
        
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-[#722F37]/10 dark:border-white/10 shadow-sm mb-8"
        >
          <span className="text-[#722F37]/70 dark:text-[#F0F8FF]/60 text-[10px] font-bold uppercase tracking-[0.4em]">
            Premium Security Experience
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[100px] font-black tracking-tighter leading-[0.9] mb-8 text-zinc-900 dark:text-white"
        >
          THE NEXT LEVEL <br /> 
          <span className="text-[#722F37] dark:text-[#F0F8FF] opacity-60 dark:opacity-40 italic font-light">OF PROTECTION.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-zinc-500 dark:text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium tracking-tight"
        >
          No more compromises. Hire Amethi's most elite, verified bouncers 
          with a single click. Security redefined for the modern world.
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;