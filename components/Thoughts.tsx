import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const Thoughts: React.FC = () => {
  const models = [
    {
      title: "The 80/20 of AI Coding",
      date: "System Design",
      content: "80% of the effort should be in defining the schema and the prompt. The code generation is just the final mile. If the system design is flawed, the AI will just generate flawed code faster."
    },
    {
      title: "State Machines over Boolean Soup",
      date: "Architecture",
      content: "Stop using `isLoading`, `isError`, `isSuccess`. Use explicit state machines. It makes the UI deterministic and prevents impossible states (like loading and error being true simultaneously)."
    },
    {
      title: "Optimistic UI Patterns",
      date: "UX",
      content: "Users shouldn't wait for the server to confirm a 'like' button press. Update the UI instantly, send the request in the background, and rollback if it fails. Perceived speed > Actual speed."
    }
  ];

  return (
    <section id="thoughts" className="py-24 bg-dark-900 border-t border-white/5 relative">
       <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                Mental Models
              </h2>
              <p className="text-neutral-500 uppercase tracking-widest text-xs md:text-sm">
                Thoughts on Systems, AI, and Engineering
              </p>
            </div>
            <button className="text-gold-metallic text-sm uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2">
              Read all posts <span className="text-lg">→</span>
            </button>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="group h-full bg-white/5 border border-white/5 p-8 rounded-sm hover:border-gold-metallic/30 hover:bg-white/[0.07] transition-all cursor-pointer flex flex-col">
                <div className="text-gold-metallic text-xs uppercase tracking-widest mb-4 font-semibold">
                  {model.date}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-gold-metallic transition-colors">
                  {model.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                  {model.content}
                </p>
                <div className="text-neutral-500 text-sm group-hover:text-white transition-colors flex items-center gap-2">
                  Read more
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
       </div>
    </section>
  );
};