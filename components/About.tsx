import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="border-l-2 border-gold-metallic pl-6 md:pl-10 mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Not just a coder. <br/>
              <span className="text-neutral-400">A System Architect.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 text-neutral-300 leading-relaxed text-lg font-light">
          <FadeIn delay={200}>
            <p className="mb-6">
              In a world where code is abundant, <strong className="text-white font-normal">structure is scarce</strong>. 
              My approach isn't about memorizing syntax, but about understanding the flow of data, 
              the architecture of decisions, and the user's journey through a system.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <p className="mb-6">
              I leverage Artificial Intelligence not as a crutch, but as a high-powered engine. 
              It accelerates the "how" so I can obsess over the "what" and "why." 
              <span className="block mt-4 text-gold-metallic font-medium">
                AI is a productivity multiplier, not a replacement for thinking.
              </span>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};