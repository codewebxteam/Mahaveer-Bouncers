import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, UserCheck, PartyPopper, Building2, Briefcase } from 'lucide-react';

const services = [
  {
    title: "Private Security Guards",
    desc: "Fully committed units staying vigilant 24/7 for total security assurance and peace of mind.",
    icon: <Shield className="text-[#722F37]" size={32} />,
    img: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Event Security",
    desc: "Ensuring safety for professional and social events so you can celebrate without worries.",
    icon: <PartyPopper className="text-[#722F37]" size={32} />,
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Personal Security (PSO)",
    desc: "Trained ex-servicemen Guardians prioritizing your safety with unparalleled expertise.",
    icon: <UserCheck className="text-[#722F37]" size={32} />,
    img: "https://images.unsplash.com/photo-1590402444587-43d765678190?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Bouncer Services",
    desc: "Verified male and female bouncers to elevate your events and keep the environment safe.",
    icon: <Users className="text-[#722F37]" size={32} />,
    img: "https://images.unsplash.com/photo-1555933935-d0743bc139c2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Facility Management",
    desc: "Efficiency meets excellence in the upkeep and care of your space for comfort and productivity.",
    icon: <Building2 className="text-[#722F37]" size={32} />,
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Office Security",
    desc: "Safeguarding your workspace and empowering success so you can focus on business growth.",
    icon: <Briefcase className="text-[#722F37]" size={32} />,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  }
];

const Services = () => {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#F0F8FF] text-5xl md:text-7xl font-black uppercase tracking-tighter"
            >
              OUR <br /> <span className="text-[#722F37] italic font-light opacity-80">SERVICES</span>
            </motion.h2>
            <p className="text-zinc-500 mt-4 max-w-xl text-sm leading-relaxed uppercase tracking-widest">
              At Mahavir Bouncers, we deliver security excellence through highly trained and verified professionals.
            </p>
          </div>
          <div className="h-px flex-1 bg-white/10 hidden md:block mb-4 ml-10"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/20 border border-white/5 rounded-3xl overflow-hidden hover:border-[#722F37]/40 transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-[#722F37]/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 z-20 p-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-[#F0F8FF] text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-[#722F37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 h-12 overflow-hidden">
                  {service.desc}
                </p>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-[10px] font-black tracking-[0.3em] uppercase text-white/40 group-hover:text-white transition-colors"
                >
                  Request Deployment <span className="text-[#722F37] text-lg">→</span>
                </motion.button>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#722F37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Watermark */}
      <div className="absolute -bottom-10 -left-10 text-[12rem] font-black text-white/[0.01] pointer-events-none select-none">
        SERVICES
      </div>
    </section>
  );
};

export default Services;