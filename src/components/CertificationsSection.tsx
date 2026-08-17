import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'cloud-ai' | 'algorithms' | 'fullstack';
  categoryLabel: string;
  date: string;
  badge: string;
  description: string;
  skills: string[];
  credentialUrl: string;
}

const certifications: Certification[] = [
  {
    id: 'gemini-devops',
    title: 'Gemini for DevOps Engineers – Skill Badge',
    issuer: 'Google Cloud',
    category: 'cloud-ai',
    categoryLabel: 'GOOGLE CLOUD & AI',
    date: 'Certified',
    badge: '☁️ GOOGLE CLOUD SKILL BADGE',
    description:
      'Mastered AI-assisted software delivery pipelines, cloud infrastructure automation, system monitoring, and intelligent DevOps workflows using Gemini on Google Cloud.',
    skills: ['Google Cloud', 'Gemini AI', 'DevOps Automation', 'CI/CD Pipelines'],
    credentialUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'gemini-security',
    title: 'Gemini for Security Engineers – Skill Badge',
    issuer: 'Google Cloud',
    category: 'cloud-ai',
    categoryLabel: 'GOOGLE CLOUD & AI',
    date: 'Certified',
    badge: '🛡️ SECURITY SPECIALIZATION',
    description:
      'Specialized in AI-driven threat intelligence, cloud security posture management, vulnerability assessment, and security policy automation using Google Cloud Security Tools.',
    skills: ['Cloud Security', 'Gemini AI', 'Threat Detection', 'IAM Policy'],
    credentialUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'google-genai-leader',
    title: 'Google Cloud – Generative AI Leader Track',
    issuer: 'Google',
    category: 'cloud-ai',
    categoryLabel: 'GOOGLE CLOUD & AI',
    date: 'Certified',
    badge: '🚀 GENERATIVE AI TRACK',
    description:
      'Acquired comprehensive mastery of Large Language Model (LLM) architectures, prompt engineering, Gemini API integrations, and enterprise generative AI solution strategies.',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'Gemini API'],
    credentialUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'responsible-ai',
    title: 'Responsible AI: Applying AI Principles with Google Cloud',
    issuer: 'Google Cloud',
    category: 'cloud-ai',
    categoryLabel: 'GOOGLE CLOUD & AI',
    date: 'Certified',
    badge: '⚖️ AI ETHICS & GOVERNANCE',
    description:
      'Accredited in implementing Google Cloud AI ethics frameworks, fairness evaluation, safety benchmarks, and responsible deployment practices in AI applications.',
    skills: ['Responsible AI', 'AI Ethics', 'Model Governance', 'Safety Evaluation'],
    credentialUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'leetcode-100-days',
    title: '100+ Days Problem Solving Badge (2025)',
    issuer: 'LeetCode',
    category: 'algorithms',
    categoryLabel: 'ALGORITHMS & CODING',
    date: 'Earned 2025',
    badge: '🏆 LEETCODE 100 DAYS BADGE',
    description:
      'Solved 110+ algorithmic challenges in Data Structures & Algorithms (Arrays, Dynamic Programming, Trees, Graphs, Hash Tables, and System Design) demonstrating problem-solving consistency.',
    skills: ['Data Structures', 'Algorithms', 'Dynamic Programming', 'Problem Solving'],
    credentialUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'genai-streamlit',
    title: 'Develop Gen AI Apps with Gemini & Streamlit',
    issuer: 'Google Cloud / Streamlit',
    category: 'cloud-ai',
    categoryLabel: 'GOOGLE CLOUD & AI',
    date: 'Certified',
    badge: '🤖 FULL STACK AI BADGE',
    description:
      'Engineered interactive Generative AI applications leveraging Gemini models, vector retrieval pipelines, and Streamlit frontend frameworks.',
    skills: ['Python', 'Streamlit', 'Gemini API', 'Vector Retrieval'],
    credentialUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'prompt-engineering',
    title: 'Text Prompt Engineering & LLM Optimization',
    issuer: 'DeepLearning.AI / Google Cloud',
    category: 'algorithms',
    categoryLabel: 'ALGORITHMS & CODING',
    date: 'Certified',
    badge: '🧠 PROMPT ENGINEERING',
    description:
      'Mastered advanced techniques in Few-Shot Prompting, Chain-of-Thought (CoT) reasoning, System Role Optimization, and LLM output tuning.',
    skills: ['Prompt Engineering', 'Chain of Thought', 'System Roles', 'LLM Tuning'],
    credentialUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
  {
    id: 'fullstack-web-cert',
    title: 'Full Stack & REST API Engineering Certificate',
    issuer: 'Enterprise Certification',
    category: 'fullstack',
    categoryLabel: 'FULL STACK',
    date: 'Certified',
    badge: '⚡ FULL STACK CERTIFICATION',
    description:
      'Certified in building RESTful Microservices, Node.js Express backend architectures, relational/NoSQL databases, and responsive React frontend applications.',
    skills: ['Node.js', 'Express', 'React.js', 'REST APIs', 'PostgreSQL / MongoDB'],
    credentialUrl: 'https://www.linkedin.com/in/shital-patil-365759237/',
  },
];

type FilterType = 'all' | 'cloud-ai' | 'algorithms' | 'fullstack';

export const CertificationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredCertifications =
    activeFilter === 'all'
      ? certifications
      : certifications.filter((c) => c.category === activeFilter);

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
            05 / CREDENTIALS & ACHIEVEMENTS ({certifications.length})
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
              CERTIFICATIONS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              SKILL BADGES & AWARDS.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-md leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Verified Google Cloud skill badges, LeetCode problem-solving awards, Generative AI specializations, and engineering credentials.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 border-b border-[#8C6D4F]/25 pb-6">
          {[
            { id: 'all', label: `ALL CREDENTIALS (${certifications.length})` },
            {
              id: 'cloud-ai',
              label: `GOOGLE CLOUD & AI (${certifications.filter((c) => c.category === 'cloud-ai').length})`,
            },
            {
              id: 'algorithms',
              label: `ALGORITHMS & CODING (${certifications.filter((c) => c.category === 'algorithms').length})`,
            },
            {
              id: 'fullstack',
              label: `FULL STACK (${certifications.filter((c) => c.category === 'fullstack').length})`,
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

        {/* Certifications Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-7"
          >
            {filteredCertifications.map((cert, idx) => (
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

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-sm border border-[#D4AF37]/30"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {cert.badge}
                      </span>
                      <span className="text-[10px] font-mono text-[#8C6D4F]">
                        {cert.date}
                      </span>
                    </div>

                    {/* Issuer & Title */}
                    <span
                      className="block text-[10px] font-mono tracking-[0.22em] uppercase text-[#A8988B] mb-1"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      ISSUED BY {cert.issuer}
                    </span>

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

                    {/* Action Button */}
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 w-full py-3 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[10.5px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VIEW LINKEDIN CREDENTIAL</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationsSection;
