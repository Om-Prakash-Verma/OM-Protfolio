import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-black text-center relative">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-6 md:mb-8">
            Let's Build Something <span className="text-gold-metallic">Solid.</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg mb-10 md:mb-12">
            Open to discussing system design, web architecture, and full-time opportunities.
          </p>
          
          <a 
            href="mailto:omprakashverma.in@gmail.com" 
            className="inline-block px-8 py-4 md:px-10 md:py-5 bg-white text-black font-bold tracking-wide rounded-sm hover:bg-gold-metallic hover:scale-105 transition-all duration-300 text-sm md:text-base"
          >
            Say Hello
          </a>

          <div className="mt-12 md:mt-16 flex justify-center space-x-8">
            {/* GitHub */}
            <a 
              href="https://github.com/Om-Prakash-Verma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
               <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/om-prakash-verma/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>

            {/* Twitter / X */}
            <a 
              href="https://x.com/OmPrakash_in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="X (Twitter)"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/omprakashverma.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 4.354.2 2.614 2.63 2.614 7.047V16.95c0 4.416 1.74 6.846 4.439 6.975 1.281.058 1.689.073 4.947.073 3.259 0 3.668-.015 4.948-.073 2.7-.129 4.438-2.559 4.438-6.975V7.047c0-4.417-1.74-6.847-4.438-6.975C15.668.015 15.259 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.476 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};