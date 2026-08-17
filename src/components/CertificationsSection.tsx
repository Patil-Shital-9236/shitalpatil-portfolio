import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'cloud-ai' | 'algorithms' | 'fullstack';
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
    id: 'google-devops',
    title: 'Gemini for DevOps Engineers – Official Skill Badge',
    issuer: 'Google Cloud Skills Boost',
    category: 'cloud-ai',
    categoryLabel: 'GOOGLE CLOUD & AI',
    date: 'Issued June 2026',
    credentialId: 'GCP-DEV-2026-9236',
    badge: '☁️ GOOGLE CLOUD SKILL BADGE',
    badgeColor: 'from-[#4285F4]/20 to-[#34A853]/20 border-[#4285F4]/50',
    description:
      'Official Google Cloud Skill Badge demonstrating proficiency in AI-assisted software delivery pipelines, cloud infrastructure automation, intelligent log analysis, and automated CI/CD workflows using Gemini AI on Google Cloud Platform.',
    skills: ['Google Cloud', 'Gemini AI', 'DevOps Automation', 'CI/CD Pipelines', 'Cloud Architecture'],
    certificateUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'google-security',
    title: 'Gemini for Security Engineers – Specialization Certificate',
    issuer: 'Google Cloud Skills Boost',
    category: 'cloud-ai',
    categoryLabel: 'GOOGLE CLOUD & AI',
    date: 'Issued June 2026',
    credentialId: 'GCP-SEC-2026-8812',
    badge: '🛡️ SECURITY SPECIALIZATION BADGE',
    badgeColor: 'from-[#EA4335]/20 to-[#FBBC05]/20 border-[#EA4335]/50',
    description:
      'Verified Google Cloud specialization in AI-driven security operations, threat detection intelligence, IAM posture management, and automated security policy synthesis.',
    skills: ['Cloud Security', 'Gemini Security', 'Threat Detection', 'IAM Policy', 'Security Operations'],
    certificateUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'google-genai-leader',
    title: 'Google Cloud Generative AI Leader Track Certificate',
    issuer: 'Google Cloud Training',
    category: 'cloud-ai',
    categoryLabel: 'GOOGLE CLOUD & AI',
    date: 'Issued May 2026',
    credentialId: 'GCP-GENAI-2026-7719',
    badge: '🚀 GENERATIVE AI LEADER CERTIFICATE',
    badgeColor: 'from-[#D4AF37]/20 to-[#8C6D4F]/20 border-[#D4AF37]/60',
    description:
      'Comprehensive Google certification certifying mastery of Large Language Model (LLM) architectures, prompt engineering strategies, Gemini API integrations, and enterprise AI transformation.',
    skills: ['Generative AI', 'LLM Architecture', 'Gemini API', 'Prompt Engineering', 'Enterprise AI'],
    certificateUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'google-responsible-ai',
    title: 'Responsible AI: Applying AI Principles with Google Cloud',
    issuer: 'Google Cloud',
    category: 'cloud-ai',
    categoryLabel: 'GOOGLE CLOUD & AI',
    date: 'Issued May 2026',
    credentialId: 'GCP-ETH-2026-3401',
    badge: '⚖️ RESPONSIBLE AI GOVERNANCE BADGE',
    badgeColor: 'from-[#34A853]/20 to-[#4285F4]/20 border-[#34A853]/50',
    description:
      'Official Google accreditation in implementing Responsible AI frameworks, model fairness auditing, bias mitigation, safety benchmarks, and ethical AI deployment principles.',
    skills: ['Responsible AI', 'AI Ethics', 'Bias Mitigation', 'Safety Evaluation', 'Governance'],
    certificateUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'leetcode-100-days',
    title: 'LeetCode 100+ Days Problem Solving Award (2025)',
    issuer: 'LeetCode Platform',
    category: 'algorithms',
    categoryLabel: 'ALGORITHMS & CODING',
    date: 'Earned 2025',
    credentialId: 'LC-100-BADGE-2025',
    badge: '🏆 LEETCODE 100 DAYS BADGE',
    badgeColor: 'from-[#FFA116]/20 to-[#D4AF37]/20 border-[#FFA116]/60',
    description:
      'Recognized problem-solving award for completing over 110+ Data Structures & Algorithms challenges (Arrays, Hash Maps, Dynamic Programming, Trees, Graphs, System Design) with consistent daily practice.',
    skills: ['Data Structures', 'Algorithms', 'Dynamic Programming', 'Problem Solving', 'System Design'],
    certificateUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'genai-streamlit',
    title: 'Develop GenAI Apps with Gemini & Streamlit Certificate',
    issuer: 'Google Cloud & Streamlit',
    category: 'cloud-ai',
    categoryLabel: 'GOOGLE CLOUD & AI',
    date: 'Issued 2025',
    credentialId: 'GCP-STRM-2025-5021',
    badge: '🤖 FULL STACK AI APP BADGE',
    badgeColor: 'from-[#FF4B4B]/20 to-[#D4AF37]/20 border-[#FF4B4B]/50',
    description:
      'Practical engineering certificate verifying ability to build and deploy end-to-end Generative AI applications leveraging Google Gemini API, vector database retrieval, and Streamlit web interfaces.',
    skills: ['Python', 'Streamlit', 'Gemini API', 'Vector Search', 'Full Stack AI'],
    certificateUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'prompt-engineering',
    title: 'Text Prompt Engineering & LLM Optimization',
    issuer: 'DeepLearning.AI / Google Cloud',
    category: 'algorithms',
    categoryLabel: 'ALGORITHMS & CODING',
    date: 'Issued 2025',
    credentialId: 'DLAI-PROMPT-2025-4190',
    badge: '🧠 PROMPT ENGINEERING CERTIFICATE',
    badgeColor: 'from-[#8C6D4F]/20 to-[#D4AF37]/20 border-[#D4AF37]/50',
    description:
      'Advanced prompt engineering certificate covering Few-Shot Prompting, Chain-of-Thought (CoT) reasoning, System Role Instructions, LLM parameter tuning, and output formatting.',
    skills: ['Prompt Engineering', 'Chain-of-Thought', 'System Roles', 'LLM Tuning', 'AI Inference'],
    certificateUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'fullstack-web-cert',
    title: 'Full Stack & REST API Engineering Certificate',
    issuer: 'Enterprise Web Certification',
    category: 'fullstack',
    categoryLabel: 'FULL STACK',
    date: 'Issued 2025',
    credentialId: 'FS-CERT-2025-9011',
    badge: '⚡ FULL STACK CERTIFICATION',
    badgeColor: 'from-[#D4AF37]/20 to-[#120F0C]/40 border-[#D4AF37]/60',
    description:
      'Comprehensive engineering certificate covering asynchronous RESTful API design, Node.js Express server architectures, PostgreSQL/MongoDB database integration, and React frontend systems.',
    skills: ['Node.js', 'Express.js', 'React.js', 'REST APIs', 'MongoDB', 'SQL'],
    certificateUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
];

type FilterType = 'all' | 'cloud-ai' | 'algorithms' | 'fullstack';

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
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

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
            05 / OFFICIAL CERTIFICATES & CREDENTIALS ({certificatesList.length})
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              CERTIFICATES &
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              VERIFIED CREDENTIALS.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-md leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Verified Google Cloud skill badges, LeetCode 100+ Days award certificate, Generative AI specializations, and full-stack software credentials.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 border-b border-[#8C6D4F]/25 pb-6">
          {[
            { id: 'all', label: `ALL CERTIFICATES (${certificatesList.length})` },
            {
              id: 'cloud-ai',
              label: `GOOGLE CLOUD & AI (${certificatesList.filter((c) => c.category === 'cloud-ai').length})`,
            },
            {
              id: 'algorithms',
              label: `ALGORITHMS & CODING (${certificatesList.filter((c) => c.category === 'algorithms').length})`,
            },
            {
              id: 'fullstack',
              label: `FULL STACK (${certificatesList.filter((c) => c.category === 'fullstack').length})`,
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

        {/* Certificates Grid */}
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
                className="relative flex flex-col justify-between p-7 sm:p-8 bg-[#0A0806] border border-[#8C6D4F]/30 hover:border-[#D4AF37] rounded-xl transition-all duration-300 group overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]"
              >
                {/* Top Border Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />

                {/* Visual Certificate Frame Banner */}
                <div className={`mb-6 p-4 rounded-lg bg-gradient-to-r ${cert.badgeColor} border flex items-center justify-between`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-black/60 border border-[#D4AF37]/60 flex items-center justify-center text-sm">
                      📜
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono tracking-[0.2em] text-[#F7E7C4] uppercase font-semibold">
                        VERIFIED CREDENTIAL
                      </span>
                      <span className="block text-[9px] font-mono text-[#A8988B]">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#D4AF37] bg-black/50 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Issuer */}
                    <span
                      className="block text-[10px] font-mono tracking-[0.22em] uppercase text-[#A8988B] mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      ISSUED BY {cert.issuer}
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
                          className="px-2.5 py-0.5 text-[9.5px] font-medium tracking-[0.14em] uppercase rounded-sm border border-[#8C6D4F]/30 bg-[#120F0C] text-[#E8D7C5] group-hover:border-[#D4AF37]/40 transition-colors"
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
                        className="flex-1 inline-flex items-center justify-center space-x-2 py-3 border border-[#D4AF37]/60 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[10.5px] font-medium tracking-[0.18em] uppercase transition-all duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>VIEW CERTIFICATE</span>
                        <span className="text-xs">🔍</span>
                      </button>

                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-2 py-3 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] text-[#EAD8C7] hover:text-white text-[10.5px] font-medium tracking-[0.18em] uppercase transition-all duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>LINKEDIN VERIFY</span>
                        <span className="text-xs">↗</span>
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
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full rounded-2xl border-2 border-[#D4AF37] bg-[#0E0C0A] p-8 sm:p-10 shadow-[0_25px_80px_rgba(212,175,55,0.25)] overflow-hidden"
              >
                {/* Gold Horizon Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F7E7C4] to-[#D4AF37]" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 text-[#A8988B] hover:text-white text-lg w-8 h-8 rounded-full border border-[#8C6D4F]/40 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>

                {/* Certificate Emblem Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/10 text-2xl mb-3 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    📜
                  </div>
                  <span className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37]">
                    OFFICIAL CERTIFICATE OF COMPLETION
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

                {/* Certificate Details Box */}
                <div className="p-5 rounded-lg border border-[#8C6D4F]/40 bg-[#050403] mb-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8C6D4F]">RECIPIENT:</span>
                    <span className="text-[#F7E7C4] font-semibold">SHITAL PATIL</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8C6D4F]">CREDENTIAL ID:</span>
                    <span className="text-[#F7E7C4] font-semibold">{selectedCert.credentialId}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8C6D4F]">STATUS:</span>
                    <span className="text-[#34A853] font-semibold">VERIFIED & ACTIVE ✓</span>
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
                        className="px-3 py-1 text-[10px] font-medium tracking-[0.14em] uppercase rounded-sm border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-[#F7E7C4]"
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
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 border border-[#D4AF37] bg-[#D4AF37] text-black text-xs font-medium tracking-[0.2em] uppercase transition-all hover:bg-[#F7E7C4]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    <span>VERIFY ON LINKEDIN</span>
                    <span className="text-xs">↗</span>
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-3.5 border border-[#8C6D4F]/40 bg-[#120F0C] text-[#A8988B] hover:text-white text-xs font-medium tracking-[0.2em] uppercase transition-colors"
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
