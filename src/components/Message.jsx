import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Fingerprint, Eye, MapPin } from 'lucide-react';

const Message = () => {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#722F37]/5 blur-[150px] rounded-full -mr-40 -mt-40"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Strategic Branding */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6 text-[#722F37]">
                <MapPin size={18} />
                <span className="text-xs font-black uppercase tracking-[0.4em]">Strategic HQ: Lucknow</span>
              </div>
              
              <h2 className="text-[#F0F8FF] text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
                SECURE <br /> 
                <span className="text-[#722F37]">UP REGION</span> <br />
                <span className="opacity-20 italic font-light text-4xl md:text-6xl tracking-normal">Risk Intelligence.</span>
              </h2>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-20 bg-[#722F37]"></div>
                <p className="text-[#722F37] font-bold uppercase tracking-[0.3em] text-xs">
                  Mahavir Tactical Unit
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Professional Mission Statement */}
          <div className="lg:col-span-7 bg-zinc-900/20 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 relative z-10"
            >
              <h3 className="text-[#F0F8FF] text-xl md:text-2xl font-bold uppercase tracking-tight border-l-4 border-[#722F37] pl-6">
                Our Mission: Safeguarding Physical & Digital Assets
              </h3>

              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Our aim is to provide high-level security to your premises and safeguard your assets using elite expertise. At <strong>Mahavir Bouncers</strong>, we identify and mitigate all foreseeable risks through personnel trained by experts from law enforcement, defense, and paramilitary backgrounds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                <div className="flex gap-4 group">
                  <div className="p-3 bg-[#722F37]/10 rounded-xl group-hover:bg-[#722F37]/20 transition-colors">
                    <Fingerprint className="text-[#722F37]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-black uppercase tracking-widest mb-1">Risk Mitigation</h4>
                    <p className="text-zinc-500 text-[11px] leading-tight">Combatting fraud and identity theft in a connected world.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="p-3 bg-[#722F37]/10 rounded-xl group-hover:bg-[#722F37]/20 transition-colors">
                    <ShieldAlert className="text-[#722F37]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-black uppercase tracking-widest mb-1">Expert Training</h4>
                    <p className="text-zinc-500 text-[11px] leading-tight">Personnel trained for high-pressure tactical situations.</p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-500 text-sm italic border-t border-white/5 pt-6 leading-relaxed">
                "Mahavir Bouncers Lucknow delivers an edge in corporate intelligence and risk mitigation. Our operatives possess proven track records from premier security and investigative agencies."
              </p>

              <div className="flex items-center justify-between pt-4">
                <div className="flex flex-col">
                  <span className="text-white font-black uppercase tracking-tighter text-lg">Mahavir Tactical</span>
                  <span className="text-[#722F37] text-[10px] font-bold uppercase tracking-[0.3em]">Lucknow Division</span>
                </div>
                <Eye className="text-white/5 absolute -right-4 -bottom-4" size={120} />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Message;