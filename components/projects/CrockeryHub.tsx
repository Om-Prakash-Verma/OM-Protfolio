import React, { useEffect } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SEO } from '../SEO';
import { ArchitectureDiagram } from '../ui/ArchitectureDiagram';

interface CrockeryHubProps {
  onBack: () => void;
}

export const CrockeryHub: React.FC<CrockeryHubProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-neutral-900 pt-20 pb-16 md:pt-24 md:pb-20 relative">
      <SEO 
        title="CrockeryHub - System Architecture | Om Prakash Verma"
        description="A specialized digital storefront and admin system for premium crockery, featuring dynamic content management, nested category logic, and WhatsApp checkout flow."
        keywords={['E-commerce', 'Next.js App Router', 'Firebase', 'CMS Architecture', 'ShadCN UI']}
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
               <span className="px-3 py-1 bg-gold-metallic/10 text-gold-metallic text-[10px] uppercase tracking-widest rounded-full border border-gold-metallic/20">
                 E-commerce System
               </span>
               <span className="px-3 py-1 bg-neutral-800 text-neutral-400 text-[10px] uppercase tracking-widest rounded-full border border-white/5">
                 Production Ready
               </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              CrockeryHub
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mb-8">
              A bespoke digital storefront for premium kitchenware that replaces generic e-commerce rigidity with a custom, high-performance CMS. 
              Built to bridge the gap between an elegant Next.js frontend and a flexible Firebase backend.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Role</span>
                Full Stack Architect
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Timeline</span>
                 4 Weeks
              </div>
              <div className="bg-black px-4 py-2 border border-white/10 rounded">
                 <span className="text-gold-metallic block text-xs uppercase tracking-wider mb-1">Stack</span>
                 Next.js + Firebase
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="flex flex-col justify-center">
             <div className="bg-black/50 p-6 md:p-8 rounded border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <h3 className="text-gold-metallic uppercase tracking-widest text-sm font-semibold mb-6">Technical Stack</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'Framework', val: 'Next.js 14 (App Router)' },
                    { label: 'Component System', val: 'ShadCN UI + Tailwind' },
                    { label: 'Backend / DB', val: 'Firebase (Auth + Firestore)' },
                    { label: 'AI Integration', val: 'Genkit (Data Seeding)' },
                    { label: 'Form Engine', val: 'React Hook Form + Zod' }
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
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">The System Challenge</h3>
            </div>
            <div className="md:col-span-8 text-neutral-300 leading-relaxed font-light text-base md:text-lg">
              <p className="mb-6">
                The client required a premium digital presence that could be managed entirely by non-technical staff. Generic platforms like Shopify were too rigid for their localized operation model, specifically their requirement to handle high-ticket inquiries via WhatsApp rather than a traditional payment gateway.
              </p>
              <p>
                The architectural challenge was to build a <strong>Hybrid Configuration System</strong>. It needed to combine static environment-driven content (for SEO headlines like <em>"From Kitchen to Table — Elegance Redefined"</em>) with a dynamic, real-time admin dashboard that could toggle entire sections of the website on/off instantly without a redeployment.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Visual Architecture Evidence */}
        <FadeIn delay={350}>
           <div className="mb-12 md:mb-20">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-6">System Architecture</h3>
              <ArchitectureDiagram />
           </div>
        </FadeIn>

        {/* Core Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:mb-20">
          <FadeIn delay={400}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-gold-metallic">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Public Storefront</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                A high-performance consumer interface focusing on conversion and ease of discovery.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">WhatsApp Checkout Bridge</strong>
                    Instead of a traditional cart, the system constructs a pre-filled WhatsApp payload containing the Order ID and Product SKU, connecting the digital store directly to the sales team's mobile devices.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">Nested Category Logic</strong>
                    Architected a recursive category system allowing for deep nesting (e.g., Dinnerware → Plates → Bone China) while maintaining flat-lookup performance in Firestore.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">Smart Filtering Engine</strong>
                    Users can slice over 1,000 SKUs by Brand, Category, and Price Range simultaneously, with URL-state synchronization for shareable search results.
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="h-full bg-neutral-800/30 p-6 md:p-8 border-l-2 border-white/20">
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">Admin Command Center</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed text-sm md:text-base">
                A secure, route-protected dashboard enabling full control over business logic.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">01</span>
                  <div>
                    <strong className="block text-white mb-1">Dynamic Form Builder</strong>
                    Engineered a system allowing the admin to inject custom fields (e.g., "Order Number", "Subject") into the public Contact Form dynamically, defining types and requirement status without touching code.
                  </div>
                </li>
                <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">02</span>
                  <div>
                    <strong className="block text-white mb-1">Owner's Guide</strong>
                    Implemented a dedicated `/guide` route within the admin panel, serving as a self-hosted documentation portal for the non-technical site owner to understand all features.
                  </div>
                </li>
                 <li className="flex items-start text-neutral-300 text-sm">
                  <span className="text-gold-metallic mr-3 mt-1">03</span>
                  <div>
                    <strong className="block text-white mb-1">Data Integrity Guardrails</strong>
                    Backend logic specifically prevents the deletion of "Parent" categories if they still contain "Child" sub-categories, preventing orphaned data structures.
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
              Engineering Decisions
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Hybrid Configuration Strategy</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  I architected a two-tier configuration system. Static SEO data (Headlines, Shop Address) is injected via build-time Environment Variables (`NEXT_PUBLIC_HERO_HEADLINE`), while volatile operational data (Stock, Visibility Toggles) is fetched real-time from Firestore.
                </p>
              </div>
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Slug Generation & SEO</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                   Implemented an auto-generating slug system. When an admin creates a product named "Golden Dinner Set 24pc", the system automatically sanitizes strings to generate a collision-free URL friendly ID (`golden-dinner-set-24pc`), crucial for SEO indexing.
                </p>
              </div>
              <div>
                <h4 className="text-gold-metallic font-semibold mb-3">Genkit Data Seeding</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  To stress-test the UI's filtering capabilities, I utilized <strong>Genkit</strong> to generate realistic JSON datasets for crockery (dimensions, material tags, origins), simulating a production environment from Day 1.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};