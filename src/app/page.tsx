import React from "react";
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

// Custom Brand Icons (removed from modern Lucide versions)
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
  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-[#F0F6FC] overflow-hidden">
      
      {/* Dynamic Background Grids and Orbs for Depth */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#30363d] bg-[#0B0F19]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-lg tracking-tight hover:text-cyan-400" id="nav-brand">
            Aryan Milind Keskar
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#8B949E]">
            <a href="#focus" className="hover:text-[#F0F6FC] transition-colors" id="nav-link-focus">Core Focus</a>
            <a href="#publications" className="hover:text-[#F0F6FC] transition-colors" id="nav-link-publications">Publications</a>
            <a href="#projects" className="hover:text-[#F0F6FC] transition-colors" id="nav-link-projects">Projects</a>
            <a href="#skills" className="hover:text-[#F0F6FC] transition-colors" id="nav-link-skills">Skills</a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="mailto:keskar.aryan@gmail.com"
              className="px-4 py-1.5 rounded-full bg-[#161B22] border border-[#30363d] hover:border-cyan-400 text-xs font-medium hover:text-[#F0F6FC] transition-all duration-300"
              id="nav-contact-btn"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-24 md:space-y-36 relative z-10">
        
        {/* HERO SECTION */}
        <section className="space-y-8 max-w-4xl" id="hero">
          <div className="space-y-4">
            {/* Academic Honor Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide animate-pulse" id="hero-badge">
              <Award className="w-3.5 h-3.5" />
              <span>WACV 2025 Best Paper Award Winner</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F0F6FC]" id="hero-title">
              Aryan Milind Keskar
            </h1>
            
            <p className="text-lg sm:text-xl text-[#8B949E] leading-relaxed max-w-2xl font-light" id="hero-subtitle">
              Incoming <span className="text-cyan-400 font-normal">MS CS Student at UC San Diego</span> <span className="text-[#30363d]">|</span> <span className="text-emerald-400 font-normal">AI Engineer at Appzoy</span>. Specializing in autonomous systems, perception alignment, and quantitative controls.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4" id="hero-links">
            <a
              href="https://github.com/AryanKeskar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161B22] border border-[#30363d] hover:border-cyan-500/50 hover:bg-[#1f242c] transition-all-custom"
              id="link-github"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#8B949E]" />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-keskar-616340202/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161B22] border border-[#30363d] hover:border-emerald-500/50 hover:bg-[#1f242c] transition-all-custom"
              id="link-linkedin"
            >
              <LinkedinIcon className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium">LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#8B949E]" />
            </a>
            <a
              href="mailto:keskar.aryan@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161B22] border border-[#30363d] hover:border-cyan-500/50 hover:bg-[#1f242c] transition-all-custom"
              id="link-email"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">Email</span>
              <ArrowUpRight className="w-3 h-3 text-[#8B949E]" />
            </a>
          </div>
        </section>

        {/* CORE ENGINE GRID */}
        <section className="space-y-8" id="focus">
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#8B949E] font-semibold">Core Focus Areas</h2>
            <p className="text-2xl font-bold tracking-tight">Technical Pillars</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6" id="focus-grid">
            
            {/* Box A: Perception & Agentic Systems */}
            <div className="group relative rounded-xl bg-[#161B22] border border-[#30363d] p-8 shadow-glow-cyan transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 overflow-hidden" id="focus-box-a">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#F0F6FC] group-hover:text-cyan-300 transition-colors">Perception & Agentic Systems</h3>
              </div>
              
              <p className="text-[#8B949E] text-sm leading-relaxed mb-6">
                Developing state-of-the-art vision-language alignment methods, visual question answering architectures, and multi-agent systems engineered for robotic perception and safety.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400/80">Key Work & Methodologies</h4>
                <ul className="grid grid-cols-1 gap-2 text-xs text-[#8B949E]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>VILA quantization & evaluation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>LangGraph orchestration patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Multi-agent autonomous hazard ranking</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Box B: Quantitative Systems & Control */}
            <div className="group relative rounded-xl bg-[#161B22] border border-[#30363d] p-8 shadow-glow-emerald transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 overflow-hidden" id="focus-box-b">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#F0F6FC] group-hover:text-emerald-300 transition-colors">Quantitative Systems & Control</h3>
              </div>
              
              <p className="text-[#8B949E] text-sm leading-relaxed mb-6">
                Applying control theory and quantitative strategies to optimize decision-making under uncertainty, modeling execution algorithms, and refining point-cloud spatial registration.
              </p>
              
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80">Key Work & Methodologies</h4>
                <ul className="grid grid-cols-1 gap-2 text-xs text-[#8B949E]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Custom QR-DQN reinforcement learning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Hawkes process LOB simulations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Point-to-plane ICP spatial optimization</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* PUBLICATIONS SECTION */}
        <section className="space-y-8" id="publications">
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#8B949E] font-semibold">Academic Contributions</h2>
            <p className="text-2xl font-bold tracking-tight">Peer-Reviewed Publications</p>
          </div>

          <div className="space-y-6" id="publications-list">
            
            {/* Paper 1: WACV 2025 Best Paper */}
            <div className="group relative rounded-xl bg-[#161B22] border border-[#30363d] p-6 hover:border-cyan-500/30 transition-all duration-300" id="paper-1">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-semibold border border-cyan-500/20">WACV 2025 Workshop</span>
                    <span className="px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 text-[10px] font-semibold border border-yellow-500/20 flex items-center gap-1">
                      <Award className="w-3 h-3" /> Best Paper Award
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#F0F6FC] group-hover:text-cyan-300 transition-colors">
                    Evaluating Multimodal Vision-Language Model Prompting Strategies for Visual Question Answering
                  </h3>
                  <p className="text-xs text-[#8B949E] font-mono">
                    <span className="text-[#F0F6FC] underline decoration-cyan-500/30">Aryan Keskar</span>, et al.
                  </p>
                </div>
                <a
                  href="https://openaccess.thecvf.com/content/WACV2025W/LLVMAD/papers/Keskar_Evaluating_Multimodal_Vision-Language_Model_Prompting_Strategies_for_Visual_Question_Answering_WACVW_2025_paper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium whitespace-nowrap self-start md:self-center px-3 py-1.5 rounded-lg bg-[#0B0F19] border border-[#30363d] hover:border-cyan-500/40"
                  id="paper-1-link"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>PDF Document</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Paper 2: IEEE ITSC 2025 */}
            <div className="group relative rounded-xl bg-[#161B22] border border-[#30363d] p-6 hover:border-emerald-500/30 transition-all duration-300" id="paper-2">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">IEEE ITSC 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#F0F6FC] group-hover:text-emerald-300 transition-colors">
                    DoScenes: An Autonomous Driving Dataset with Natural Language Instruction for Human Interaction and Vision-Language Navigation
                  </h3>
                  <p className="text-xs text-[#8B949E] font-mono">
                    Parthib Roy, Srinivasa Perisetla, Shashank Shriram, Harsha Krishnaswamy, <span className="text-[#F0F6FC] underline decoration-emerald-500/30">Aryan Keskar</span>, Ross Greer
                  </p>
                </div>
                <a
                  href="https://its.papercept.net/conferences/scripts/abstract.pl?ConfID=91&Number=1010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium whitespace-nowrap self-start md:self-center px-3 py-1.5 rounded-lg bg-[#0B0F19] border border-[#30363d] hover:border-emerald-500/40"
                  id="paper-2-link"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Abstract Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Paper 3: IEEE CASE 2025 */}
            <div className="group relative rounded-xl bg-[#161B22] border border-[#30363d] p-6 hover:border-cyan-500/30 transition-all duration-300" id="paper-3">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px] font-semibold border border-cyan-500/20">IEEE CASE 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#F0F6FC] group-hover:text-cyan-300 transition-colors">
                    Towards a Multi-Agent Vision-Language System for Zero-Shot Novel Hazardous Object Detection for Autonomous Driving Safety
                  </h3>
                  <p className="text-xs text-[#8B949E] font-mono">
                    <span className="text-[#F0F6FC] underline decoration-cyan-500/30">Aryan Keskar</span>, et al.
                  </p>
                </div>
                <a
                  href="https://www.researchgate.net/publication/396033921_Towards_a_Multi-Agent_Vision-Language_System_for_Zero-Shot_Novel_Hazardous_Object_Detection_for_Autonomous_Driving_Safety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium whitespace-nowrap self-start md:self-center px-3 py-1.5 rounded-lg bg-[#0B0F19] border border-[#30363d] hover:border-cyan-500/40"
                  id="paper-3-link"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>ResearchGate</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* PROJECTS MATRIX */}
        <section className="space-y-8" id="projects">
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#8B949E] font-semibold">Selected Engineering</h2>
            <p className="text-2xl font-bold tracking-tight">Technical Implementations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" id="projects-matrix">
            
            {/* Project 1 */}
            <div className="group rounded-xl bg-[#161B22] border border-[#30363d] p-6 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between" id="project-card-1">
              <div className="space-y-4">
                <div className="p-2.5 rounded-lg bg-[#0B0F19] border border-[#30363d] w-fit text-cyan-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#F0F6FC] group-hover:text-cyan-300 transition-colors">
                  DRL Execution Algorithm
                </h3>
                <p className="text-[#8B949E] text-xs leading-relaxed">
                  Deep reinforcement learning policy using Quantile Regression DQN (QR-DQN) to minimize implementation shortfall, incorporating Hawkes Process intensity drift to model order book queues.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#30363d] flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-[#0B0F19] text-[#8B949E] text-[10px] font-mono border border-[#30363d]">QR-DQN</span>
                <span className="px-2 py-0.5 rounded bg-[#0B0F19] text-[#8B949E] text-[10px] font-mono border border-[#30363d]">Hawkes Drift</span>
                <span className="px-2 py-0.5 rounded bg-[#0B0F19] text-[#8B949E] text-[10px] font-mono border border-[#30363d]">PyTorch</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-xl bg-[#161B22] border border-[#30363d] p-6 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between" id="project-card-2">
              <div className="space-y-4">
                <div className="p-2.5 rounded-lg bg-[#0B0F19] border border-[#30363d] w-fit text-emerald-400">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#F0F6FC] group-hover:text-emerald-300 transition-colors">
                  Agentic Blood Test Parser
                </h3>
                <p className="text-[#8B949E] text-xs leading-relaxed">
                  LangGraph agent network that ingests native vision-language model structures to extract biochemical markers. Implemented state management using clean Pydantic schemas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#30363d] flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-[#0B0F19] text-[#8B949E] text-[10px] font-mono border border-[#30363d]">LangGraph</span>
                <span className="px-2 py-0.5 rounded bg-[#0B0F19] text-[#8B949E] text-[10px] font-mono border border-[#30363d]">Pydantic</span>
                <span className="px-2 py-0.5 rounded bg-[#0B0F19] text-[#8B949E] text-[10px] font-mono border border-[#30363d]">VLMs</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group rounded-xl bg-[#161B22] border border-[#30363d] p-6 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between" id="project-card-3">
              <div className="space-y-4">
                <div className="p-2.5 rounded-lg bg-[#0B0F19] border border-[#30363d] w-fit text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#F0F6FC] group-hover:text-cyan-300 transition-colors">
                  E&J Gallo Capstone
                </h3>
                <p className="text-[#8B949E] text-xs leading-relaxed">
                  Automated industrial alignment pipeline leveraging RANSAC circle-fitting, 3D point-cloud registration via Open3D (Point-to-Plane ICP), and PCA global alignment.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#30363d] flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-[#0B0F19] text-[#8B949E] text-[10px] font-mono border border-[#30363d]">Open3D</span>
                <span className="px-2 py-0.5 rounded bg-[#0B0F19] text-[#8B949E] text-[10px] font-mono border border-[#30363d]">ICP</span>
                <span className="px-2 py-0.5 rounded bg-[#0B0F19] text-[#8B949E] text-[10px] font-mono border border-[#30363d]">RANSAC</span>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section className="space-y-8" id="skills">
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#8B949E] font-semibold">Competencies</h2>
            <p className="text-2xl font-bold tracking-tight">Professional Skills</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6" id="skills-matrix">
            
            {/* Category 1: Languages */}
            <div className="rounded-xl bg-[#161B22] border border-[#30363d] p-6 space-y-4" id="skill-cat-languages">
              <div className="flex items-center gap-2 text-cyan-400">
                <Code className="w-4 h-4" />
                <h3 className="text-sm font-semibold tracking-wide uppercase">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "C++", "Java", "TypeScript", "SQL", "HTML/CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-[#0B0F19] text-[#F0F6FC] text-xs font-mono border border-[#30363d] hover:border-cyan-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: AI / ML */}
            <div className="rounded-xl bg-[#161B22] border border-[#30363d] p-6 space-y-4" id="skill-cat-ai">
              <div className="flex items-center gap-2 text-emerald-400">
                <Cpu className="w-4 h-4" />
                <h3 className="text-sm font-semibold tracking-wide uppercase">AI / ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["PyTorch", "LangGraph", "VLMs (VILA)", "QR-DQN", "OpenCV", "Hugging Face"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-[#0B0F19] text-[#F0F6FC] text-xs font-mono border border-[#30363d] hover:border-emerald-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Systems & Tools */}
            <div className="rounded-xl bg-[#161B22] border border-[#30363d] p-6 space-y-4" id="skill-cat-systems">
              <div className="flex items-center gap-2 text-cyan-400">
                <Database className="w-4 h-4" />
                <h3 className="text-sm font-semibold tracking-wide uppercase">Systems & Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Git", "Open3D", "Docker", "Linux", "ROS", "Next.js / React"].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-[#0B0F19] text-[#F0F6FC] text-xs font-mono border border-[#30363d] hover:border-cyan-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#30363d] bg-[#0B0F19] mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-[#8B949E] text-xs">
          <p id="footer-text">
            © {new Date().getFullYear()} Aryan Milind Keskar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/AryanKeskar" className="hover:text-[#F0F6FC]" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/aryan-keskar-616340202/" className="hover:text-[#F0F6FC]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:keskar.aryan@gmail.com" className="hover:text-[#F0F6FC]">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
