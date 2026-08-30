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
    id: 'queueless-uiux',
    number: '01',
    title: 'QueueLess - Smart Clinic Queue Management',
    category: 'UI/UX DESIGN',
    filterGroup: 'web-mobile',
    description:
      'A high-fidelity UI/UX design and interactive prototype for a frictionless medical queue management system, allowing patients to skip the waiting room and track live queue progress.',
    githubUrl: 'https://github.com/Patil-Shital-9236/queueless-uiux-design',
    liveUrl: 'https://queue-flow-pro-46.lovable.app/',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'],
    metrics: [
      { label: 'TYPE', value: 'UI/UX Case Study' },
      { label: 'DOMAIN', value: 'Healthcare Tech' },
      { label: 'PROTOTYPE', value: 'Interactive' },
    ],
  },
  {
    id: 'portfolio-uiux',
    number: '02',
    title: 'Luxury Portfolio UI/UX System',
    category: 'UI/UX DESIGN',
    filterGroup: 'web-mobile',
    description:
      'A luxury dark-mode portfolio design architecture highlighting engineering competence and visual design proficiency. Employs a gold-accented palette to emphasize key technical achievements.',
    githubUrl: 'https://github.com/Patil-Shital-9236/shital-patil-portfolio-uiux',
    liveUrl: 'https://shitalpatil-portfolio.vercel.app/',
    tech: ['Figma', 'Design System', 'Typography', 'Prototyping'],
    metrics: [
      { label: 'AESTHETIC', value: 'Dark Mode Luxury' },
      { label: 'TYPE', value: 'Personal Branding' },
      { label: 'FOCUS', value: 'Engineering Showcase' },
    ],
  },
  {
    id: 'burger-store-uiux',
    number: '03',
    title: 'Burger Store - Smart Food Ordering',
    category: 'UI/UX DESIGN',
    filterGroup: 'web-mobile',
    description:
      'A modern gourmet burger store UI/UX experience and interactive prototype for mobile food ordering. Features seamless navigation, vibrant product showcases, and a streamlined checkout flow.',
    githubUrl: 'https://github.com/Patil-Shital-9236/burger-store-uiux-design',
    liveUrl: 'https://www.figma.com/proto/NioH69BT4n9KyMAZ1kRaEN/EMS?node-id=1149-534&viewport=678%2C853%2C0.03&t=kzkxDRFE4y5s3P0p-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1149%3A534&page-id=153%3A2',
    tech: ['Figma', 'Mobile UI', 'Interaction Design', 'E-commerce'],
    metrics: [
      { label: 'PLATFORM', value: 'Mobile Interface' },
      { label: 'DOMAIN', value: 'E-commerce / Food' },
      { label: 'STYLE', value: 'Vibrant & Modern' },
    ],
  },
  {
    id: 'resume-analyzer',
    number: '04',
    title: 'AI-Powered Resume Analyzer',
    category: 'AI / FULL STACK',
    filterGroup: 'ai-ml',
    description:
      'Solved the problem of manually screening large numbers of resumes by building an AI-based platform that compares candidate resumes with job descriptions and highlights the most relevant profiles. Built 8+ REST APIs for resume upload, text extraction, JD processing, skill matching, scoring, and candidate analysis. Used NLP + OpenAI API to extract skills, experience, education, and keywords, identify missing skills against the JD, and generate match scores.',
    githubUrl: 'https://github.com/Patil-Shital-9236/resume-analyzer-frontend',
    liveUrl: 'https://resume-analyzer-frontend-eight-nu.vercel.app',
    tech: ['React.js', 'Python', 'NLP', 'OpenAI API', 'REST APIs', 'Node.js'],
    metrics: [
      { label: 'ENGINE', value: 'NLP + OpenAI API' },
      { label: 'APIs BUILT', value: '8+ REST Endpoints' },
      { label: 'FEATURE', value: 'Automated Skill Matching' },
    ],
  },
  {
    id: 'fitshop-ai',
    number: '05',
    title: 'FitShop AI – Smart Health Ordering System',
    category: 'FLUTTER / AI / VOICE',
    filterGroup: 'web-mobile',
    description:
      'Solved the problem of managing health-product shopping and customer guidance in one place, helping customers choose green tea and sprouts based on health and nutrition goals. Built 6+ modules for products, users, voice search, fitness guidance, payments, and admin management. Integrated Groq API + Google Speech-to-Text for multilingual AI assistance and voice ordering, with 4 payment options for easier customer checkout.',
    githubUrl: 'https://github.com/Patil-Shital-9236',
    tech: ['Flutter', 'Dart', 'PHP', 'MySQL', 'Groq API', 'Google Speech-to-Text'],
    metrics: [
      { label: 'AI VOICE', value: 'Google Speech-to-Text' },
      { label: 'LLM ENGINE', value: 'Groq API' },
      { label: 'MODULES', value: '6+ Core Modules' },
    ],
  },
  {
    id: 'text-to-image-generator',
    number: '06',
    title: 'Text-to-Image Generator',
    category: 'AI / STABLE DIFFUSION',
    filterGroup: 'ai-ml',
    description:
      'Solved the problem of creating images manually from scratch by allowing users to generate images directly from text prompts. Built the application with React.js + Flask, connecting the frontend with the AI image-generation backend. Used Stable Diffusion, caching, and Docker to generate images, avoid repeated requests, and simplify backend deployment.',
    githubUrl: 'https://github.com/Patil-Shital-9236',
    liveUrl: 'https://text-to-image-w2ji.vercel.app/login',
    tech: ['React.js', 'Flask', 'Stable Diffusion', 'Docker', 'Python', 'REST APIs'],
    metrics: [
      { label: 'AI MODEL', value: 'Stable Diffusion' },
      { label: 'BACKEND', value: 'Flask + Docker' },
      { label: 'OPTIMIZATION', value: 'Request Caching' },
    ],
  },
  {
    id: 'academic-rag',
    number: '07',
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
    number: '08',
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
    number: '09',
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
    number: '10',
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
    number: '11',
    title: 'Aarogya Assist – Medica AI Clinical Diagnostics',
    category: 'AI / HEALTHCARE',
    filterGroup: 'ai-ml',
    description:
      'AI-powered clinical decision support engine that processes patient symptoms, medical histories, and diagnostic parameters to generate preliminary medical triage assessments.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Aarogya-Assist-Medica-AI',
    tech: ['Python', 'Machine Learning', 'Medical NLP', 'Streamlit', 'Scikit-Learn'],
    metrics: [
      { label: 'MODEL', value: 'Medical Decision Tree' },
      { label: 'ACCURACY', value: '94% Triage Rate' },
      { label: 'SECURITY', value: 'HIPAA Compliant Data' },
    ],
  },
  {
    id: 'psoriasis-cnn',
    number: '12',
    title: 'Psoriasis Disease Classification CNN',
    category: 'DEEP LEARNING / VISION',
    filterGroup: 'ai-ml',
    description:
      'Convolutional Neural Network (CNN) trained on dermatological image datasets to classify psoriasis severity levels and differentiate dermatological conditions with high precision.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Psoriasis-Disease-Classification-CNN',
    tech: ['TensorFlow', 'Keras', 'CNN Architecture', 'OpenCV', 'Python'],
    metrics: [
      { label: 'ARCHITECTURE', value: 'ResNet / CNN' },
      { label: 'PRECISION', value: '96.2% Val Accuracy' },
      { label: 'PROCESSING', value: 'OpenCV Preprocessing' },
    ],
  },
  {
    id: 'smartbank-core',
    number: '13',
    title: 'SmartBank Core Banking Engine',
    category: 'FULL STACK / FINTECH',
    filterGroup: 'fullstack-backend',
    description:
      'Transaction processing engine supporting ACID-compliant fund transfers, account ledger balance verification, overdraft controls, and transaction logging.',
    githubUrl: 'https://github.com/Patil-Shital-9236/SmartBank-Core-Banking',
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'JUnit', 'REST APIs'],
    metrics: [
      { label: 'SAFETY', value: 'ACID Transactions' },
      { label: 'FRAMEWORK', value: 'Spring Boot Microservice' },
      { label: 'CONTAINER', value: 'Docker Compose' },
    ],
  },
  {
    id: 'educare-learning',
    number: '14',
    title: 'EduCare Learning Platform',
    category: 'WEB & MOBILE APP',
    filterGroup: 'web-mobile',
    description:
      'Full-stack educational platform delivering interactive course modules, progress tracking analytics, quiz evaluation engines, and real-time student engagement dashboards.',
    githubUrl: 'https://github.com/Patil-Shital-9236/EduCare-Learning-Platform',
    tech: ['React.js', 'Firebase', 'Tailwind CSS', 'Node.js', 'Express'],
    metrics: [
      { label: 'FRONTEND', value: 'React + Tailwind' },
      { label: 'REALTIME', value: 'Firebase Database' },
      { label: 'UI/UX', value: 'Responsive System' },
    ],
  },
  {
    id: 'kids-educational-ai',
    number: '15',
    title: 'Kids Educational AI Chatbot',
    category: 'AI / CHATBOT',
    filterGroup: 'ai-ml',
    description:
      'Interactive AI chatbot tailored for kids with age-appropriate content filtering, gamified learning prompts, voice input support, and friendly storytelling features.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Kids-Educational-AI-Chatbot',
    tech: ['Python', 'OpenAI API', 'Speech Recognition', 'Gradio', 'NLP'],
    metrics: [
      { label: 'SAFETY', value: 'Kid-Safe Content Guard' },
      { label: 'SPEECH', value: 'Voice Interactive' },
      { label: 'ENGAGEMENT', value: 'Gamified Prompts' },
    ],
  },
  {
    id: 'task-tracker',
    number: '16',
    title: 'Task Tracker & Management App',
    category: 'WEB APP / PRODUCTIVITY',
    filterGroup: 'web-mobile',
    description:
      'Kanban task management system featuring drag-and-drop workflow status, priority tagging, automated deadline reminders, and productivity analytics.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Task-Tracker-App',
    tech: ['TypeScript', 'React.js', 'Redux Toolkit', 'Tailwind CSS'],
    metrics: [
      { label: 'STATE', value: 'Redux Toolkit' },
      { label: 'WORKFLOW', value: 'Kanban Drag-and-Drop' },
      { label: 'PERFORMANCE', value: '60 FPS UI Rendering' },
    ],
  },
  {
    id: 'pan-card-tampering',
    number: '17',
    title: 'Pan Card Tampering Detection System',
    category: 'COMPUTER VISION / AI',
    filterGroup: 'ai-ml',
    description:
      'Computer vision verification model using Structural Similarity Index (SSIM) and image alignment algorithms to detect fraud, manipulation, or tampering in PAN identity cards.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Pan-Card-Tampering-Detection',
    tech: ['Python', 'OpenCV', 'Scikit-Image', 'SSIM Algorithm', 'Flask'],
    metrics: [
      { label: 'ALGORITHM', value: 'SSIM Comparison' },
      { label: 'DETECTION', value: 'Micro-Pixel Alterations' },
      { label: 'INTERFACE', value: 'Flask Web Upload' },
    ],
  },
  {
    id: 'forest-fire-risk',
    number: '18',
    title: 'Forest Fire Risk Analysis System',
    category: 'DATA SCIENCE / ML',
    filterGroup: 'ai-ml',
    description:
      'Predictive environmental analytics system forecasting forest fire risk probabilities using historical meteorological data, temperature indexes, and Random Forest regressors.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Forest-Fire-Risk-Analysis',
    tech: ['Python', 'Random Forest', 'Pandas', 'Seaborn', 'Scikit-Learn'],
    metrics: [
      { label: 'MODEL', value: 'Random Forest Regressor' },
      { label: 'DATASET', value: 'Meteorological Index' },
      { label: 'OUTPUT', value: 'Risk Heatmap Visuals' },
    ],
  },
  {
    id: 'scalp-analysis',
    number: '19',
    title: 'Scalp Analysis & Baldness Detection',
    category: 'AI / HEALTHCARE VISION',
    filterGroup: 'ai-ml',
    description:
      'Dermatological image classification pipeline detecting scalp health conditions and estimating androgenetic alopecia stages using deep learning feature extraction.',
    githubUrl: 'https://github.com/Patil-Shital-9236/Scalp-Analysis-Baldness-Detection',
    tech: ['Python', 'PyTorch', 'OpenCV', 'Convolutional Nets', 'Flask'],
    metrics: [
      { label: 'FRAMEWORK', value: 'PyTorch Deep Learning' },
      { label: 'INPUT', value: 'Scalp Trichoscopy Images' },
      { label: 'OUTPUT', value: 'Alopecia Grading Score' },
    ],
  }
];

type FilterType = 'all' | 'ai-ml' | 'fullstack-backend' | 'web-mobile';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [isGridExpanded, setIsGridExpanded] = useState<boolean>(false);

  const topProjects = allProjects.slice(0, 4);

  const gridProjects =
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.filterGroup === activeFilter);

  const handleToggleGrid = () => {
    const nextState = !isGridExpanded;
    setIsGridExpanded(nextState);
    if (nextState) {
      setTimeout(() => {
        const element = document.getElementById('all-projects-grid');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* ================= PART 1: TOP 4 FEATURED STACK DECK ================= */}
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
            02 / ENGINEERING PROJECTS &amp; REPOSITORIES (19)
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              FEATURED ENGINEERING.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              PROTOTYPES &amp; SYSTEMS.
            </span>
          </h2>
        </motion.div>

        {/* Permanent 3D Stack Deck for Top 4 Projects */}
        <div className="w-full mb-4">
          <ScrollStack className="py-2" itemDistance={60}>
            {topProjects.map((project) => (
              <ScrollStackItem key={project.id}>
                <div className="relative w-full p-8 sm:p-12 bg-[#0C0A08] border border-[#8C6D4F]/40 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden group">
                  {/* Top Gold Horizon Edge */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Info */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-xs font-mono tracking-[0.25em] text-[#D4AF37]">
                            FLAGSHIP // {project.number}
                          </span>
                          <span
                            className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] bg-[#14100D] px-3 py-1 rounded border border-[#8C6D4F]/30"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {project.category}
                          </span>
                        </div>

                        <h3
                          className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 uppercase leading-[0.9]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {project.title}
                        </h3>

                        <p
                          className="text-xs sm:text-sm text-[#BDB0A4] font-light leading-relaxed mb-8 max-w-xl"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 text-[10px] font-medium tracking-[0.15em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#14100D] text-[#E8D7C5]"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border border-[#8C6D4F] bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-white hover:text-black text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            VIEW SOURCE CODE ↗
                          </a>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 border border-[#D4AF37] bg-[#D4AF37]/20 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              OPEN LIVE DEMO ⚡
                            </a>
                          )}
                          <button
                            onClick={handleToggleGrid}
                            className="px-6 py-3 border border-[#D4AF37] bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {isGridExpanded ? 'HIDE GRID ↑' : `SEE ALL ${allProjects.length} PROJECTS ↓`}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right Metrics Box */}
                    <div className="lg:col-span-5 bg-[#050403] p-6 rounded-xl border border-[#8C6D4F]/30 space-y-4">
                      <span
                        className="block text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37] pb-3 border-b border-[#8C6D4F]/20"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        SYSTEM METRICS &amp; SPECS
                      </span>

                      {project.metrics.map((m) => (
                        <div key={m.label} className="space-y-1">
                          <span className="block text-[9.5px] font-mono text-[#8C6D4F]">
                            {m.label}
                          </span>
                          <span className="block text-sm font-semibold text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* ================= SEE ALL PROJECTS ACTION BAR AFTER STACK ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#14100D] via-[#1F1914] to-[#14100D] border border-[#8C6D4F]/50 shadow-[0_15px_40px_rgba(0,0,0,0.85)] mt-8 mb-16 group"
        >
          <div className="mb-5 sm:mb-0">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase block mb-1">
              SEE ALL OPTION // EXPLORE FULL REPOSITORY GRID
            </span>
            <h4 className="text-xl sm:text-2xl text-white font-normal uppercase tracking-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              ALL 19 AI &amp; ML, BACKEND &amp; APPS REPOSITORIES AVAILABLE IN GRID VIEW
            </h4>
          </div>
          <button
            onClick={handleToggleGrid}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-[#F7E7C4] text-black font-medium text-xs tracking-[0.22em] uppercase rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.35)] flex items-center justify-center space-x-3 shrink-0 cursor-pointer"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>{isGridExpanded ? 'HIDE PROJECTS GRID' : `SEE ALL PROJECTS (${allProjects.length})`}</span>
            <span className="text-sm font-bold">{isGridExpanded ? '↑' : '↓'}</span>
          </button>
        </motion.div>

        {/* ================= PART 2: COLLAPSIBLE GRID VIEW FOR ALL REPOSITORIES ================= */}
        <AnimatePresence>
          {isGridExpanded && (
            <motion.div
              id="all-projects-grid"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="scroll-mt-24 pt-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4 mb-5 pt-8 border-t border-[#8C6D4F]/20"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  ALL ENGINEERING REPOSITORIES GRID ({allProjects.length})
                </span>
                <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2.5 mb-12 border-b border-[#8C6D4F]/25 pb-6">
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
                    className={`px-4 py-2 text-[10px] sm:text-[10.5px] font-medium tracking-[0.18em] uppercase rounded-sm transition-all duration-300 cursor-pointer ${
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

              {/* Permanent Grid View */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {gridProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                    className="relative flex flex-col justify-between p-7 bg-[#0A0806] border border-[#8C6D4F]/30 hover:border-[#D4AF37] rounded-xl transition-all duration-300 group overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]"
                  >
                    {/* Top Border Flare */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

                    {/* Corner Minimal L-Brackets */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors" />

                    <div>
                      {/* Header Row */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37]">
                          PROJ // {project.number}
                        </span>
                        <span
                          className="text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] bg-[#120F0C] px-2.5 py-1 rounded border border-[#8C6D4F]/20"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-2xl sm:text-3xl font-normal tracking-tight text-[#F4EBE2] mb-3 group-hover:text-white transition-colors uppercase leading-[0.95]"
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
                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#8C6D4F]/20">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[9px] font-medium tracking-[0.14em] uppercase rounded-sm border border-[#8C6D4F]/30 bg-[#120F0C] text-[#E8D7C5] group-hover:border-[#D4AF37]/40 transition-colors"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 text-center border border-[#8C6D4F]/40 bg-[#120F0C] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#E8DFD8] hover:text-black text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          GITHUB REPO ↗
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-2.5 text-center border border-[#D4AF37] bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#F7E7C4] hover:text-black text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            LIVE DEMO ⚡
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
