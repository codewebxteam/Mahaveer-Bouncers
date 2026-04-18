import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Cinematic Bouncer Image
  const bouncerImg = "https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VjdXJpdHklMjBndWFyZHxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <section className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-[#F0F8FF] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            WE ARE <br /> <span className="opacity-20 italic font-light">THE SHIELD</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Elite Bouncer Force India ki sabse trusted decentralized security agency hai. 
            Hum bouncers provide nahi karte, hum <span className="text-white font-bold">"Safe Ecosystem"</span> banate hain.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-[#F0F8FF] text-4xl font-black">500+</h4>
              <p className="text-zinc-600 uppercase text-[10px] tracking-[0.3em] font-bold">Verified Units</p>
            </div>
            <div>
              <h4 className="text-[#F0F8FF] text-4xl font-black">24/7</h4>
              <p className="text-zinc-600 uppercase text-[10px] tracking-[0.3em] font-bold">Rapid Response</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image with Error Handling */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square group"
        >
          <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
            
            <img 
              src={bouncerImg} 
              alt="Elite Bouncer" 
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                console.error("About Image Load Failed");
                e.target.src = "https://via.placeholder.com/800x800/050505/F0F8FF?text=FORCE+UNIT";
              }}
            />

            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-[#F0F8FF] font-black text-2xl tracking-tighter uppercase leading-none">
                Elite <br /> <span className="opacity-50 italic font-light">Personnel</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;