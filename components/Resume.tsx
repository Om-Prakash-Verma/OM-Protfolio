import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { SEO } from './SEO';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 bg-neutral-900 relative">
      <SEO 
        title="Resume | Om Prakash Verma"
        description="Professional resume of Om Prakash Verma. Computer Science Engineering student skilled in System Design, AI-Assisted Development, and Full Stack Architecture."
        keywords={['Resume', 'CV', 'Computer Science', 'Software Engineer', 'System Architect']}
        type="profile"
      />
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-4">
           <div>
             <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Resume</h2>
             <p className="text-gold-metallic uppercase tracking-widest text-sm">Professional Profile</p>
           </div>
           <button 
             onClick={() => window.print()}
             className="inline-flex items-center gap-2 text-neutral-400 hover:text-gold-metallic transition-colors text-sm uppercase tracking-wide border border-white/10 px-4 py-2 rounded hover:border-gold-metallic/30"
           >
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
             Download CV
           </button>
        </FadeIn>

        <div className="space-y-12 text-neutral-300">
          
          {/* Header Block */}
          <FadeIn>
            <div className="bg-black/40 p-8 border-l-2 border-gold-metallic">
              <h3 className="text-2xl font-display font-bold text-white">Om Prakash Verma</h3>
              <p className="text-lg text-neutral-400 mb-4">Computer Science Engineering Student</p>
              <p className="text-gold-500 font-medium">AI‑Assisted Web App Builder | System‑First Thinker</p>
            </div>
          </FadeIn>

          {/* Professional Summary */}
          <FadeIn delay={100}>
            <h4 className="text-xl font-display font-bold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></span>
              Professional Summary
            </h4>
            <p className="leading-relaxed text-neutral-400">
              AI‑native Computer Science Engineering student with hands‑on experience building <strong>production‑style web applications using AI‑assisted development workflows</strong>. Strong focus on <strong>system design, feature decomposition, architecture decisions, and end‑to‑end execution</strong>. Skilled at leveraging modern AI tools to generate code and then <strong>understand, modify, debug, and extend it</strong> to deliver complete, working products. Outcome‑driven, honest, and adaptable to modern software engineering practices.
            </p>
          </FadeIn>

          {/* Core Strengths & Tech Exposure */}
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={200}>
              <h4 className="text-xl font-display font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></span>
                Core Strengths
              </h4>
              <ul className="space-y-2 text-neutral-400 list-disc list-inside marker:text-gold-metallic/50">
                <li>System design & feature planning</li>
                <li>Architecture and data‑flow reasoning</li>
                <li>AI‑assisted development & prompt engineering</li>
                <li>Rapid prototyping and iteration</li>
                <li>Understanding and maintaining AI‑generated codebases</li>
              </ul>
            </FadeIn>

            <FadeIn delay={300}>
              <h4 className="text-xl font-display font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></span>
                Technical Exposure
              </h4>
               <ul className="space-y-3 text-neutral-400">
                <li><strong className="text-neutral-200">Web Architecture:</strong> Next.js (App Router), React 19, Tailwind CSS, ShadCN UI</li>
                <li><strong className="text-neutral-200">AI Reasoning:</strong> Gemini 3 Pro Integration, Prompt Engineering, Genkit</li>
                <li><strong className="text-neutral-200">Data & Backend:</strong> Firebase Firestore, Auth, LocalStorage state-machines</li>
                <li><strong className="text-neutral-200">Visualization:</strong> D3.js (Force-directed graphs), Recharts, Framer Motion</li>
                <li><strong className="text-neutral-200">Development Style:</strong> AI-augmented coding with rigorous manual system validation</li>
              </ul>
            </FadeIn>
          </div>

          {/* Projects (Textual Resume Style) */}
          <FadeIn delay={400}>
            <h4 className="text-xl font-display font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-gold-metallic rounded-full mr-3"></span>
              Academic & Personal Projects
            </h4>
            <div className="space-y-8 border-l border-white/10 ml-1 pl-8 relative">
              {[
                {
                   title: "Git Forensics — AI‑Powered Debugger Suite",
                   subtitle: "High‑stakes root‑cause analysis and blast‑radius mapping tool",
                   points: [
                     "Developed an AI-powered forensic debugger using Gemini 3 Pro for architectural pivot analysis.",
                     "Visualized semantic blast-radius and hidden couplings using interactive D3.js force-directed graphs.",
                     "Integrated regression risk scoring (0-100%) and failure path simulation for version control audits.",
                     "Designed a custom Git Bisect HUD to isolate regressions in complex project histories."
                   ]
                },
                {
                   title: "CrockeryHub — AI‑Built E‑commerce Platform",
                   subtitle: "Business‑ready storefront with a powerful admin system",
                   points: [
                     "Designed and built a full‑stack e‑commerce platform using AI‑assisted workflows.",
                     "Implemented admin dashboard for managing products, categories, brands, and site settings.",
                     "Integrated Firebase Authentication and Firestore for secure access and data handling.",
                     "Added WhatsApp‑based purchase and inquiry flow for real‑world usability."
                   ]
                },
                {
                   title: "AetherSchedule — Intelligent Timetabling System",
                   subtitle: "NP‑Hard scheduling solver using Neuro‑Symbolic AI",
                   points: [
                     "Conceptualized and implemented an AI‑powered academic scheduling system using Gemini 3.0 Pro.",
                     "Engineered a deterministic 'Busy Matrix' repair layer to enforce O(1) conflict-free guarantees.",
                     "Visualized operational congestion through real-time heatmaps and Digital Twin analytics."
                   ]
                },
                {
                   title: "Flix — Movie & TV Discovery Platform",
                   subtitle: "Large‑scale media discovery and exploration system",
                   points: [
                     "Built a feature‑rich media platform using the TMDB API and Next.js App Router.",
                     "Implemented AI‑powered fallback logic to handle broken video sources dynamically.",
                     "Designed advanced search and multi-criteria filtering for optimized content discovery."
                   ]
                },
                {
                   title: "Campus Pulse — College Event & Club Hub",
                   subtitle: "Centralized digital ecosystem for campus activities",
                   points: [
                     "Developed a platform for discovering and managing college events and club budgets.",
                     "Built admin dashboards with financial intelligence charts using Recharts.",
                     "Implemented a client-side ORM to handle relational data integrity without a traditional backend."
                   ]
                }
              ].map((project, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[37px] top-2 w-4 h-4 rounded-full border-2 border-neutral-800 bg-neutral-900 text-gold-metallic/50 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-metallic"></span>
                  </span>
                  <h5 className="text-lg font-bold text-white">{project.title}</h5>
                  <p className="text-gold-metallic/80 text-sm mb-2 italic">{project.subtitle}</p>
                  <ul className="text-sm text-neutral-400 list-disc list-inside space-y-1 marker:text-neutral-600">
                    {project.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Improving & Positioning */}
          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <FadeIn delay={500}>
              <h4 className="text-lg font-display font-bold text-white mb-4">Currently Improving</h4>
              <ul className="space-y-2 text-sm text-neutral-400 list-disc list-inside marker:text-gold-metallic/50">
                <li>Advanced Large Language Model (LLM) reasoning for system architecture</li>
                <li>Deeper integration of D3.js for complex system observability</li>
                <li>Scalable prompt engineering for zero-shot architectural generation</li>
              </ul>
            </FadeIn>
            
            <FadeIn delay={600}>
              <h4 className="text-lg font-display font-bold text-white mb-4">Professional Positioning</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex gap-2">
                   <span className="text-gold-metallic">›</span>
                   <span>AI‑assisted development is used as a <strong>productivity multiplier</strong>, not a replacement for thinking.</span>
                </li>
                <li className="flex gap-2">
                   <span className="text-gold-metallic">›</span>
                   <span>Strong emphasis on <strong>ownership, reasoning, and outcomes</strong> over syntax memorization.</span>
                </li>
                <li className="flex gap-2">
                   <span className="text-gold-metallic">›</span>
                   <span>Actively preparing for <strong>internship roles in High-Performance Web / AI Development</strong>.</span>
                </li>
              </ul>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};