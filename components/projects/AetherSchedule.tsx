import React, { useEffect } from 'react';
import { FadeIn } from '../ui/FadeIn';

interface AetherScheduleProps {
  onBack: () => void;
}

export const AetherSchedule: React.FC<AetherScheduleProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-neutral-900 pt-20 pb-16 md:pt-24 md:pb-20 relative">
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
               <span className="px-3 py-1 bg-gold-metallic/10 text-gold-metallic text-[10px] uppercase tracking-widest rounded-full border border-gold-metallic/20">
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
              An enterprise-grade academic operations platform solving the NP-Hard University Course Timetabling Problem. 
              Serves as a Digital Twin to digitize resources and generate mathematically conflict-free schedules.
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
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Tech</span>
                 Gemini 3.0 Pro + Algorithms
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="flex flex-col justify-center">
             <div className="bg-black/50 p-6 md:p-8 rounded border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                </div>
                <h3 className="text-gold-metallic uppercase tracking-widest text-sm font-semibold mb-6">Architecture Stack</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Reasoning Engine', val: 'Gemini 3.0 Pro (Thinking Model)' },
                    { label: 'Constraint Solver', val: 'Deterministic Repair Layer' },
                    { label: 'Frontend', val: 'React + Glassmorphism UI' },
                    { label: 'Backend', val: 'Firebase Firestore' },
                    { label: 'Visualization', val: 'Heatmaps & Spider Charts' }
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
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">The Challenge</h3>
            </div>
            <div className="md:col-span-8 text-neutral-300 leading-relaxed font-light text-base md:text-lg">
              <p className="mb-6">
                The University Course Timetabling Problem (UCTP) is a classic <strong>NP-Hard combinatorial optimization problem</strong>. It involves assigning lectures to specific times and rooms while satisfying a multitude of hard constraints (no double booking, room capacity) and soft constraints (professor preferences, minimizing gaps).
              </p>
              <p>
                Traditional approaches use genetic algorithms which are slow and often produce "robotic" schedules. The goal was to build a system that uses <strong>Generative AI for creativity</strong> (handling soft constraints) but ensures <strong>mathematical perfection</strong> (satisfying hard constraints) through code, reducing a 2-week manual process to 60 seconds.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Core Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-20">
          <FadeIn delay={400}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-gold-metallic">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Neuro-Symbolic Scheduler</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                A hybrid engine combining LLM reasoning for strategy with algorithmic precision for physics.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">Neural Strategy (Gemini 3.0)</strong>
                    The AI analyzes the "Big Rocks" first (Labs, Fixed Rooms) and distributes lectures to avoid "Hell Days" for students. It understands nuance that algorithms miss.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">Symbolic Verification</strong>
                    A deterministic TypeScript engine acts as a "Busy Mask". It validates every AI suggestion against a 3D Boolean Matrix.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">Automatic Repair</strong>
                    If the AI hallucinates a double-booking, the system triggers a Greedy Slot Search to mathematically find the nearest valid time slot.
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-white/20">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Digital Twin Analytics</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                Visualizing the pulse of the institution through real-time data aggregation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">Congestion Heatmaps</strong>
                    Visual grids (Days x Slots) where color intensity represents campus density. Helps admins identify bottlenecks (e.g., "Tuesday Morning is 95% full").
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">Efficiency Gauges</strong>
                    Real-time tracking of Room Utilization vs. Capacity and Faculty Saturation rates, ensuring resources aren't wasted.
                  </div>
                </li>
                 <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">Dynamic Configuration</strong>
                    Unlike rigid schedulers, the grid recalculates automatically based on configurable period durations (e.g., 45 vs 60 mins) and named breaks.
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Deep Dive */}
        <FadeIn delay={600}>
          <div className="border border-white/10 bg-black/40 p-6 md:p-10 rounded-sm">
            <h3 className="text-lg md:text-xl font-display font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-gold-metallic mr-4"></span>
              Technical Implementation Highlights
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Deterministic Repair</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  The core innovation is the `validateAndRepair()` function. It treats the schedule as a 3D coordinate system (Time, Room, Entity). Before finalizing any slot, it runs an O(1) lookup on a `BusyMatrix`. If occupied, it iterates through `(t+1)` until a free coordinate is found.
                </p>
              </div>
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Circular Dependency Removal</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  To inject the university state into the AI context window, I had to flatten the object graph. I wrote a custom serializer that strips circular references (Faculty → Subject → Faculty) to prevent JSON errors and optimize token usage.
                </p>
              </div>
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Optimized Conflict Detection</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Moved away from nested loops O(N²) for conflict detection. Implemented a Map-based indexing strategy where every schedule entry generates a unique hash key `Day_Slot_EntityID`. This reduced validation time to O(N), enabling real-time feedback on the UI.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};