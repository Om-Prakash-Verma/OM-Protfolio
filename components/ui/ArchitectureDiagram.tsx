import React from 'react';
import { motion } from 'framer-motion';

export const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-neutral-900/50 border border-white/10 rounded p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-metallic/50 to-transparent"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* Client Layer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-32 h-20 bg-black border border-neutral-700 rounded-lg flex items-center justify-center flex-col shadow-lg shadow-gold-metallic/5">
            <span className="text-white font-display font-bold text-sm">Next.js Client</span>
            <span className="text-xs text-neutral-500">SSG + ISR</span>
          </div>
        </motion.div>

        {/* Connection Arrow */}
        <div className="hidden md:flex flex-col items-center text-neutral-600">
          <span className="text-[10px] uppercase tracking-wider mb-1">JSON / API</span>
          <div className="w-24 h-[1px] bg-neutral-700 relative">
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-neutral-700 rotate-45"></div>
          </div>
        </div>

        {/* Logic Layer */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
           className="flex flex-col items-center gap-4"
        >
           <div className="w-40 h-24 bg-neutral-800 border-2 border-dashed border-neutral-600 rounded-lg flex items-center justify-center flex-col relative">
              <span className="absolute -top-3 bg-neutral-900 px-2 text-[10px] text-gold-metallic uppercase tracking-widest">Middleware</span>
              <span className="text-white font-display font-bold text-sm">Auth Guard</span>
              <span className="text-xs text-neutral-500 mt-1">Role Validation</span>
           </div>
        </motion.div>

        {/* Connection Arrow */}
        <div className="hidden md:flex flex-col items-center text-neutral-600">
          <span className="text-[10px] uppercase tracking-wider mb-1">Read/Write</span>
          <div className="w-24 h-[1px] bg-neutral-700 relative">
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-neutral-700 rotate-45"></div>
          </div>
        </div>

        {/* Data Layer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-32 h-20 bg-black border border-gold-metallic/30 rounded-lg flex items-center justify-center flex-col shadow-[0_0_15px_rgba(212,175,55,0.1)]">
            <span className="text-white font-display font-bold text-sm">Firestore</span>
            <span className="text-xs text-neutral-500">NoSQL DB</span>
          </div>
        </motion.div>

      </div>
      
      <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
        <div className="text-xs text-neutral-500 uppercase tracking-widest">System Architecture v1.0</div>
        <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
        </div>
      </div>
    </div>
  );
};