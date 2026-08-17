import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  filterGroup: 'ai-ml' | 'fullstack-backend' | 'web-mobile';
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const allProjects: Project[] = [
  {
    id: 'resume-analyzer',
    number: '01',
    title: 'AI-Powered Resume Analyzer',
    category: 'AI / FULL STACK',
    filterGroup: 'ai-ml',
    description:
      'Engineered an intelligent resume screening & analysis platform that matches candidate resumes against job descriptions. Utilizes NLP and OpenAI API to extract key competencies, identify skill gaps, generate ATS match scores, and provide actionable candidate fit recommendations.',
    githubUrl: 'https://github.com/Patil-Shital-9236/resume-analyzer-frontend',
    liveUrl: 'https://resume-analyzer-frontend-eight-nu.vercel.app',
    tech: ['React.js', 'Node.js', 'Express', 'Python', 'NLP', 'OpenAI API', 'REST APIs'],
    metrics: [
      { label: 'PLATFORM', value: 'AI ATS Screener' },
      { label: 'ENGINE', value: 'NLP + OpenAI API' },
      { label: 'ARCHITECTURE', value: 'React + Node + Python' },
    ],
  },
  {
    id: 'academic-rag',
    number: '02',
    title: 'Academic RAG Study Assistant',
    category: 'RAG / LLM / AI',
    filterGroup: 'ai-ml',
    description:
      'Built a Retrieval-Augmented Generation (RAG) study assistant designed to ingest, chunk, and index academic literature and textbook PDFs into a vector database for semantic search and high-accuracy Q&A using Large Language Models.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Academic-RAG-Study-Assistant',
    tech: ['Python', 'LangChain', 'Vector DB', 'RAG Pipeline', 'Jupyter', 'LLMs'],
    metrics: [
      { label: 'PIPELINE', value: 'RAG Architecture' },
      { label: 'SEARCH', value: 'Vector Embeddings' },
      { label: 'DOMAIN', value: 'Academic Research' },
    ],
  },
  {
    id: 'industrial-material-selection',
    number: '03',
    title: 'Industrial Material Selection System',
    category: 'MACHINE LEARNING',
    filterGroup: 'ai-ml',
    description:
      'Developed a Streamlit & Machine Learning application that recommends alternative industrial engineering materials based on multi-parameter mechanical and thermal constraints using Nearest Neighbors algorithm.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Industrial-Material-Selection',
    tech: ['Python', 'Streamlit', 'Scikit-Learn', 'Nearest Neighbors', 'Pandas'],
    metrics: [
      { label: 'ALGORITHM', value: 'Nearest Neighbors' },
      { label: 'INTERFACE', value: 'Streamlit Web UI' },
      { label: 'APPLICATION', value: 'Industrial Recommendation' },
    ],
  },
  {
    id: 'jr-sde-assessment',
    number: '04',
    title: 'High-Performance Async Backend API',
    category: 'BACKEND / FASTAPI',
    filterGroup: 'fullstack-backend',
    description:
      'Architected a production-ready asynchronous API suite using FastAPI and MongoDB featuring complex aggregation pipelines, dynamic query filtering, cursor pagination, indexing optimization, and secure JWT authentication.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Jr.-SDE-Assessment',
    tech: ['Python', 'FastAPI', 'MongoDB', 'JWT Auth', 'Pydantic', 'AsyncIO'],
    metrics: [
      { label: 'FRAMEWORK', value: 'FastAPI (Async)' },
      { label: 'DATABASE', value: 'MongoDB Aggregation' },
      { label: 'AUTH', value: 'JWT Security' },
    ],
  },
  {
    id: 'employee-management-module',
    number: '05',
    title: 'Enterprise Employee Management Module',
    category: 'BACKEND / REST API',
    filterGroup: 'fullstack-backend',
    description:
      'Built a robust RESTful enterprise backend service with Node.js, Express, and Sequelize ORM managing workforce data, department hierarchies, role authorizations, and transactional audit trails.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Employee-Management-Module',
    tech: ['Node.js', 'Express.js', 'Sequelize ORM', 'MySQL', 'REST APIs'],
    metrics: [
      { label: 'ORM', value: 'Sequelize' },
      { label: 'SERVER', value: 'Node + Express' },
      { label: 'PATTERNS', value: 'MVC Architecture' },
    ],
  },
  {
    id: 'aarogya-assist',
    number: '06',
    title: 'Aarogya Assist (Medica AI)',
    category: 'HEALTHCARE AI / FULL STACK',
    filterGroup: 'ai-ml',
    description:
      'Crafted an intelligent healthcare guidance web application providing instant symptom analysis, preliminary triage support, medical info access, and emergency health guidance.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Aarogya-Assist-medica.ai-',
    liveUrl: 'https://aarogya-assist-medica-ai.vercel.app',
    tech: ['React.js', 'Tailwind CSS', 'Medical AI APIs', 'Vercel'],
    metrics: [
      { label: 'APPLICATION', value: 'Healthcare AI' },
      { label: 'DEPLOYMENT', value: 'Vercel Cloud' },
      { label: 'UX DESIGN', value: 'Responsive Care Portal' },
    ],
  },
  {
    id: 'psoriasis-classification',
    number: '07',
    title: 'Psoriasis Disease Classification CNN',
    category: 'DEEP LEARNING / VISION',
    filterGroup: 'ai-ml',
    description:
      'Trained a Deep Learning Convolutional Neural Network (CNN) for medical image classification to diagnose and classify psoriasis lesions from dermatological imagery with high diagnostic accuracy.',
    githubUrl: 'https://github.com/Patil-Shital-9236/PSORIASIS-CLASSIFICATION-USING-DEEP-LEARNING',
    tech: ['Python', 'Deep Learning', 'CNN', 'PyTorch / TensorFlow', 'OpenCV'],
    metrics: [
      { label: 'DOMAIN', value: 'Medical Computer Vision' },
      { label: 'MODEL', value: 'Deep CNN Classifier' },
      { label: 'INPUT', value: 'Dermatological Imagery' },
    ],
  },
  {
    id: 'smart-bank',
    number: '08',
    title: 'SmartBank Core Banking Engine',
    category: 'JAVA / SYSTEM DESIGN',
    filterGroup: 'fullstack-backend',
    description:
      'Engineered an Object-Oriented Banking System in Java implementing SOLID principles, featuring account lifecycle management, fund transfers, transaction auditing, and interest calculation modules.',
    githubUrl: 'https://github.com/Patil-Shital-9236/SmartBank',
    tech: ['Java', 'OOP Principles', 'Design Patterns', 'Data Structures'],
    metrics: [
      { label: 'LANGUAGE', value: 'Java SE' },
      { label: 'DESIGN', value: 'OOP / SOLID' },
      { label: 'SYSTEM', value: 'Core Financial Engine' },
    ],
  },
  {
    id: 'educare',
    number: '09',
    title: 'EduCare Learning Platform',
    category: 'EDTECH / FRONTEND',
    filterGroup: 'web-mobile',
    description:
      'Designed an accessible educational care web platform enabling students to explore interactive course modules, study materials, and academic guidance tools.',
    githubUrl: 'https://github.com/Patil-Shital-9236/EduCare',
    liveUrl: 'https://edu-care-five.vercel.app',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    metrics: [
      { label: 'TYPE', value: 'EdTech Portal' },
      { label: 'HOSTING', value: 'Vercel Deployment' },
      { label: 'STYLING', value: 'Custom CSS Grid' },
    ],
  },
  {
    id: 'educational-chatbot-kids',
    number: '10',
    title: 'Kids Educational AI Chatbot',
    category: 'AI CHATBOT / WEB',
    filterGroup: 'ai-ml',
    description:
      'Created an engaging, child-friendly conversational chatbot platform providing interactive learning prompts, fun Q&A sessions, and educational micro-lessons.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Educational_chatbot_for_kids',
    liveUrl: 'https://educational-chatbot-for-kids.vercel.app',
    tech: ['JavaScript', 'HTML5', 'Web Speech API', 'Vercel'],
    metrics: [
      { label: 'AUDIENCE', value: 'Kids Interactive Learning' },
      { label: 'FEATURE', value: 'Speech Synthesis' },
      { label: 'DEPLOYMENT', value: 'Vercel Cloud' },
    ],
  },
  {
    id: 'todo-list',
    number: '11',
    title: 'Task Tracker & Management App',
    category: 'WEB APPLICATION',
    filterGroup: 'web-mobile',
    description:
      'Built a sleek productivity task manager with real-time state persistence, category filtering, priority tagging, and responsive micro-interactions.',
    githubUrl: 'https://github.com/Patil-Shital-9236/ToDo_LIST',
    liveUrl: 'https://to-do-list-eta-bay-99.vercel.app',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage', 'Vercel'],
    metrics: [
      { label: 'STORAGE', value: 'LocalStorage Sync' },
      { label: 'SPEED', value: 'Instant State Updates' },
      { label: 'STATUS', value: 'Live Production' },
    ],
  },
  {
    id: 'pancard-tampering',
    number: '12',
    title: 'Pan Card Tampering Detection System',
    category: 'COMPUTER VISION',
    filterGroup: 'ai-ml',
    description:
      'Developed an automated document verification tool that uses Structural Similarity Index (SSIM) and contour analysis to detect forged or altered identity cards.',
    githubUrl: 'https://github.com/Patil-Shital-9236/PanCard_Temparing',
    tech: ['Python', 'OpenCV', 'SSIM Index', 'Image Processing', 'Scikit-Image'],
    metrics: [
      { label: 'METHOD', value: 'SSIM Comparison' },
      { label: 'FRAMEWORK', value: 'OpenCV + Scikit' },
      { label: 'USE CASE', value: 'Identity Fraud Prevention' },
    ],
  },
  {
    id: 'forest-fires-app',
    number: '13',
    title: 'Forest Fire Risk Analysis System',
    category: 'DATA SCIENCE',
    filterGroup: 'ai-ml',
    description:
      'Engineered a predictive analytics model evaluating meteorological conditions and Fire Weather Index (FWI) components to forecast forest fire occurrences.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Forest_Firers_App',
    tech: ['Python', 'Jupyter Notebook', 'Pandas', 'Scikit-Learn'],
    metrics: [
      { label: 'ANALYSIS', value: 'Predictive Modeling' },
      { label: 'INDICATORS', value: 'FWI Meteorological Data' },
      { label: 'STACK', value: 'Python + Scikit' },
    ],
  },
  {
    id: 'baldness-detection',
    number: '14',
    title: 'Scalp Analysis & Baldness Detection',
    category: 'COMPUTER VISION',
    filterGroup: 'ai-ml',
    description:
      'Formulated a machine learning computer vision algorithm analyzing scalp imagery to measure hair density loss and classify pattern baldness stages.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Baldness-detection',
    tech: ['Python', 'OpenCV', 'Machine Learning', 'Numpy'],
    metrics: [
      { label: 'IMAGE MODEL', value: 'OpenCV Feature Extraction' },
      { label: 'TASK', value: 'Hair Density Classification' },
      { label: 'STACK', value: 'Python Vision' },
    ],
  },
];

type FilterType = 'all' | 'ai-ml' | 'fullstack-backend' | 'web-mobile';
type ViewMode = 'grid' | 'stack';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filteredProjects =
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.filterGroup === activeFilter);

  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

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
            02 / FEATURED REPOSITORIES ({allProjects.length})
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline & Intro */}
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
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-md leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore all {allProjects.length} authentic GitHub projects spanning AI Systems, Deep Learning, Asynchronous Backend APIs, and Full Stack Web Applications.
          </p>
        </motion.div>

        {/* Control Bar: Filters & View Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-12 border-b border-[#8C6D4F]/25 pb-6">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2.5">
            {[
              { id: 'all', label: `ALL PROJECTS (${allProjects.length})` },
              {
                id: 'ai-ml',
                label: `AI & ML (${allProjects.filter((p) => p.filterGroup === 'ai-ml').length})`,
              },
              {
                id: 'fullstack-backend',
                label: `BACKEND & APIs (${allProjects.filter((p) => p.filterGroup === 'fullstack-backend').length})`,
              },
              {
                id: 'web-mobile',
                label: `WEB & APPS (${allProjects.filter((p) => p.filterGroup === 'web-mobile').length})`,
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

          {/* Layout Mode Switcher */}
          <div className="flex items-center space-x-2 bg-[#0E0C0A] p-1.5 rounded-sm border border-[#8C6D4F]/30 self-start lg:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center space-x-2 px-3 py-1.5 text-[10px] font-mono uppercase transition-all rounded-sm ${
                viewMode === 'grid'
                  ? 'bg-[#8C6D4F]/40 text-[#F7E7C4] border border-[#D4AF37]/50'
                  : 'text-[#A8988B] hover:text-white'
              }`}
            >
              <span>⣿ GRID VIEW</span>
            </button>
            <button
              onClick={() => setViewMode('stack')}
              className={`flex items-center space-x-2 px-3 py-1.5 text-[10px] font-mono uppercase transition-all rounded-sm ${
                viewMode === 'stack'
                  ? 'bg-[#8C6D4F]/40 text-[#F7E7C4] border border-[#D4AF37]/50'
                  : 'text-[#A8988B] hover:text-white'
              }`}
            >
              <span>🎴 STACK DECK</span>
            </button>
          </div>
        </div>

        {/* ================= VIEW MODE 1: GRID VIEW (Default, All Visible) ================= */}
        {viewMode === 'grid' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="relative flex flex-col justify-between w-full rounded-xl border border-[#8C6D4F]/40 bg-[#0E0C0A] p-7 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.85)] group overflow-hidden transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]"
              >
                {/* Top Gold Horizon Edge */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Background Watermark Number */}
                <span
                  className="absolute -bottom-4 -right-2 text-7xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Number Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37]">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#8C6D4F]">
                        #{project.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-3xl sm:text-4xl font-normal tracking-tight text-white mb-3 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.95]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-xs text-[#BDB0A4] font-light leading-[1.8] mb-6 tracking-wide"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Metrics Badges */}
                    <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-sm border border-[#8C6D4F]/20 bg-[#050403]">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <span className="block text-[8.5px] font-mono text-[#8C6D4F] uppercase tracking-wider mb-0.5 truncate">
                            {m.label}
                          </span>
                          <span className="block text-[10px] font-mono font-medium text-[#F7E7C4] truncate">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-[9.5px] font-medium tracking-[0.14em] uppercase rounded-sm border border-[#8C6D4F]/30 bg-[#14100D] text-[#E8D7C5] group-hover:border-[#D4AF37]/40 transition-colors"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[#8C6D4F]/20">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-2 py-3 border border-[#8C6D4F]/60 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[10.5px] font-medium tracking-[0.18em] uppercase transition-all duration-300"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>GITHUB REPO</span>
                        <span className="text-xs">↗</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center space-x-2 py-3 border border-[#D4AF37]/60 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[10.5px] font-medium tracking-[0.18em] uppercase transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>LIVE DEMO</span>
                          <span className="text-xs">🌐</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* ================= VIEW MODE 2: STACKED DECK ================= */}
        {viewMode === 'stack' && (
          <AnimatePresence mode="wait">
            <ScrollStack
              key={activeFilter}
              itemDistance={20}
              itemScale={0.035}
              itemStackDistance={28}
              stackPosition="5%"
              scaleEndPosition="2%"
              baseScale={0.88}
              useWindowScroll={true}
            >
              {filteredProjects.map((project) => (
                <ScrollStackItem key={project.id}>
                  <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                    <span
                      className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {project.number}
                    </span>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                      <div className="lg:col-span-7 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-3 mb-4">
                            <span className="text-xs font-mono font-bold text-[#D4AF37]">
                              {project.number}
                            </span>
                            <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                              {project.category}
                            </span>
                          </div>

                          <h3
                            className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                          >
                            {project.title}
                          </h3>

                          <p
                            className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-6 border-t border-[#8C6D4F]/25">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                        <div className="space-y-3">
                          <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                            ARCHITECTURE METRICS
                          </span>
                          {project.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                            >
                              <span className="text-[10px] font-mono text-[#A8988B]">
                                {m.label}
                              </span>
                              <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            <span>GITHUB REPO</span>
                            <span className="text-xs">↗</span>
                          </a>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3.5 border border-[#D4AF37]/60 bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              <span>LIVE DEMO</span>
                              <span className="text-xs">🌐</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;