import React from 'react';
import { FadeIn } from './ui/FadeIn';

const skillSets = [
  {
    title: "System Design",
    description: "Architecting scalable solutions before writing a single line of code.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    )
  },
  {
    title: "Feature Decomposition",
    description: "Breaking complex requirements into manageable, shippable units.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
  },
  {
    title: "AI-Assisted Dev",
    description: "Using LLMs for rapid prototyping, refactoring, and logic validation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: "Full Stack Fundamentals",
    description: "Connecting cohesive frontends with robust backend logic.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    )
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-dark-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            My Approach
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Tools change. Methodologies adapt. The core ability to solve problems systematically remains constant.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillSets.map((skill, index) => (
            <FadeIn key={index} delay={index * 150}>
              <div className="group h-full p-8 bg-white/5 border border-white/5 hover:border-gold-metallic/50 hover:bg-white/10 transition-all duration-300 rounded-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-metallic flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};