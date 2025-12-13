import React from 'react';
import { ProjectCard } from './ProjectCard';
import { FadeIn } from './ui/FadeIn';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: "1",
    title: "CrockeryHub",
    description: "A specialized digital storefront and admin system for premium crockery, featuring dynamic content management.",
    features: ["Admin CMS with Analytics", "WhatsApp Checkout Flow", "Dynamic Site Configuration"],
    techStack: ["Next.js", "Firebase", "ShadCN UI", "Genkit"]
  },
  {
    id: "2",
    title: "Flix",
    description: "Feature-rich discovery platform leveraging TMDB and AI for seamless content streaming.",
    features: ["AI-Powered Stream Fallback", "Advanced Filtering Engine", "Multi-Source Video Player"],
    techStack: ["Next.js", "TMDB API", "Genkit", "Tailwind"]
  },
  {
    id: "3",
    title: "Campus Pulse",
    description: "Centralized campus ecosystem for event discovery and club management with simulated backend logic.",
    features: ["Interactive Calendar System", "Financial Budget Tracking", "Client-Side Persistence"],
    techStack: ["Next.js", "TypeScript", "ShadCN UI", "LocalStorage"]
  },
  {
    id: "4",
    title: "AetherSchedule",
    description: "Enterprise-grade academic operations platform solving NP-Hard scheduling problems using Neuro-Symbolic AI.",
    features: ["Neuro-Symbolic Engine", "3D Conflict Detection Matrix", "Operational Analytics Digital Twin"],
    techStack: ["Gemini 3.0 Pro", "React", "Firebase", "Algorithms"]
  }
];

interface ProjectsProps {
  onProjectClick: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-black relative">
       {/* Decorative BG element */}
       <div className="absolute right-0 top-20 w-1/3 h-[1px] bg-gradient-to-l from-gold-metallic/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
                Featured Work
              </h2>
              <p className="text-neutral-500 uppercase tracking-widest text-xs md:text-sm">
                System Design • Implementation • Deployment
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 200}>
              <ProjectCard 
                project={project} 
                onClick={onProjectClick}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};