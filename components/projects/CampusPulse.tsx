import React, { useEffect } from 'react';
import { FadeIn } from '../ui/FadeIn';

interface CampusPulseProps {
  onBack: () => void;
}

export const CampusPulse: React.FC<CampusPulseProps> = ({ onBack }) => {
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
                 Event Management
               </span>
               <span className="px-3 py-1 bg-neutral-800 text-neutral-400 text-[10px] uppercase tracking-widest rounded-full border border-white/5">
                 Frontend Architecture
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Campus Pulse
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-8">
              The ultimate college event hub. A centralized digital ecosystem connecting students with campus happenings while empowering club organizers with powerful management tools.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Role</span>
                Solo Developer
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Timeline</span>
                 2 Weeks
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Tech</span>
                 React + LocalStorage
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="flex flex-col justify-center">
             <div className="bg-black/50 p-6 md:p-8 rounded border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                </div>
                <h3 className="text-gold-metallic uppercase tracking-widest text-sm font-semibold mb-6">Technical Architecture</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Framework', val: 'Next.js (App Router)' },
                    { label: 'Language', val: 'TypeScript' },
                    { label: 'State Engine', val: 'Custom Hooks + LocalStorage' },
                    { label: 'UI Components', val: 'ShadCN UI' },
                    { label: 'Charting', val: 'Recharts' }
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
                Campus information is typically fragmented across physical notice boards, WhatsApp groups, and Instagram stories. This leads to low attendance for events and administrative chaos for club organizers trying to track budgets and members.
              </p>
              <p>
                The challenge was to build a <strong>zero-maintenance, centralized platform</strong> that could run without a backend server initially (to reduce hosting costs for student projects) while still providing "full-stack" capabilities like user authentication, data persistence, and relationship management between Clubs and Events.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Core Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-20">
          <FadeIn delay={400}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-gold-metallic">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Student Experience</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                A seamless discovery platform designed to increase engagement and visibility for campus events.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">Interactive Calendar</strong>
                    Users can toggle between a list view and a full monthly calendar to visually track conflicting schedules.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">Dynamic Filtering</strong>
                    Events can be sliced by Category (Academic, Sports, Social) and Date Range, making it easy to find relevant activities.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">Social Proof</strong>
                    Integrated a star rating and review system for past events, helping students gauge quality and helping organizers gather feedback.
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-white/20">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Organizer Dashboard</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                A comprehensive suite of tools for club leads to manage operations, teams, and finances.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">Financial Intelligence</strong>
                    Real-time budget tracking with Recharts. Visualizes spending against the monthly cap and shows historical expenditure trends.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">Team Roster</strong>
                    Role-based management (President, Member, Treasurer) that reflects on the public club profile page.
                  </div>
                </li>
                 <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">Asset Control</strong>
                    Drag-and-drop interface for managing photo galleries and public resource links.
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
              Technical Solutions & Architecture
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Simulated Backend Architecture</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  I engineered a custom `useData` hook that acts as an ORM. It abstracts `localStorage` calls into clean methods like `getEventsByClubId()` or `updateBudget()`. This allows the app to function as a full CRUD system entirely on the client-side, making it perfect for demos and hackathons.
                </p>
              </div>
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Cross-Tab Synchronization</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  To prevent state drift, I implemented a `storage` event listener. If a user updates a budget in one tab, the dashboard in another tab updates instantly without a refresh, mimicking a WebSocket connection.
                </p>
              </div>
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Relational Data Integrity</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Even without a SQL DB, I enforced foreign-key-like relationships. When a Club is deleted, a cascade function triggers to remove all associated Events and Reviews from the local store, ensuring no orphaned data remains.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};