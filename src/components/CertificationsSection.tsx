import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: '100 Days Badge – 2025',
    issuer: 'LeetCode',
    description: 'Solved 110+ LeetCode problems including Easy, Medium and Hard, earning the badge for consistent problem-solving practice.',
  },
  {
    title: 'Google Cloud GenAI',
    issuer: 'Google',
    description: 'Completed Google Cloud–Generative AI Leader Track gaining knowledge of Generative AI and Cloud technologies.',
  },
];

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full bg-black text-[#E8DFD8] font-sans pt-12 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04.5 / CERTIFICATIONS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            ACHIEVEMENTS & AWARDS
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-6 sm:p-8 bg-[#0A0806] border border-[#8C6D4F]/20 hover:border-[#D4AF37]/50 rounded-sm transition-colors group overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <span 
                  className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.issuer}
                </span>
                <h3 
                  className="text-2xl sm:text-3xl tracking-wide text-[#F4EBE2] mb-3 group-hover:text-white transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {cert.title}
                </h3>
                <p 
                  className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
