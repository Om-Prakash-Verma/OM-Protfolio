import React, { useEffect } from 'react';
import { FadeIn } from '../ui/FadeIn';

interface FlixProps {
  onBack: () => void;
}

export const Flix: React.FC<FlixProps> = ({ onBack }) => {
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
                 Media Discovery
               </span>
               <span className="px-3 py-1 bg-neutral-800 text-neutral-400 text-[10px] uppercase tracking-widest rounded-full border border-white/5">
                 Open Source
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Flix
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-8">
              Your ultimate movie and TV show discovery platform. Built to bridge the gap between discovery and playback with a sleek, data-rich interface and intelligent stream sourcing.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Role</span>
                Frontend Architect
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Timeline</span>
                 3 Weeks
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Tech</span>
                 Next.js + TMDB API
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="flex flex-col justify-center">
             <div className="bg-black/50 p-6 md:p-8 rounded border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
                </div>
                <h3 className="text-gold-metallic uppercase tracking-widest text-sm font-semibold mb-6">System Stack</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Framework', val: 'Next.js 14 (App Router)' },
                    { label: 'Language', val: 'TypeScript' },
                    { label: 'Data Provider', val: 'The Movie Database (TMDB)' },
                    { label: 'Styling', val: 'Tailwind CSS + Framer Motion' },
                    { label: 'AI Engine', val: 'Genkit (Fallback Logic)' }
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
                Streaming content is fragmented across dozens of services, making discovery a hassle. Users often spend more time looking for something to watch than actually watching it.
              </p>
              <p>
                The goal was to build a <strong>unified discovery interface</strong> that aggregates data from TMDB (The Movie Database) into a cohesive, high-performance UI. A key technical hurdle was integrating a reliable playback system that could handle multiple source providers and fallback intelligently if a stream was broken, ensuring a seamless "Netflix-like" experience without the subscription friction.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Core Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-20">
          <FadeIn delay={400}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-gold-metallic">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Discovery Engine</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                A comprehensive browsing experience designed to help users find their next favorite watch instantly.
              </p>
              <ul className="space-y-4">
                 <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">Deep Data Integration</strong>
                    Dynamic routes (`/movie/[id]`) pull detailed metadata including cast, production crews, trailers, and "similar content" recommendations, creating a Wikipedia-level depth for every title.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">Advanced Filtering</strong>
                    Users can construct complex queries (e.g., "Action movies from 1990-2000 sorted by rating") via a responsive sidebar that updates the URL parameters for shareability.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">"Surprise Me"</strong>
                    A randomized picker algorithm that fetches a random page from the API and selects a title, helping indecisive users overcome decision paralysis.
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-white/20">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Playback System</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                A robust custom video player engineered for reliability and seamless streaming.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">Multi-Source Aggregation</strong>
                    The player doesn't rely on a single source. It iterates through a prioritized list of ad-free providers to find the highest quality stream available.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">AI-Powered Fallback</strong>
                    Genkit-powered logic monitors network responses. If a 404 or timeout is detected, the system automatically re-routes the request to the next best source in real-time.
                  </div>
                </li>
                 <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">Smart Episodic UI</strong>
                    For TV shows, the player includes a side-panel season/episode selector, allowing users to binge-watch without navigating back to the menu.
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Technical Deep Dive */}
        <FadeIn delay={600}>
          <div className="border border-white/10 bg-black/40 p-6 md:p-10 rounded-sm">
            <h3 className="text-lg md:text-xl font-display font-bold text-white mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-gold-metallic mr-4"></span>
              Technical Solutions & Trade-offs
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">API Abstraction Layer</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  To protect the TMDB API key and avoid CORS issues, I implemented a <strong>Next.js API Proxy</strong>. All client-side requests go to `/api/tmdb/...`, which signs the request server-side. This also allowed me to implement caching headers, significantly reducing API usage and speeding up repeat visits.
                </p>
              </div>
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Modular Component Architecture</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Adopted the <strong>Atomic Design</strong> principle with Shadcn/UI. Created highly reusable atoms (RatingBadges, PosterCards) that compose into complex molecules (MediaCarousels, SeasonLists), ensuring UI consistency across the massive 100+ page application.
                </p>
              </div>
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Client-Side Resilience</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  The video player utilizes a custom `useStreamHealth` hook. It proactively "pings" the stream source HEAD before loading the heavy iframe. If the latency is too high or the status is non-200, it switches the provider source state instantly, invisible to the user.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};