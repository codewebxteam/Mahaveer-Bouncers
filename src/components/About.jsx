import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, Cpu } from 'lucide-react';

const About = () => {
  // Cinematic Bouncer Image
  const bouncerImg = "https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?w=800&auto=format&fit=crop&q=60";

  const features = [
    {
      icon: <Clock size={20} />,
      title: "24/7 Deployment",
      desc: "Instant elite security solutions for your work and home environments."
    },
    {
      icon: <Users size={20} />,
      title: "Expert Force",
      desc: "Our Mahavir units have been protecting assets for over 15+ years."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Verified Units",
      desc: "ISO 9001:2015 & PSARA Licensed. CAPSI certified elite force."
    },
    {
      icon: <Cpu size={20} />,
      title: "Tactical Tech",
      desc: "Advanced surveillance and reporting systems for seamless protection."
    }
  ];

  return (
    <section className="relative py-24 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-block px-4 py-1 rounded-full border border-[#722F37]/50 bg-[#722F37]/10 text-[#722F37] text-xs font-bold tracking-widest uppercase">
              Operational Since 19 Years
            </div>

            <h2 className="text-[#F0F8FF] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              MAHAVIR <br /> 
              <span className="text-[#722F37] italic font-light opacity-80">BOUNCERS</span>
            </h2>

            <div className="space-y-6">
              <p className="text-zinc-400 text-lg leading-relaxed">
                Mahavir Bouncers is the premier security force in Delhi NCR, Noida, and Gurgaon. 
                With 19 years of elite experience, we combine <span className="text-white font-bold">Raw Power & Technology</span> to deliver absolute security.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {features.map((item, idx) => (
                  <div key={idx} className="group flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#722F37]/30 transition-all">
                    <div className="text-[#722F37] mt-1 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[#F0F8FF] text-sm font-bold uppercase tracking-tight">{item.title}</h4>
                      <p className="text-zinc-500 text-xs mt-1 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats Summary */}
            <div className="flex gap-10 pt-6 border-t border-white/10">
              <div>
                <h4 className="text-[#722F37] text-3xl font-black">1500+</h4>
                <p className="text-zinc-600 uppercase text-[10px] tracking-[0.2em] font-bold">Active Bouncers</p>
              </div>
              <div>
                <h4 className="text-[#F0F8FF] text-3xl font-black">PSARA</h4>
                <p className="text-zinc-600 uppercase text-[10px] tracking-[0.2em] font-bold">Govt Licensed</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visual Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] group"
          >
            {/* Katha Glow Effect */}
            <div className="absolute -inset-2 bg-[#722F37]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[#722F37]/30 bg-zinc-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
              
              <img 
                src={bouncerImg} 
                alt="Mahavir Bouncers Tactical" 
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-1000"
              />

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-8 left-8 z-20 space-y-2">
                <div className="w-12 h-1 bg-[#722F37]"></div>
                <p className="text-[#F0F8FF] font-black text-2xl tracking-tighter uppercase leading-none">
                  MAHAVIR <br /> <span className="opacity-50 italic font-light">TACTICAL UNIT</span>
                </p>
                <p className="text-white/40 text-[9px] uppercase tracking-[0.2em]">Surveillance | Guarding | Rapid Action</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;