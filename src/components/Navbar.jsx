import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // 🔥 Theme logic: LocalStorage check
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  
  const location = useLocation();
  const primaryPhone = "919956197272";

  // --- 🔥 Theme Toggle Logic (Pure Black & White) ---
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHireClick = () => {
    const message = encodeURIComponent("Hello Mahaveer Bouncer, I want to hire your security services.");
    window.open(`https://wa.me/${primaryPhone}?text=${message}`, '_blank');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-4 md:pt-6 px-4 font-sans">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center justify-between px-5 md:px-10 py-3 transition-all duration-500
          ${scrolled 
            ? 'w-full md:w-[85%] bg-white/90 dark:bg-black/40 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-full shadow-xl' 
            : 'w-full bg-transparent border-transparent'
          }`}
      >
        
        {/* Left: Branding (Pure Black & White Swap) */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="p-1.5 bg-black dark:bg-white rounded-lg shadow-lg transition-colors duration-500"
          >
            <ShieldCheck size={18} className="text-white dark:text-black" strokeWidth={2.5} />
          </motion.div>
          <span className="text-black dark:text-white font-bold tracking-tighter text-lg md:text-xl uppercase transition-colors duration-500">
            Mahaveer<span className="opacity-40 italic hidden xs:inline">Bouncer</span>
          </span>
        </Link>

        {/* Middle: Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`group relative text-[10px] uppercase tracking-[0.2em] font-bold transition-colors 
                ${location.pathname === link.path 
                  ? 'text-black dark:text-white' 
                  : 'text-zinc-400 dark:text-white/50 hover:text-black dark:hover:text-white'}`}
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black dark:bg-white"
                whileHover={{ width: '100%' }}
              />
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Theme Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 text-black dark:text-white/70 hover:opacity-100 transition-all"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.button 
            onClick={handleHireClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black dark:bg-white text-white dark:text-black text-[10px] md:text-[12px] font-black px-4 md:px-7 py-2 md:py-2.5 rounded-full flex items-center gap-2 transition-all shadow-lg whitespace-nowrap"
          >
            <span className="hidden xs:inline">HIRE NOW</span>
            <span className="xs:hidden font-bold">HIRE</span>
            <ArrowRight size={14} />
          </motion.button>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-3xl p-8 lg:hidden shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold tracking-widest uppercase transition-colors
                    ${location.pathname === link.path ? 'text-black dark:text-white' : 'text-zinc-400 dark:text-white/40'}`}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={handleHireClick}
                className="w-full py-4 bg-black dark:bg-white text-white dark:text-black font-black rounded-xl uppercase tracking-widest text-xs mt-4"
              >
                Hire on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;