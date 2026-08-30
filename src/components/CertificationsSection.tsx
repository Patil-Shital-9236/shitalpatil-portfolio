import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  tech: string;
  category: 'ai-ml' | 'fullstack-backend' | 'cybersecurity';
  description: string;
  skills: string[];
  certificateUrl: string;
  thumbnail: string;
}

const certificatesList: Certificate[] = [
  {
    id: 'genai-literacy',
    title: 'Generative AI Literacy Certification',
    issuer: 'LinkedIn / AI Literacy',
    tech: 'Generative AI & LLMs',
    category: 'ai-ml',
    description:
      'Certified in Generative AI Literacy, covering fundamental concepts of Large Language Models (LLMs), prompt engineering principles, AI productivity integration, and enterprise AI usage.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Productivity'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7452352062857699328?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7452352062857699328%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=UCYo6Bz%2FSRWySKesCm5vVw%3D%3D',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'sankey-arise',
    title: 'Sankey Arise Program Certificate',
    issuer: 'Sankey Solutions',
    tech: 'Full Stack & Software Eng.',
    category: 'fullstack-backend',
    description:
      'Completed the intensive Sankey Arise Training Program specializing in software engineering, full stack architecture, data structures, and production web applications.',
    skills: ['Software Engineering', 'Full Stack Development', 'Data Structures', 'Web Applications'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7452312394036326400?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7452312394036326400%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=1FjkBEnqQPyE%2FwT1I9AdLQ%3D%3D',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'cybersecurity-simulation',
    title: 'Cybersecurity Job Simulation Certificate',
    issuer: 'Forage / Cybersecurity',
    tech: 'Cybersecurity & Defense',
    category: 'cybersecurity',
    description:
      'Completed the Cybersecurity Virtual Experience Program on Forage, analyzing network threat intelligence, security posture management, vulnerability assessments, and incident response.',
    skills: ['Cybersecurity', 'Threat Analysis', 'Network Defense', 'Vulnerability Assessment'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7388916103143669760?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7388916103143669760%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=smdy2cuYRcyfy%2FR9cq%2Fe1A%3D%3D',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'gcp-genai-leader',
    title: 'Google Cloud Generative AI Leader Track Certificate',
    issuer: 'Google Cloud',
    tech: 'Google Cloud & Vertex AI',
    category: 'ai-ml',
    description:
      'Awarded official Google Cloud Generative AI Leader Track certificate for demonstrating expertise in Gemini models, LLM architectures, Vertex AI, and cloud AI deployment.',
    skills: ['Google Cloud', 'Generative AI', 'Gemini Models', 'Vertex AI', 'Cloud AI'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7383833829851049985?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7383833829851049985%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=4aZUD8r5QiCpz2GZKWJc9A%3D%3D',
    thumbnail: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'forage-software-cert',
    title: 'Forage Software Engineering Job Simulation Certificate',
    issuer: 'Forage',
    tech: 'Software Engineering',
    category: 'fullstack-backend',
    description:
      'Completed practical software engineering job simulation on Forage solving real-world development tasks, code refactoring, API integration, and software design.',
    skills: ['Software Engineering', 'Code Refactoring', 'API Integration', 'Software Design'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7381689084806807552?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7381689084806807552%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=TbupIQcqRauLeuk%2B8QPWLQ%3D%3D',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'naukri-campus',
    title: 'NaukriCampus Certificate of Participation',
    issuer: 'NaukriCampus',
    tech: 'Competitive Engineering',
    category: 'fullstack-backend',
    description:
      'Official Certificate of Participation in NaukriCampus national engineering skill evaluation and competitive technical assessment.',
    skills: ['Technical Assessment', 'Coding Evaluation', 'Problem Solving', 'Engineering Fundamentals'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7370824233939238912?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7370824233939238912%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=NrhCe%2FXsS7%2BtZ82vTRkFtg%3D%3D',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'cognifyz-ml-internship',
    title: 'Machine Learning Internship Certificate – Cognifyz',
    issuer: 'Cognifyz Technologies',
    tech: 'Machine Learning & Python',
    category: 'ai-ml',
    description:
      'Successfully completed Machine Learning Internship at Cognifyz Technologies building predictive ML models, data preprocessing pipelines, evaluation metrics, and algorithm implementations.',
    skills: ['Machine Learning', 'Python', 'Scikit-Learn', 'Data Analysis', 'Predictive Modeling'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7276629654143123456?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7276629654143123456%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=lJ4SaLQtQnu%2F7asdEs8I2g%3D%3D',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'backend-internship',
    title: 'Backend Web Development Internship Certificate',
    issuer: 'Tech Internship Program',
    tech: 'Backend & REST APIs',
    category: 'fullstack-backend',
    description:
      'Awarded Backend Web Development Internship completion for designing RESTful APIs, database schema design, asynchronous server handlers, and scalable backend logic.',
    skills: ['Backend Development', 'Node.js', 'REST APIs', 'Database Architecture', 'Server Security'],
    certificateUrl:
      'https://www.linkedin.com/feed/update/urn:li:activity:7272643905207115777?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7272643905207115777%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=qtAYnyZaTHGfwZl3zdFakg%3D%3D',
    thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop',
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
      {/* Atharv Portfolio Exact Styles */}
      <style>{`
        .portfolio10-cert-card {
          background: #0f0f0f;
          border: 1px solid rgba(229,228,226,0.35);
          border-radius: 18px;
          overflow: hidden;
          transition: 0.4s ease;
          text-align: left;
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }

        .portfolio10-cert-card:hover {
          transform: translateY(-12px);
          border-color: #E5E4E2;
          box-shadow: 0 0 25px rgba(229, 228, 226, 0.25);
        }

        .portfolio10-cert-image {
          height: 190px;
          overflow: hidden;
        }

        .portfolio10-cert-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.6s ease;
        }

        .portfolio10-cert-card:hover .portfolio10-cert-image img {
          transform: scale(1.1);
        }

        .portfolio10-cert-content {
          padding: 25px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .portfolio10-cert-content h3 {
          font-size: 20px;
          margin-bottom: 12px;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          color: #ffffff;
        }

        .portfolio10-cert-content p {
          font-size: 14px;
          color: #b5b5b5;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .portfolio10-cert-tech {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .portfolio10-cert-tech span {
          font-size: 11px;
          padding: 0 14px;
          border-radius: 20px;
          border: 1px solid #E5E4E2;
          color: #fff;
          height: 32px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }

        .portfolio10-cert-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .portfolio10-btn-demo {
          text-decoration: none;
          font-size: 11px;
          padding: 0 14px;
          border-radius: 20px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 32px;
          transition: 0.3s ease;
          background: transparent;
          border: 1px solid #E5E4E2;
          color: #ffffff;
          cursor: pointer;
          white-space: nowrap;
        }

        .portfolio10-btn-demo:hover {
          background: #E5E4E2;
          color: #0b0b0b;
          box-shadow: 0 0 18px rgba(229,228,226,0.6);
        }
      `}</style>

      {/* Background Glows */}
      <div className="absolute top-1/3 right-1/4 w-[36rem] h-[36rem] bg-[#E5E4E2]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#E5E4E2]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / CERTIFICATIONS ({certificatesList.length})
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#E5E4E2]/80 via-white/40 to-transparent" />
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
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E5E4E2] to-[#707070] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              CERTIFICATES &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#CCCCCC] to-[#555555]">
              VERIFIED CREDENTIALS.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#b5b5b5] max-w-md leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore all {certificatesList.length} verified certificates, internship awards, and Google Cloud credentials with interactive document previews and direct verification links.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 border-b border-white/10 pb-6">
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
              className={`px-4 py-2 text-[10px] sm:text-[10.5px] font-medium tracking-[0.18em] uppercase rounded-full transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-[#E5E4E2] text-black shadow-[0_0_18px_rgba(229,228,226,0.6)]'
                  : 'bg-[#0f0f0f] text-[#b5b5b5] border border-white/20 hover:border-[#E5E4E2] hover:text-white'
              }`}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid - Exact Atharv Portfolio Card Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filteredCertificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="portfolio10-cert-card group h-[420px] flex flex-col w-full"
              >
                {/* Image Preview Container */}
                <div className="portfolio10-cert-image shrink-0 relative overflow-hidden bg-white/5 flex items-center justify-center">
                  <img src={cert.thumbnail} alt={cert.title} />
                  
                  {/* Subtle Badge Overlay */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[9px] font-mono text-[#E5E4E2]">
                    {cert.issuer}
                  </div>
                </div>

                {/* Content Container */}
                <div className="portfolio10-cert-content flex flex-col flex-grow">
                  <h3 className="line-clamp-2" title={cert.title}>
                    {cert.title}
                  </h3>

                  <p className="line-clamp-2" title={cert.description}>
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10 gap-3">
                    <div className="portfolio10-cert-tech mb-0 flex-1 w-full">
                      <span className="w-full" title={cert.tech}>
                        {cert.tech}
                      </span>
                    </div>

                    <div className="portfolio10-cert-actions flex-1 w-full">
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="portfolio10-btn-demo w-full"
                      >
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ================= ATHARV EXACT MODAL VIEW ================= */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-[#0b0b0b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/50">
                  <h3 className="text-xl font-bold text-white pr-8 font-sans">
                    {selectedCert.title}
                  </h3>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 text-white/50 hover:text-white rounded-full hover:bg-white/10 transition-colors shrink-0"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Preview Body */}
                <div className="p-4 flex flex-col items-center justify-center bg-black/20 w-full min-h-[50vh] max-h-[70vh] overflow-y-auto">
                  <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden border border-white/10 mb-4 bg-black">
                    <img
                      src={selectedCert.thumbnail}
                      alt={selectedCert.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <span className="text-xs font-mono text-[#E5E4E2] uppercase tracking-widest mb-1">
                        ISSUED BY {selectedCert.issuer}
                      </span>
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {selectedCert.title}
                      </h4>
                      <p className="text-xs text-white/70 max-w-2xl">
                        {selectedCert.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 w-full justify-start">
                    {selectedCert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-between p-4 border-t border-white/10 bg-black/50">
                  <span className="text-xs text-white/60 font-mono">
                    STATUS: VERIFIED &amp; VALIDATED ✓
                  </span>

                  <div className="flex items-center space-x-3">
                    <a
                      href={selectedCert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-full border border-[#E5E4E2] bg-[#E5E4E2] text-black font-semibold text-xs hover:bg-white transition-all shadow-[0_0_15px_rgba(229,228,226,0.4)]"
                    >
                      Verify on LinkedIn ↗
                    </a>
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-xs hover:bg-white/10 transition-colors"
                    >
                      Close
                    </button>
                  </div>
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
