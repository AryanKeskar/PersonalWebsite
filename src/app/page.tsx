"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Award,
  BookOpen,
  Cpu,
  ExternalLink,
  FileText,
  Brain,
  TrendingUp,
  Database,
  ArrowUpRight,
  Code
} from "lucide-react";

// Custom Brand Icons
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  const [scrollRatio, setScrollRatio] = useState(0);

  // Monitor window scroll to adjust transition ratio between Ocean and Waterfall backgrounds
  useEffect(() => {
    const handleScroll = () => {
      const startScroll = 200; // scroll offset where transition starts
      const endScroll = 800;   // scroll offset where transition completes
      const currentScroll = window.scrollY;

      if (currentScroll <= startScroll) {
        setScrollRatio(0);
      } else if (currentScroll >= endScroll) {
        setScrollRatio(1);
      } else {
        const ratio = (currentScroll - startScroll) / (endScroll - startScroll);
        setScrollRatio(ratio);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F2F6F8] text-[#1D1D1F] overflow-x-hidden">
      
      {/* SCROLL-DRIVEN BACKGROUND TRANSITION (Z-0 FIXED BACKDROP) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        
        {/* Ocean Background Layer (Base Layer: fades out as user scrolls) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-100 ease-out" 
          style={{ 
            backgroundImage: "url('/ocean.jpeg')",
            opacity: 1 - scrollRatio 
          }}
        />

        {/* Waterfall Background Layer (Overlay Layer: fades in as user scrolls) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-100 ease-out" 
          style={{ 
            backgroundImage: "url('/waterfall.jpeg')",
            opacity: scrollRatio 
          }}
        />

        {/* Subtle Frosted Glass Vignette Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20" />
      </div>

      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-sm tracking-tight text-[#1D1D1F] hover:text-[#008299] transition-colors" id="nav-brand">
            Aryan Milind Keskar
          </a>
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#6E6E73]">
            <a href="#focus" className="hover:text-[#1D1D1F] transition-colors">Focus Areas</a>
            <a href="#publications" className="hover:text-[#1D1D1F] transition-colors">Publications</a>
            <a href="#projects" className="hover:text-[#1D1D1F] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#1D1D1F] transition-colors">Skills</a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="mailto:keskar.aryan@gmail.com"
              className="px-4 py-2 rounded-full bg-[#1D1D1F] text-white hover:bg-[#323236] text-xs font-semibold shadow-sm transition-all duration-300"
              id="nav-contact-btn"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION (Fully Transparent & Clear Background to let image show through) */}
      <section className="relative min-h-[85vh] flex items-center z-10 pt-20 pb-16" id="hero">
        <div className="max-w-6xl mx-auto px-6 w-full">
          
          {/* Floating Frosted Glass Info Box for Text Contrast */}
          <div className="max-w-3xl bg-white/45 backdrop-blur-sm border border-white/30 rounded-[2rem] p-8 md:p-12 shadow-sm space-y-6">
            
            {/* WACV Award Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50/80 border border-cyan-150 text-[#008299] text-[10px] font-semibold tracking-wide uppercase shadow-sm" id="hero-badge">
              <Award className="w-3.5 h-3.5 text-[#008299]" />
              <span>WACV 2025 Workshop Best Paper Award</span>
            </div>

            {/* Reduced Name Font Size (Elegant, Minimalist, Apple-like) */}
            <div className="space-y-1">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6E6E73] font-mono">
                Academic Profile
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F]" id="hero-title">
                Aryan Milind Keskar
              </h1>
            </div>
            
            {/* Personal Introduction Paragraph (Title-free About Me, replacing old subtitle) */}
            <p className="text-sm sm:text-base text-[#434346] leading-relaxed font-light" id="hero-intro-text">
              I am an incoming MS CS student at UC San Diego and an AI Engineer at Appzoy. Specializing in autonomous systems, perception alignment, and quantitative controls, I design vision-language model alignments, agent frameworks, and robust decision-making loops. Driven by a passion for robotic safety and quantitative execution, I focus on engineering intelligent systems that can perceive their environment and act reliably in real-world scenarios.
            </p>

            {/* Social Links as clean, rounded light pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2" id="hero-links">
              <a
                href="https://github.com/AryanKeskar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 hover:border-[#6E6E73] hover:shadow-apple shadow-sm transition-all-custom"
                id="link-github"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#1D1D1F]" />
                <span className="text-xs font-semibold text-[#1D1D1F]">GitHub</span>
                <ArrowUpRight className="w-2.5 h-2.5 text-[#6E6E73]" />
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-keskar-616340202/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 hover:border-[#6E6E73] hover:shadow-apple shadow-sm transition-all-custom"
                id="link-linkedin"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0077B5]" />
                <span className="text-xs font-semibold text-[#1D1D1F]">LinkedIn</span>
                <ArrowUpRight className="w-2.5 h-2.5 text-[#6E6E73]" />
              </a>
              <a
                href="mailto:keskar.aryan@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 hover:border-[#6E6E73] hover:shadow-apple shadow-sm transition-all-custom"
                id="link-email"
              >
                <Mail className="w-3.5 h-3.5 text-[#008299]" />
                <span className="text-xs font-semibold text-[#1D1D1F]">Email</span>
                <ArrowUpRight className="w-2.5 h-2.5 text-[#6E6E73]" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* TRANSLUCENT SLIDING INFORMATION WINDOW (Slides up over Hero & Background on scroll) */}
      <div className="relative z-10 bg-white/80 backdrop-blur-xl border-t border-white/60 shadow-2xl rounded-t-[3.5rem] mt-[-5vh]">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-28 md:space-y-36">

          {/* CORE FOCUS GRID SECTION */}
          <section className="space-y-10 scroll-mt-24" id="focus">
            
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#6E6E73] font-semibold font-mono">Core Focus Areas</h2>
              <p className="text-2xl font-bold tracking-tight text-[#1D1D1F]">Technical Pillars</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8" id="focus-grid">
              
              {/* Box A: Perception & Agentic Systems */}
              <div className="group relative rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/50 p-8 md:p-10 shadow-apple transition-all duration-300 hover:shadow-apple-hover hover:-translate-y-1 overflow-hidden" id="focus-box-a">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-cyan-50 text-[#008299]">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#008299] transition-colors">Perception & Agentic Systems</h3>
                </div>
                
                <p className="text-[#6E6E73] text-sm leading-relaxed mb-6 font-light">
                  Developing state-of-the-art vision-language alignment methods, visual question answering architectures, and multi-agent systems engineered for robotic perception and safety.
                </p>
                
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#008299]">Key Work & Methodologies</h4>
                  <ul className="space-y-2.5 text-xs text-[#6E6E73]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008299]" />
                      <span>VILA quantization & evaluation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008299]" />
                      <span>LangGraph orchestration patterns</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#008299]" />
                      <span>Multi-agent autonomous hazard ranking</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Box B: Quantitative Systems & Control */}
              <div className="group relative rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/50 p-8 md:p-10 shadow-apple transition-all duration-300 hover:shadow-apple-hover hover:-translate-y-1 overflow-hidden" id="focus-box-b">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-emerald-50 text-[#1D8F4F]">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1D1D1F] group-hover:text-[#1D8F4F] transition-colors">Quantitative Systems & Control</h3>
                </div>
                
                <p className="text-[#6E6E73] text-sm leading-relaxed mb-6 font-light">
                  Applying control theory and quantitative strategies to optimize decision-making under uncertainty, modeling execution algorithms, and refining point-cloud spatial registration.
                </p>
                
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D8F4F]">Key Work & Methodologies</h4>
                  <ul className="space-y-2.5 text-xs text-[#6E6E73]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D8F4F]" />
                      <span>Custom QR-DQN reinforcement learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D8F4F]" />
                      <span>Hawkes process LOB simulations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D8F4F]" />
                      <span>Point-to-plane ICP spatial optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* PUBLICATIONS SECTION */}
          <section className="space-y-10 scroll-mt-24" id="publications">
            
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#6E6E73] font-semibold font-mono">Academic Contributions</h2>
              <p className="text-2xl font-bold tracking-tight text-[#1D1D1F]">Publications</p>
            </div>

            <div className="space-y-6" id="publications-list">
              
              {/* Paper 1 */}
              <div className="group relative rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 p-6 md:p-8 shadow-apple hover:shadow-apple-hover transition-all duration-300" id="paper-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-50/80 text-[#008299] text-[10px] font-semibold border border-cyan-150">WACV 2025 Workshop</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[10px] font-semibold border border-amber-200 flex items-center gap-1 shadow-sm">
                        <Award className="w-3 h-3 text-amber-600" /> Best Paper Award
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] group-hover:text-[#008299] transition-colors leading-snug">
                      Evaluating Multimodal Vision-Language Model Prompting Strategies for Visual Question Answering
                    </h3>
                    <p className="text-xs text-[#6E6E73] font-mono">
                      <span className="text-[#1D1D1F] font-semibold underline decoration-[#008299]/30">Aryan Keskar</span>, et al.
                    </p>
                  </div>
                  <a
                    href="https://openaccess.thecvf.com/content/WACV2025W/LLVMAD/papers/Keskar_Evaluating_Multimodal_Vision-Language_Model_Prompting_Strategies_for_Visual_Question_Answering_WACVW_2025_paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-white bg-[#1D1D1F] hover:bg-[#323236] font-semibold whitespace-nowrap self-start md:self-center px-4 py-2 rounded-full shadow-sm transition-colors"
                    id="paper-1-link"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>PDF Document</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>
                </div>
              </div>

              {/* Paper 2 */}
              <div className="group relative rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 p-6 md:p-8 shadow-apple hover:shadow-apple-hover transition-all duration-300" id="paper-2">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50/80 text-[#1D8F4F] text-[10px] font-semibold border border-emerald-150">IEEE ITSC 2025</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] group-hover:text-[#1D8F4F] transition-colors leading-snug">
                      DoScenes: An Autonomous Driving Dataset with Natural Language Instruction for Human Interaction and Vision-Language Navigation
                    </h3>
                    <p className="text-xs text-[#6E6E73] font-mono">
                      Parthib Roy, Srinivasa Perisetla, Shashank Shriram, Harsha Krishnaswamy, <span className="text-[#1D1D1F] font-semibold underline decoration-[#1D8F4F]/30">Aryan Keskar</span>, Ross Greer
                    </p>
                  </div>
                  <a
                    href="https://its.papercept.net/conferences/scripts/abstract.pl?ConfID=91&Number=1010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#1D1D1F] bg-[#F5F5F7] hover:bg-[#E5E5E7] font-semibold whitespace-nowrap self-start md:self-center px-4 py-2 rounded-full transition-colors"
                    id="paper-2-link"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#6E6E73]" />
                    <span>Abstract Link</span>
                    <ExternalLink className="w-3 h-3 text-[#6E6E73]" />
                  </a>
                </div>
              </div>

              {/* Paper 3 */}
              <div className="group relative rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 p-6 md:p-8 shadow-apple hover:shadow-apple-hover transition-all duration-300" id="paper-3">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-50/80 text-[#008299] text-[10px] font-semibold border border-cyan-150">IEEE CASE 2025</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1D1D1F] group-hover:text-[#008299] transition-colors leading-snug">
                      Towards a Multi-Agent Vision-Language System for Zero-Shot Novel Hazardous Object Detection for Autonomous Driving Safety
                    </h3>
                    <p className="text-xs text-[#6E6E73] font-mono">
                      <span className="text-[#1D1D1F] font-semibold underline decoration-[#008299]/30">Aryan Keskar</span>, et al.
                    </p>
                  </div>
                  <a
                    href="https://www.researchgate.net/publication/396033921_Towards_a_Multi-Agent_Vision-Language_System_for_Zero-Shot_Novel_Hazardous_Object_Detection_for_Autonomous_Driving_Safety"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#1D1D1F] bg-[#F5F5F7] hover:bg-[#E5E5E7] font-semibold whitespace-nowrap self-start md:self-center px-4 py-2 rounded-full transition-colors"
                    id="paper-3-link"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#6E6E73]" />
                    <span>ResearchGate</span>
                    <ExternalLink className="w-3 h-3 text-[#6E6E73]" />
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* PROJECTS MATRIX */}
          <section className="space-y-10 scroll-mt-24" id="projects">
            
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#6E6E73] font-semibold font-mono">Engineering Implementations</h2>
              <p className="text-2xl font-bold tracking-tight text-[#1D1D1F]">Selected Projects</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6" id="projects-matrix">
              
              {/* Project 1 */}
              <div className="group rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/50 p-6 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" id="project-card-1">
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl bg-cyan-50 w-fit text-[#008299]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1D1D1F] group-hover:text-[#008299] transition-colors">
                    DRL Execution Algorithm
                  </h3>
                  <p className="text-[#6E6E73] text-xs leading-relaxed font-light">
                    Deep reinforcement learning policy using Quantile Regression DQN (QR-DQN) to minimize implementation shortfall, incorporating Hawkes Process intensity drift to model order book queues.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DCE4E8] flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF1F4] text-[#6E6E73] text-[9px] font-mono border border-white/50">QR-DQN</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF1F4] text-[#6E6E73] text-[9px] font-mono border border-white/50">Hawkes Drift</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF1F4] text-[#6E6E73] text-[9px] font-mono border border-white/50">PyTorch</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/50 p-6 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" id="project-card-2">
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl bg-emerald-50 w-fit text-[#1D8F4F]">
                    <Brain className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1D1D1F] group-hover:text-[#1D8F4F] transition-colors">
                    Agentic Blood Test Parser
                  </h3>
                  <p className="text-[#6E6E73] text-xs leading-relaxed font-light">
                    LangGraph agent network that ingests native vision-language model structures to extract biochemical markers. Implemented state management using clean Pydantic schemas.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DCE4E8] flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF1F4] text-[#6E6E73] text-[9px] font-mono border border-white/50">LangGraph</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF1F4] text-[#6E6E73] text-[9px] font-mono border border-white/50">Pydantic</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF1F4] text-[#6E6E73] text-[9px] font-mono border border-white/50">VLMs</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group rounded-[2rem] bg-white/70 backdrop-blur-md border border-white/50 p-6 shadow-apple hover:shadow-apple-hover transition-all duration-300 flex flex-col justify-between" id="project-card-3">
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl bg-cyan-50 w-fit text-[#008299]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1D1D1F] group-hover:text-[#008299] transition-colors">
                    E&J Gallo Capstone
                  </h3>
                  <p className="text-[#6E6E73] text-xs leading-relaxed font-light">
                    Automated industrial alignment pipeline leveraging RANSAC circle-fitting, 3D point-cloud registration via Open3D (Point-to-Plane ICP), and PCA global alignment.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DCE4E8] flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF1F4] text-[#6E6E73] text-[9px] font-mono border border-white/50">Open3D</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF1F4] text-[#6E6E73] text-[9px] font-mono border border-white/50">ICP</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#EBF1F4] text-[#6E6E73] text-[9px] font-mono border border-white/50">RANSAC</span>
                </div>
              </div>

            </div>
          </section>

          {/* SKILLS SECTION */}
          <section className="space-y-10 scroll-mt-24" id="skills">
            
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#6E6E73] font-semibold font-mono">Competencies</h2>
              <p className="text-2xl font-bold tracking-tight text-[#1D1D1F]">Professional Skills</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8" id="skills-matrix">
              
              {/* Category 1: Languages */}
              <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 p-6 md:p-8 shadow-apple space-y-5" id="skill-cat-languages">
                <div className="flex items-center gap-2 text-[#008299]">
                  <Code className="w-4 h-4" />
                  <h3 className="text-xs font-bold tracking-wider uppercase font-mono">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C++", "Java", "TypeScript", "SQL", "HTML/CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-[#EBF1F4] text-[#1D1D1F] text-xs font-mono border border-[#DCE4E8] hover:border-[#6E6E73] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2: AI / ML */}
              <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 p-6 md:p-8 shadow-apple space-y-5" id="skill-cat-ai">
                <div className="flex items-center gap-2 text-[#1D8F4F]">
                  <Cpu className="w-4 h-4" />
                  <h3 className="text-xs font-bold tracking-wider uppercase font-mono">AI / ML</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "LangGraph", "VLMs (VILA)", "QR-DQN", "OpenCV", "Hugging Face"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-[#EBF1F4] text-[#1D1D1F] text-xs font-mono border border-[#DCE4E8] hover:border-[#6E6E73] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3: Systems & Tools */}
              <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 p-6 md:p-8 shadow-apple space-y-5" id="skill-cat-systems">
                <div className="flex items-center gap-2 text-[#008299]">
                  <Database className="w-4 h-4" />
                  <h3 className="text-xs font-bold tracking-wider uppercase font-mono">Systems & Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Open3D", "Docker", "Linux", "ROS", "Next.js / React"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-[#EBF1F4] text-[#1D1D1F] text-xs font-mono border border-[#DCE4E8] hover:border-[#6E6E73] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </section>

        </div>

        {/* Footer inside the sliding window */}
        <footer className="border-t border-[#DCE4E8] bg-white/50 backdrop-blur-md mt-20">
          <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-[#6E6E73] text-xs">
            <p id="footer-text" className="font-light">
              © {new Date().getFullYear()} Aryan Milind Keskar. All rights reserved. Designed in California.
            </p>
            <div className="flex gap-6 font-medium">
              <a href="https://github.com/AryanKeskar" className="hover:text-[#1D1D1F]" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/aryan-keskar-616340202/" className="hover:text-[#1D1D1F]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:keskar.aryan@gmail.com" className="hover:text-[#1D1D1F]">Email</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
