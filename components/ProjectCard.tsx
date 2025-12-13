import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="group relative bg-neutral-900 border border-neutral-800 hover:border-gold-metallic/50 transition-all duration-500 overflow-hidden flex flex-col h-full rounded-sm">
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-metallic to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl md:text-2xl font-display font-bold text-white group-hover:text-gold-metallic transition-colors pr-8">
            {project.title}
          </h3>
          <span className="text-4xl md:text-5xl text-white/5 font-display font-bold absolute top-4 right-4 group-hover:text-white/10 transition-colors">
             0{project.id}
          </span>
        </div>

        <p className="text-neutral-300 mb-6 text-sm leading-relaxed min-h-[40px]">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest text-gold-600 mb-3 font-semibold">Key Features</h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-xs md:text-sm text-neutral-400">
                <span className="mr-2 text-gold-metallic/70">›</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-2 py-1 text-[10px] uppercase tracking-wider bg-white/5 text-neutral-400 rounded border border-white/5">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => onClick(project.id)}
              className="flex-1 py-3 bg-white text-black text-sm font-semibold hover:bg-gold-metallic transition-colors active:scale-95 duration-200 text-center"
            >
              View Details
            </button>
            
            {project.demoUrl && (
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 border border-white/20 text-white text-sm font-semibold hover:border-gold-metallic hover:text-gold-metallic transition-colors flex items-center justify-center gap-2 active:scale-95 duration-200"
                aria-label="Live Demo"
                title="Live Demo"
              >
                <span>Live Demo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 border border-white/20 text-white hover:border-gold-metallic hover:text-gold-metallic transition-colors"
                aria-label="View Source Code"
                title="View Source Code"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};