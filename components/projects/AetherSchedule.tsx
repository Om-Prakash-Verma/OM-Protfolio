import React, { useEffect } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SEO } from '../SEO';
import { NeuroSymbolicDiagram } from '../ui/NeuroSymbolicDiagram';

interface AetherScheduleProps {
  onBack: () => void;
}

export const AetherSchedule: React.FC<AetherScheduleProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-neutral-900 pt-20 pb-16 md:pt-24 md:pb-20 relative">
      <SEO 
        title="AetherSchedule - Neuro-Symbolic Architecture | Om Prakash Verma"
        description="A digital twin for academic operations solving NP-Hard scheduling problems using a hybrid of Gemini 3.0 Pro reasoning and deterministic constraint repair."
        keywords={['Neuro-Symbolic AI', 'Gemini 3.0 Pro', 'Algorithm Design', 'React', 'Digital Twin']}
        type="article"
      />
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation */}
        <FadeIn>
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 md:mb-12"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="uppercase tracking-widest text-xs font-semibold">Back to Projects</span>
          </button>
        </FadeIn>

        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20 border-b border-white/10 pb-12 md:pb-16">
          <FadeIn delay={100}>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
               <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-[10px] uppercase tracking-widest rounded-full border border-purple-500/20">
                 Neuro-Symbolic AI
               </span>
               <span className="px-3 py-1 bg-neutral-800 text-neutral-400 text-[10px] uppercase tracking-widest rounded-full border border-white/5">
                 Enterprise SaaS
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              AetherSchedule
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-8">
              An enterprise-grade academic operations platform serving as a <strong>Digital Twin</strong> for educational institutions. 
              It solves the NP-Hard University Course Timetabling Problem by fusing Generative AI creativity with algorithmic rigidity.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Role</span>
                System Architect
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Timeline</span>
                 4 Weeks
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Model</span>
                 Gemini 3.0 Pro
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="flex flex-col justify-center">
             <div className="bg-black/50 p-6 md:p-8 rounded border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>
                </div>
                <h3 className="text-gold-metallic uppercase tracking-widest text-sm font-semibold mb-6">Architecture Stack</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Neural Engine', val: 'Gemini 3.0 Pro (Reasoning)' },
                    { label: 'Symbolic Engine', val: 'Deterministic Repair Layer' },
                    { label: 'Backend', val: 'Firebase Firestore' },
                    { label: 'Frontend', val: 'React + Glassmorphism UI' },
                    { label: 'Visualization', val: 'Recharts (Heatmaps)' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0">
                      <span className="text-neutral-500 text-sm">{item.label}</span>
                      <span className="text-white font-medium text-right ml-4">{item.val}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </FadeIn>
        </div>

        {/* The Challenge */}
        <FadeIn delay={300}>
          <div className="mb-12 md:mb-20 grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">The NP-Hard Problem</h3>
            </div>
            <div className="md:col-span-8 text-neutral-300 leading-relaxed font-light text-base md:text-lg">
              <p className="mb-6">
                The University Course Timetabling Problem (UCTP) is a classic combinatorial optimization nightmare. It requires assigning lectures to specific times and rooms while satisfying a matrix of "Hard Constraints" (physics: a room cannot hold two classes) and "Soft Constraints" (pedagogy: Professors prefer morning classes).
              </p>
              <p>
                Traditional solutions like Genetic Algorithms are slow and produce "robotic" schedules. My goal was to build a system that uses <strong>Generative AI for creativity</strong> (strategic load balancing) but ensures <strong>mathematical perfection</strong> through a deterministic verification layer.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Visual Architecture - NEW DIAGRAM */}
        <FadeIn delay={350}>
           <div className="mb-12 md:mb-20">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6">Neuro-Symbolic Pipeline</h3>
              <NeuroSymbolicDiagram />
           </div>
        </FadeIn>

        {/* Core Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-20">
          <FadeIn delay={400}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-purple-500">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Neural Strategy Layer</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                Gemini 3.0 Pro acts as the strategic planner, handling nuance and pattern matching.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-purple-400 mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">Context Injection & Sanitization</strong>
                    The system serializes the university state into a JSON context. A custom serializer strips circular dependencies (Faculty → Subject → Faculty) to maximize token efficiency.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-purple-400 mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">Big Rock Heuristic</strong>
                    The AI is prompted to identify "Big Rocks" (Labs, 4-hour blocks) first, distributing them to avoid "Hell Days" for students, mimicking human empathy.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-purple-400 mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">Probabilistic Reasoning</strong>
                    Unlike rigid algorithms, the AI can "break rules" if necessary to find a global optimum, which the next layer then fixes.
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-gold-metallic">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Symbolic Repair Layer</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                A deterministic TypeScript engine that enforces the laws of physics and time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">The Busy Matrix</strong>
                    A 3D Boolean Matrix `Matrix[Day][Slot][ResourceID]` is constructed. Before any AI suggestion is accepted, it runs an O(1) collision check against this mask.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">Greedy Slot Search</strong>
                    If the AI hallucinates a double-booking, the repair engine triggers a local search, iterating through `(t+1)` until the nearest valid slot is found.
                  </div>
                </li>
                 <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">Guaranteed Validity</strong>
                    The output is mathematically guaranteed to be conflict-free, ensuring 100% reliability despite the probabilistic nature of the AI.
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Digital Twin Analytics */}
        <FadeIn delay={600}>
          <div className="mb-12 md:mb-20">
             <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6">Operational Analytics</h3>
             <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-black border border-white/10 p-6 rounded">
                   <h4 className="text-gold-metallic font-bold mb-2">Congestion Heatmaps</h4>
                   <p className="text-sm text-neutral-400">Visual grids (Days x Slots) where color intensity represents campus density, helping admins identify bottlenecks (e.g., "Tuesday Morning is 95% full").</p>
                </div>
                <div className="bg-black border border-white/10 p-6 rounded">
                   <h4 className="text-gold-metallic font-bold mb-2">Efficiency Gauges</h4>
                   <p className="text-sm text-neutral-400">Real-time tracking of Room Utilization vs. Capacity and Faculty Saturation rates, ensuring resources aren't wasted.</p>
                </div>
                <div className="bg-black border border-white/10 p-6 rounded">
                   <h4 className="text-gold-metallic font-bold mb-2">Spider Charts</h4>
                   <p className="text-sm text-neutral-400">Comparing Faculty Headcount vs. Course Load per department to visualize staffing imbalances.</p>
                </div>
             </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};