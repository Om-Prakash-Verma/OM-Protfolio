import React from 'react';
import { motion } from 'framer-motion';

export const NeuroSymbolicDiagram: React.FC = () => {
  return (
    <div className="w-full bg-neutral-900/50 border border-white/10 rounded p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-gold-metallic opacity-50"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-xs md:text-sm">
        
        {/* Input Node */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-24 h-16 bg-neutral-800 border border-neutral-600 rounded flex items-center justify-center flex-col">
            <span className="text-white font-bold">Uni State</span>
            <span className="text-[10px] text-neutral-500">JSON Context</span>
          </div>
        </motion.div>

        {/* Arrow */}
        <div className="h-8 md:h-[1px] w-[1px] md:w-12 bg-neutral-700"></div>

        {/* Neural Layer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative p-[1px] rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"
        >
          <div className="bg-black rounded-lg p-4 flex flex-col items-center gap-1 w-32 md:w-40">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold uppercase tracking-wider text-[10px]">Neural Layer</span>
            <span className="text-white font-bold text-center">Gemini 3.0</span>
            <span className="text-[10px] text-neutral-400 text-center">Soft Constraints</span>
          </div>
        </motion.div>

        {/* Arrow with "Draft" label */}
        <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] text-neutral-500 uppercase tracking-widest">Draft</span>
            <div className="h-8 md:h-[1px] w-[1px] md:w-12 bg-neutral-700"></div>
        </div>

        {/* Symbolic Layer */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative p-[1px] rounded-lg bg-gradient-to-br from-gold-metallic to-orange-600"
        >
          <div className="bg-black rounded-lg p-4 flex flex-col items-center gap-1 w-32 md:w-40">
            <span className="text-gold-metallic font-bold uppercase tracking-wider text-[10px]">Symbolic Layer</span>
            <span className="text-white font-bold text-center">Busy Matrix</span>
            <span className="text-[10px] text-neutral-400 text-center">Hard Constraints</span>
          </div>
        </motion.div>

        {/* Arrow */}
         <div className="h-8 md:h-[1px] w-[1px] md:w-12 bg-neutral-700"></div>

        {/* Output Node */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-center gap-2"
        >
           <div className="w-24 h-16 bg-neutral-800 border border-green-500/30 rounded flex items-center justify-center flex-col shadow-[0_0_15px_rgba(34,197,94,0.1)]">
            <span className="text-white font-bold">Schedule</span>
            <span className="text-[10px] text-green-500">Conflict Free</span>
          </div>
        </motion.div>

      </div>
      
      {/* Legend / Status */}
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="text-xs text-neutral-500 font-mono">
           Architecture: <span className="text-white">Neuro-Symbolic Hybrid</span>
        </div>
        <div className="flex gap-4 text-[10px] uppercase tracking-wider">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Probabilistic
            </div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-metallic"></span> Deterministic
            </div>
        </div>
      </div>
    </div>
  );
};