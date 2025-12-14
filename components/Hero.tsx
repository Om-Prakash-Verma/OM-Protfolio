import React from 'react';
import { FadeIn } from './ui/FadeIn';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0">
      
      {/* "Now" Status Widget */}
      <div className="absolute top-24 md:top-32 right-6 md:right-10 z-20">
         <FadeIn delay={1200} direction="left">
           <div className="flex items-center gap-3 bg-neutral-900/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-neutral-300">
                Building: <span className="text-white">Distributed Chat App</span>
              </span>
           </div>
         </FadeIn>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10 flex flex-col justify-center h-full">
        <FadeIn delay={100} direction="up">
          <p className="text-gold-metallic uppercase tracking-[0.2em] text-xs md:text-sm lg:text-base font-medium mb-6">
            Computer Science Engineer
          </p>
        </FadeIn>
        
        <FadeIn delay={300} direction="up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-tight">
            Om Prakash <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 glow-text block md:inline mt-2 md:mt-0">Verma</span>
          </h1>
        </FadeIn>

        <FadeIn delay={500} direction="up">
          <h2 className="text-lg sm:text-xl md:text-2xl text-neutral-400 font-light mb-8 max-w-3xl mx-auto px-4 md:px-0">
            AI-Assisted Web App Builder <span className="text-gold-metallic px-1 md:px-2">•</span> System-First Thinker
          </h2>
        </FadeIn>

        <FadeIn delay={700} direction="up">
          <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-metallic to-transparent mx-auto mb-8"></div>
        </FadeIn>

        <FadeIn delay={900} direction="up">
          <p className="text-neutral-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-2 md:px-0">
            I design systems, break problems into features, and use AI to ship real products.
          </p>
        </FadeIn>

        <FadeIn delay={1100} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-xs sm:max-w-none mx-auto">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="w-full sm:w-auto group relative px-8 py-4 bg-gold-metallic text-black font-semibold tracking-wide overflow-hidden rounded-sm transition-transform hover:scale-105 text-center cursor-pointer"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium tracking-wide hover:border-gold-metallic hover:text-gold-metallic transition-all duration-300 rounded-sm text-center cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-gold-metallic to-transparent"></div>
      </div>
    </section>
  );
};