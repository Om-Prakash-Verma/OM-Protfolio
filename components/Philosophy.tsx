import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-32 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start md:items-center">
          <div>
            <FadeIn>
              <h2 className="text-gold-metallic text-xs md:text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
                Core Philosophy
              </h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-8">
                Building with <br/>
                <span className="text-neutral-500">Intention.</span>
              </h3>
            </FadeIn>
          </div>
          
          <div className="space-y-10 md:space-y-12">
            {[
              { head: "Outcome over Syntax", desc: "The user doesn't care about the stack. They care about the solution." },
              { head: "Systems before Code", desc: "A well-architected system saves weeks of coding. I measure twice, cut once." },
              { head: "Ownership over Automation", desc: "AI writes the boilerplate. I own the logic, the edge cases, and the quality." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 200} direction="left">
                <div className="group cursor-default">
                  <h4 className="text-xl md:text-2xl text-white font-display font-medium mb-2 group-hover:text-gold-metallic transition-colors">
                    {item.head}
                  </h4>
                  <p className="text-neutral-400 font-light border-l border-white/10 pl-4 group-hover:border-gold-metallic/50 transition-colors text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};