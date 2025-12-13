import React, { useEffect } from 'react';
import { FadeIn } from '../ui/FadeIn';

interface CrockeryHubProps {
  onBack: () => void;
}

export const CrockeryHub: React.FC<CrockeryHubProps> = ({ onBack }) => {
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
                 E-commerce
               </span>
               <span className="px-3 py-1 bg-neutral-800 text-neutral-400 text-[10px] uppercase tracking-widest rounded-full border border-white/5">
                 Full Stack
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              CrockeryHub
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-8">
              A specialized digital storefront and content management system designed for a premium crockery gallery. 
              Bridging the gap between an elegant user experience and complex inventory management.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Role</span>
                Full Stack Developer
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Timeline</span>
                 4 Weeks
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Focus</span>
                 CMS & Payment Flow
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="flex flex-col justify-center">
             <div className="bg-black/50 p-6 md:p-8 rounded border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <h3 className="text-gold-metallic uppercase tracking-widest text-sm font-semibold mb-6">Tech Stack</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Frontend', val: 'Next.js 14 (App Router)' },
                    { label: 'Styling', val: 'ShadCN UI + Tailwind CSS' },
                    { label: 'Backend', val: 'Firebase (Auth + Firestore)' },
                    { label: 'State', val: 'Zustand + React Query' },
                    { label: 'AI Ops', val: 'Genkit (Content Seeding)' }
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
                The client required a premium digital presence for a high-end crockery business. Generic e-commerce platforms (Shopify/WooCommerce) were either too rigid for their specific categorization needs (Material, Brand, Usage) or too expensive for their localized operation model.
              </p>
              <p>
                The primary technical challenge was to build a <strong>bespoke Content Management System (CMS)</strong> that was simple enough for non-technical staff to use, while maintaining a high-performance, SEO-optimized frontend for customers. Additionally, the checkout process needed to integrate with their existing WhatsApp-based order handling rather than a traditional payment gateway.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Core Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-20">
          <FadeIn delay={400}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-gold-metallic">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Public Storefront</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                A dynamic, customer-facing application optimized for speed, aesthetics, and conversion.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">Dynamic Merchandising</strong>
                    Homepage carousels (Hero, New Arrivals, Featured Brands) are fully controlled via the Admin panel, allowing instant marketing updates.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">Smart Filtering</strong>
                    Implemented faceted search allowing users to cross-filter by Category (Dinnerware), Material (Bone China), and Price Range simultaneously.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">WhatsApp Checkout Bridge</strong>
                    Instead of a silent cart, the checkout generates a pre-filled WhatsApp message with the order ID and item list, bridging the digital and conversational gap.
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-white/20">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Admin Command Center</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                A secure dashboard enabling full control over inventory and business logic.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">Inventory Management</strong>
                    Full CRUD capabilities for Products, Brands, and Categories using React Hook Form and Zod for strict schema validation.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">Live Site Configuration</strong>
                    Toggle site-wide banners, update contact numbers, and modify promotional text directly from the dashboard without a deployment.
                  </div>
                </li>
                 <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">Visual Analytics</strong>
                    Integrated chart.js to visualize product views and category popularity, helping the owner make data-driven stocking decisions.
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
              Technical Implementation Deep Dive
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">NoSQL Data Modeling</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Leveraged Firebase Firestore's document-oriented structure to handle complex product attributes. Created denormalized collections for 'Brands' and 'Categories' to reduce read costs and improve frontend load times, ensuring the menu loads instantly even with 1000+ SKUs.
                </p>
              </div>
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Hybrid Auth Strategy</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                   Implemented a dual-layer security model. Public routes are statically generated (SSG) for performance, while Admin routes are protected via client-side Firebase Auth tokens. Middleware in Next.js ensures unauthorized users are redirected before the dashboard bundle even loads.
                </p>
              </div>
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">AI-Assisted Seeding</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  To avoid manually populating hundreds of dummy products during development, I utilized <strong>Genkit</strong> to generate realistic JSON data for crockery sets (including descriptions, dimensions, and material tags), allowing for robust stress-testing of the UI components.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};