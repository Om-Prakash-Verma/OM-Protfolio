import React, { useEffect } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SEO } from '../SEO';
import { ForensicGraph } from '../ui/ForensicGraph';

interface GitForensicsProps {
  onBack: () => void;
}

export const GitForensics: React.FC<GitForensicsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-neutral-900 pt-20 pb-16 md:pt-24 md:pb-20 relative">
      <SEO 
        title="Git Forensics - AI Debugger Case Study | Om Prakash Verma"
        description="A high-stakes root-cause analysis tool integrating Gemini 3 Pro reasoning with D3.js visualization for Git history forensic audits."
        keywords={['Git', 'Forensics', 'AI Debugging', 'Gemini 3 Pro', 'D3.js', 'React 19']}
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
               <span className="px-3 py-1 bg-red-500/10 text-red-400 text-[10px] uppercase tracking-widest rounded-full border border-red-500/20">
                 Forensic Suite
               </span>
               <span className="px-3 py-1 bg-neutral-800 text-neutral-400 text-[10px] uppercase tracking-widest rounded-full border border-white/5">
                 Production Grade
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Git Forensics
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-8">
              "Code reveals what happened. Forensics reveals why it matters." <br/>
              A multidimensional map for root-cause analysis, transforming standard Git history into actionable architectural intelligence.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Role</span>
                Solo Developer
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Timeline</span>
                 Ongoing
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Engine</span>
                 Gemini 3 Pro
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="flex flex-col justify-center">
             <div className="bg-black/50 p-6 md:p-8 rounded border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                </div>
                <h3 className="text-gold-metallic uppercase tracking-widest text-sm font-semibold mb-6">Forensic Stack</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Core Framework', val: 'React 19' },
                    { label: 'Intelligence Layer', val: 'Gemini 3 Pro + Flash Fallback' },
                    { label: 'Visualization', val: 'D3.js (Force-Directed Graph)' },
                    { label: 'Data Management', val: 'State-Machine Driven HUD' },
                    { label: 'Version Control', val: 'Native Git API Integration' }
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

        {/* Forensic Intelligence Breakdown */}
        <FadeIn delay={300}>
          <div className="mb-12 md:mb-20">
            <h3 className="text-xl md:text-3xl font-display font-bold text-white mb-8">AI-Driven Forensic Intelligence</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: "Architectural Pivot Analysis", 
                  desc: "Identifies the technical pivot or core architectural shift instead of just describing file changes." 
                },
                { 
                  title: "Regression Risk Profile", 
                  desc: "Calculates probability scores (0-100%) based on churn volume, file volatility, and semantic complexity." 
                },
                { 
                  title: "Failure Path Simulation", 
                  desc: "Simulates runtime execution over the changeset to predict the specific component most likely to fail." 
                },
                { 
                  title: "Hidden Coupling Scan", 
                  desc: "Detects 'ghost dependencies' like environment variable assumptions or shared database table expectations." 
                },
                { 
                  title: "Remediation Protocol", 
                  desc: "Provides a prioritized list of mitigation strategies from unit tests to refactoring steps." 
                },
                { 
                  title: "Primary Danger Reasoning", 
                  desc: "Isolates the single most dangerous architectural flaw introduced by the commit." 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-neutral-800/40 p-6 border-l border-gold-metallic/30 hover:border-gold-metallic transition-colors">
                  <h4 className="text-white font-bold mb-3 text-sm md:text-base">{item.title}</h4>
                  <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Interactive Visualization */}
        <FadeIn delay={350}>
           <div className="mb-12 md:mb-20">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6">Visual Impact Mapping</h3>
              <p className="text-neutral-400 mb-8 max-w-3xl leading-relaxed">
                Hover over nodes to inspect <strong>regression telemetry</strong>. The graph calculates the "blast radius" of a change by identifying non-obvious dependencies through import parsing and semantic proximity.
              </p>
              <ForensicGraph />
           </div>
        </FadeIn>

        {/* Technical Architecture */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-20">
          <FadeIn delay={400}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-red-500">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">AI Dispatch Tier</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                An intelligent request handler that balances reasoning depth with execution speed.
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start text-neutral-300">
                   <strong className="text-white mr-2">Tiered Fallback:</strong> Attempts analysis with Gemini 3 Pro (4k thinking budget), falling back to Flash for low-priority commits.
                </li>
                <li className="flex items-start text-neutral-300">
                   <strong className="text-white mr-2">Context Truncation:</strong> Custom logic that prioritizes modified function bodies over boilerplate within the 32k context window.
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-gold-metallic">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Git Bisect HUD</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                A state-machine driven interface for quickly isolating regressions.
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start text-neutral-300">
                   <strong className="text-white mr-2">Binary History Search:</strong> Streamlined 'Good/Bad' marking logic that handles the heavy lifting of Git path exploration.
                </li>
                <li className="flex items-start text-neutral-300">
                   <strong className="text-white mr-2">Optimistic History Scrubbing:</strong> Pre-fetches commit metadata as you hover, providing instant feedback on the timeline.
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Engineering Strategy */}
        <FadeIn delay={600}>
          <div className="border border-white/10 bg-black/40 p-6 md:p-10 rounded-sm">
            <h3 className="text-lg md:text-xl font-display font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-red-500 mr-4"></span>
              The Audit Protocol
            </h3>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm">
              <div className="px-4 py-2 bg-neutral-900 border border-white/5 rounded">1. Scrub volatility timeline</div>
              <div className="px-4 py-2 bg-neutral-900 border border-white/5 rounded">2. Run Forensic AI Audit</div>
              <div className="px-4 py-2 bg-neutral-900 border border-white/5 rounded">3. Trace blast-radius graph</div>
              <div className="px-4 py-2 bg-neutral-900 border border-white/5 rounded">4. Execute Bisect mitigation</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};