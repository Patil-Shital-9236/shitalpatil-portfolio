import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'ai-ml' | 'fullstack-backend' | 'cybersecurity';
  categoryLabel: string;
  date: string;
  credentialId: string;
  badge: string;
  badgeColor: string;
  description: string;
  skills: string[];
  certificateUrl: string;
}

const certificatesList: Certificate[] = [
  {
    id: 'genai-literacy',
    title: 'Generative AI Literacy Certification',
    issuer: 'LinkedIn / AI Literacy',
    category: 'ai-ml',
    categoryLabel: 'AI & MACHINE LEARNING',
    date: 'Verified 2026',
    credentialId: 'LNKD-GENAI-9236',
    badge: '🤖 GENERATIVE AI LITERACY',
    badgeColor: 'from-[#4285F4]/20 via-[#D4AF37]/20 to-black border-[#4285F4]/50',
    description:
      'Certified in Generative AI Literacy, covering fundamental concepts of Large Language Models (LLMs), prompt engineering principles, AI productivity integration, and enterprise AI usage.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Productivity'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7452352062857699328?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7452352062857699328%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=UCYo6Bz%2FSRWySKesCm5vVw%3D%3D',
  },
  {
    id: 'sankey-arise',
    title: 'Sankey Arise Program Certificate',
    issuer: 'Sankey Solutions',
    category: 'fullstack-backend',
    categoryLabel: 'FULL STACK & BACKEND',
    date: 'Verified 2026',
    credentialId: 'SNKY-ARISE-2026',
    badge: '⚡ SANKEY ARISE PROGRAM',
    badgeColor: 'from-[#D4AF37]/20 via-[#8C6D4F]/20 to-black border-[#D4AF37]/50',
    description:
      'Completed the intensive Sankey Arise Training Program specializing in software engineering, full stack architecture, data structures, and production web applications.',
    skills: ['Software Engineering', 'Full Stack Development', 'Data Structures', 'Web Applications'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7452312394036326400?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7452312394036326400%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=1FjkBEnqQPyE%2FwT1I9AdLQ%3D%3D',
  },
  {
    id: 'cybersecurity-simulation',
    title: 'Cybersecurity Job Simulation Certificate',
    issuer: 'Forage / Cybersecurity',
    category: 'cybersecurity',
    categoryLabel: 'CYBERSECURITY & CLOUD',
    date: 'Verified 2026',
    credentialId: 'FORAGE-CYBER-8812',
    badge: '🛡️ CYBERSECURITY SIMULATION',
    badgeColor: 'from-[#EA4335]/20 via-[#FBBC05]/20 to-black border-[#EA4335]/50',
    description:
      'Completed the Cybersecurity Virtual Experience Program on Forage, analyzing network threat intelligence, security posture management, vulnerability assessments, and incident response.',
    skills: ['Cybersecurity', 'Threat Analysis', 'Network Defense', 'Vulnerability Assessment'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7388916103143669760?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7388916103143669760%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=smdy2cuYRcyfy%2FR9cq%2Fe1A%3D%3D',
  },
  {
    id: 'gcp-genai-leader',
    title: 'Google Cloud Generative AI Leader Track Certificate',
    issuer: 'Google Cloud',
    category: 'ai-ml',
    categoryLabel: 'AI & MACHINE LEARNING',
    date: 'Verified 2026',
    credentialId: 'GCP-GENAI-7719',
    badge: '☁️ GOOGLE CLOUD GENAI LEADER',
    badgeColor: 'from-[#4285F4]/20 via-[#34A853]/20 to-black border-[#4285F4]/50',
    description:
      'Awarded official Google Cloud Generative AI Leader Track certificate for demonstrating expertise in Gemini models, LLM architectures, Vertex AI, and cloud AI deployment.',
    skills: ['Google Cloud', 'Generative AI', 'Gemini Models', 'Vertex AI', 'Cloud AI'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7383833829851049985?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7383833829851049985%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=4aZUD8r5QiCpz2GZKWJc9A%3D%3D',
  },
  {
    id: 'forage-software-cert',
    title: 'Forage Software Engineering Job Simulation Certificate',
    issuer: 'Forage',
    category: 'fullstack-backend',
    categoryLabel: 'FULL STACK & BACKEND',
    date: 'Verified 2026',
    credentialId: 'FORAGE-SDE-5021',
    badge: '💼 FORAGE JOB SIMULATION',
    badgeColor: 'from-[#34A853]/20 via-[#4285F4]/20 to-black border-[#34A853]/50',
    description:
      'Completed practical software engineering job simulation on Forage solving real-world development tasks, code refactoring, API integration, and software design.',
    skills: ['Software Engineering', 'Code Refactoring', 'API Integration', 'Software Design'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7381689084806807552?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7381689084806807552%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=TbupIQcqRauLeuk%2B8QPWLQ%3D%3D',
  },
  {
    id: 'naukri-campus',
    title: 'NaukriCampus Certificate of Participation',
    issuer: 'NaukriCampus',
    category: 'fullstack-backend',
    categoryLabel: 'FULL STACK & BACKEND',
    date: 'Verified 2026',
    credentialId: 'NAUKRI-CAMPUS-2026',
    badge: '🏆 NAUKRICAMPUS PARTICIPATION',
    badgeColor: 'from-[#FFA116]/20 via-[#D4AF37]/20 to-black border-[#FFA116]/50',
    description:
      'Official Certificate of Participation in NaukriCampus national engineering skill evaluation and competitive technical assessment.',
    skills: ['Technical Assessment', 'Coding Evaluation', 'Problem Solving', 'Engineering Fundamentals'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7370824233939238912?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7370824233939238912%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=NrhCe%2FXsS7%2BtZ82vTRkFtg%3D%3D',
  },
  {
    id: 'cognifyz-ml-internship',
    title: 'Machine Learning Internship Certificate – Cognifyz',
    issuer: 'Cognifyz Technologies',
    category: 'ai-ml',
    categoryLabel: 'AI & MACHINE LEARNING',
    date: 'Verified 2025',
    credentialId: 'CGNZ-ML-INT-2025',
    badge: '🧠 MACHINE LEARNING INTERNSHIP',
    badgeColor: 'from-[#8C6D4F]/20 via-[#D4AF37]/20 to-black border-[#D4AF37]/50',
    description:
      'Successfully completed Machine Learning Internship at Cognifyz Technologies building predictive ML models, data preprocessing pipelines, evaluation metrics, and algorithm implementations.',
    skills: ['Machine Learning', 'Python', 'Scikit-Learn', 'Data Analysis', 'Predictive Modeling'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7276629654143123456?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7276629654143123456%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=lJ4SaLQtQnu%2F7asdEs8I2g%3D%3D',
  },
  {
    id: 'backend-internship',
    title: 'Backend Web Development Internship Certificate',
    issuer: 'Tech Internship Program',
    category: 'fullstack-backend',
    categoryLabel: 'FULL STACK & BACKEND',
    date: 'Verified 2025',
    credentialId: 'BEND-INT-2025-9011',
    badge: '⚙️ BACKEND WEB DEVELOPMENT INTERNSHIP',
    badgeColor: 'from-[#D4AF37]/20 via-[#120F0C]/40 to-black border-[#D4AF37]/50',
    description:
      'Awarded Backend Web Development Internship completion for designing RESTful APIs, database schema design, asynchronous server handlers, and scalable backend logic.',
    skills: ['Backend Development', 'Node.js', 'REST APIs', 'Database Architecture', 'Server Security'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7272643905207115777?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7272643905207115777%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=qtAYnyZaTHGfwZl3zdFakg%3D%3D',
  },
];

type FilterType = 'all' | 'ai-ml' | 'fullstack-backend' | 'cybersecurity';

export const CertificationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filteredCertificates =
    activeFilter === 'all'
      ? certificatesList
      : certificatesList.filter((c) => c.category === activeFilter);

  return (
    <section
      id="certifications"
      className="relative w-full bg-black text-[#E8DFD8] font-sans pt-20 pb-32 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/3 right-1/4 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[32rem] h-[32rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / OFFICIAL CERTIFICATES ({certificatesList.length})
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              CERTIFICATES &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              VERIFIED CREDENTIALS.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-md leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore all {certificatesList.length} verified certificates, internship awards, and Google Cloud credentials with interactive document previews and direct verification links.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 border-b border-[#8C6D4F]/25 pb-6">
          {[
            { id: 'all', label: `ALL CERTIFICATES (${certificatesList.length})` },
            {
              id: 'ai-ml',
              label: `AI & MACHINE LEARNING (${certificatesList.filter((c) => c.category === 'ai-ml').length})`,
            },
            {
              id: 'fullstack-backend',
              label: `FULL STACK & BACKEND (${certificatesList.filter((c) => c.category === 'fullstack-backend').length})`,
            },
            {
              id: 'cybersecurity',
              label: `CYBERSECURITY (${certificatesList.filter((c) => c.category === 'cybersecurity').length})`,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as FilterType)}
              className={`px-4 py-2 text-[10px] sm:text-[10.5px] font-medium tracking-[0.18em] uppercase rounded-sm transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_18px_rgba(212,175,55,0.35)]'
                  : 'bg-[#120F0C] text-[#BDB0A4] border border-[#8C6D4F]/30 hover:border-[#D4AF37]/60 hover:text-white'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid - Ultra Modern Glassmorphism Cards with Visual Certificate Graphic Frames */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-7"
          >
            {filteredCertificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="relative flex flex-col justify-between p-6 sm:p-7 bg-[#090806]/95 backdrop-blur-xl border border-[#8C6D4F]/35 hover:border-[#D4AF37] rounded-2xl transition-all duration-500 group overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:shadow-[0_25px_60px_rgba(212,175,55,0.18)] hover:-translate-y-1"
              >
                {/* Top Gold Horizon Edge */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* ================= VISUAL CERTIFICATE GRAPHIC DOCUMENT BOX ================= */}
                <div 
                  onClick={() => setSelectedCert(cert)}
                  className="cursor-pointer relative w-full mb-6 p-5 rounded-xl border-2 border-[#D4AF37]/40 group-hover:border-[#D4AF37] bg-gradient-to-br from-[#16120E] via-[#0D0B08] to-[#050403] shadow-inner transition-all duration-500 overflow-hidden group/doc"
                >
                  {/* Subtle Parchment Watermark Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                  {/* Top Document Header */}
                  <div className="flex items-center justify-between border-b border-[#D4AF37]/25 pb-3 mb-3 relative z-10">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 flex items-center justify-center text-sm shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                        📜
                      </div>
                      <div>
                        <span className="block text-[9.5px] font-mono tracking-[0.22em] text-[#F7E7C4] uppercase font-bold">
                          OFFICIAL CREDENTIAL
                        </span>
                        <span className="block text-[8.5px] font-mono text-[#8C6D4F]">
                          ID: {cert.credentialId}
                        </span>
                      </div>
                    </div>

                    <span className="text-[9px] font-mono text-[#D4AF37] bg-black/70 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                      {cert.date}
                    </span>
                  </div>

                  {/* Middle Document Body */}
                  <div className="text-center py-2 relative z-10 space-y-1">
                    <span className="block text-[8.5px] font-mono text-[#8C6D4F] uppercase tracking-[0.2em]">
                      THIS CERTIFIES THAT
                    </span>
                    <span 
                      className="block text-xl text-white font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(247,231,196,0.3)]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      SHITAL PATIL
                    </span>
                    <span className="block text-[9px] font-mono text-[#D4AF37] tracking-wider uppercase">
                      HAS SUCCESSFULLY COMPLETED {cert.badge.replace(/^[^\s]+\s*/, '')}
                    </span>
                  </div>

                  {/* Bottom Verification Seal Stamp */}
                  <div className="flex items-center justify-between border-t border-[#D4AF37]/25 pt-3 mt-2 relative z-10">
                    <span className="text-[8.5px] font-mono text-[#34A853] flex items-center space-x-1 font-semibold">
                      <span>VERIFIED &amp; VALIDATED</span>
                      <span>✓</span>
                    </span>

                    <span className="text-[8.5px] font-mono text-[#D4AF37] group-hover/doc:translate-x-1 transition-transform uppercase font-medium">
                      CLICK TO ENLARGE 🔍
                    </span>
                  </div>
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Issuer */}
                    <span
                      className="block text-[10px] font-mono tracking-[0.22em] uppercase text-[#8C6D4F] mb-1.5"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      ISSUED BY {cert.issuer.toUpperCase()}
                    </span>

                    {/* Certificate Title */}
                    <h3
                      className="text-2xl sm:text-3xl font-normal tracking-tight text-[#F4EBE2] mb-3 group-hover:text-white transition-colors uppercase leading-[0.95]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {cert.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-xs text-[#BDB0A4] font-light leading-[1.8] mb-6 tracking-wide"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#8C6D4F]/20">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 text-[9.5px] font-medium tracking-[0.14em] uppercase rounded-md border border-[#8C6D4F]/35 bg-[#120F0C] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-colors"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 border border-[#D4AF37]/70 bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[10.5px] font-medium tracking-[0.18em] uppercase transition-all duration-300 rounded-md shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>VIEW PREVIEW</span>
                        <span className="text-xs">🔍</span>
                      </button>

                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#EAD8C7] hover:text-[#F7E7C4] text-[10.5px] font-medium tracking-[0.18em] uppercase transition-all duration-300 rounded-md"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>VERIFY ON LINKEDIN</span>
                        <span className="text-xs">📄</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ================= CERTIFICATE MODAL POPUP ================= */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full rounded-3xl border-2 border-[#D4AF37] bg-[#0E0C0A] p-8 sm:p-10 shadow-[0_25px_90px_rgba(212,175,55,0.3)] overflow-hidden max-h-[90vh] overflow-y-auto"
              >
                {/* Gold Top Flare */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7E7C4] to-[#D4AF37]" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 text-[#A8988B] hover:text-white text-lg w-9 h-9 rounded-full border border-[#8C6D4F]/40 bg-[#14100D] flex items-center justify-center transition-colors z-20"
                >
                  ✕
                </button>

                {/* Certificate Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/15 text-2xl mb-3 shadow-[0_0_25px_rgba(212,175,55,0.35)]">
                    📜
                  </div>
                  <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37]">
                    OFFICIAL CERTIFICATE DOCUMENT PREVIEW
                  </span>
                  <h3
                    className="text-3xl sm:text-4xl text-white font-normal uppercase leading-tight mt-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {selectedCert.title}
                  </h3>
                  <span className="text-xs font-mono text-[#A8988B] block mt-1">
                    ISSUED BY {selectedCert.issuer.toUpperCase()} • {selectedCert.date}
                  </span>
                </div>

                {/* Visual Certificate Canvas inside Modal */}
                <div className="p-6 rounded-2xl border-2 border-[#D4AF37]/60 bg-gradient-to-b from-[#18130E] via-[#0E0C0A] to-[#060504] mb-6 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

                  <div className="text-center relative z-10 space-y-3">
                    <span className="block text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.3em]">
                      CERTIFICATE OF ACHIEVEMENT
                    </span>
                    <span className="block text-xs font-mono text-[#A8988B]">
                      THIS ACKNOWLEDGES THAT
                    </span>
                    <span 
                      className="block text-3xl sm:text-4xl text-white font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F7E7C4] to-[#C99E5D]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      SHITAL PATIL
                    </span>
                    <span className="block text-xs font-mono text-[#D4AF37] max-w-md mx-auto leading-relaxed">
                      HAS SUCCESSFULLY ACQUIRED CREDENTIAL FOR <br />
                      <strong className="text-white">{selectedCert.title}</strong>
                    </span>
                  </div>
                </div>

                {/* Certificate Specifications Box */}
                <div className="p-5 rounded-xl border border-[#8C6D4F]/40 bg-[#050403] mb-6 space-y-3 shadow-inner">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8C6D4F]">RECIPIENT:</span>
                    <span className="text-[#F7E7C4] font-semibold">SHITAL PATIL</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8C6D4F]">CREDENTIAL ID:</span>
                    <span className="text-[#F7E7C4] font-semibold">{selectedCert.credentialId}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8C6D4F]">ISSUING ORGANIZATION:</span>
                    <span className="text-[#F7E7C4] font-semibold">{selectedCert.issuer}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8C6D4F]">VERIFICATION STATUS:</span>
                    <span className="text-[#34A853] font-semibold">VERIFIED &amp; ACTIVE ✓</span>
                  </div>
                </div>

                <p
                  className="text-xs sm:text-sm text-[#BDB0A4] font-light leading-relaxed mb-6"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {selectedCert.description}
                </p>

                {/* Verified Skills */}
                <div className="mb-6">
                  <span className="block text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] uppercase mb-2">
                    VERIFIED COMPETENCIES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 text-[10px] font-medium tracking-[0.14em] uppercase rounded-md border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#F7E7C4]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#8C6D4F]/30">
                  <a
                    href={selectedCert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 border border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-medium tracking-[0.2em] uppercase transition-all hover:bg-[#F7E7C4] rounded-md shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span>OPEN LINKEDIN DOCUMENT</span>
                    <span className="text-xs">📄</span>
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-3.5 border border-[#8C6D4F]/40 bg-[#120F0C] text-[#A8988B] hover:text-white text-xs font-medium tracking-[0.2em] uppercase transition-colors rounded-md"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    CLOSE PREVIEW
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationsSection;
