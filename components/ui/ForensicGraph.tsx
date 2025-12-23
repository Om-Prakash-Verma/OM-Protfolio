import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NodeProps {
  name: string;
  risk: 'High' | 'Medium' | 'Low' | 'Coupled';
  x: string;
  y: string;
  delay: number;
}

const Node: React.FC<NodeProps> = ({ name, risk, x, y, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getRiskColor = () => {
    switch (risk) {
      case 'High': return 'text-red-500 bg-red-500/10 border-red-500/40';
      case 'Medium': return 'text-orange-400 bg-orange-400/10 border-orange-400/40';
      case 'Coupled': return 'text-gold-metallic bg-gold-metallic/10 border-gold-metallic/40';
      default: return 'text-neutral-400 bg-neutral-800/50 border-neutral-700';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="absolute flex flex-col items-center group cursor-crosshair z-30"
      style={{ left: x, top: y }}
    >
      <div className={`w-14 h-14 backdrop-blur-md border rounded-sm flex items-center justify-center transition-all duration-300 ${getRiskColor()} ${isHovered ? 'scale-110 shadow-[0_0_20px_rgba(212,175,55,0.2)]' : ''}`}>
        <span className="text-[9px] font-mono tracking-tighter text-center px-1 leading-tight">{name}</span>
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute top-full mt-2 bg-black border border-white/10 p-2 w-32 rounded-sm shadow-2xl pointer-events-none"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-[8px] text-neutral-500 uppercase font-bold">Status</span>
              <span className={`text-[8px] uppercase font-bold ${getRiskColor().split(' ')[0]}`}>{risk}</span>
            </div>
            <div className="text-[7px] text-neutral-400 leading-tight">
              {risk === 'High' ? 'Probable break in state transition' : 
               risk === 'Coupled' ? 'Implicit dependency detected' : 
               'Low regression likelihood'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`h-4 w-[1px] ${isHovered ? 'bg-gold-metallic' : 'bg-neutral-800'} transition-colors mt-1`}></div>
      <span className={`text-[8px] uppercase tracking-tighter transition-colors ${isHovered ? 'text-white' : 'text-neutral-500'}`}>{risk} Impact</span>
    </motion.div>
  );
};

export const ForensicGraph: React.FC = () => {
  return (
    <div className="w-full bg-neutral-900/40 border border-white/10 rounded-sm p-8 relative overflow-hidden h-[450px] group/graph">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-metallic/5 via-transparent to-transparent"></div>
      
      {/* Scanning Line */}
      <motion.div 
        animate={{ translateY: ['0%', '450px'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-metallic/20 to-transparent z-10 pointer-events-none"
      />

      {/* Central Root Commit */}
      <motion.div 
        animate={{ 
          boxShadow: ["0 0 0px 0px rgba(212,175,55,0)", "0 0 20px 2px rgba(212,175,55,0.2)", "0 0 0px 0px rgba(212,175,55,0)"]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-gold-metallic rounded-full flex items-center justify-center bg-black/80 backdrop-blur-md z-40"
      >
        <div className="text-center relative">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 border border-dashed border-gold-metallic/20 rounded-full"
          />
          <span className="text-[11px] text-gold-metallic font-display font-bold block mb-1">AUDIT_ROOT</span>
          <span className="text-[8px] text-neutral-500 font-mono block">f7a2c91</span>
          <div className="mt-2 flex gap-1 justify-center">
             <div className="w-1 h-1 bg-red-500 rounded-full"></div>
             <div className="w-1 h-1 bg-gold-metallic rounded-full"></div>
             <div className="w-1 h-1 bg-gold-metallic rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Animated Connection Lines with Data Streams */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#D4AF37" opacity="0.3" />
          </marker>
        </defs>
        
        {/* Connection Paths */}
        {[
          { x1: "50%", y1: "50%", x2: "22%", y2: "22%" },
          { x1: "50%", y1: "50%", x2: "78%", y2: "28%" },
          { x1: "50%", y1: "50%", x2: "72%", y2: "75%" },
          { x1: "50%", y1: "50%", x2: "28%", y2: "70%" },
          { x1: "50%", y1: "50%", x2: "50%", y2: "15%" },
        ].map((line, i) => (
          <React.Fragment key={i}>
            <line {...line} stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" className="opacity-20" />
            <motion.circle 
              r="2" 
              fill="#D4AF37"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 2 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
              style={{ offsetPath: `path('M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}')` }}
            />
          </React.Fragment>
        ))}
      </svg>

      {/* Forensic Nodes */}
      <Node name="api/auth.ts" risk="High" x="18%" y="15%" delay={0.2} />
      <Node name="db/schema.sql" risk="Coupled" x="72%" y="22%" delay={0.4} />
      <Node name="hooks/useUI.js" risk="Medium" x="68%" y="68%" delay={0.6} />
      <Node name="utils/date.ts" risk="Low" x="22%" y="65%" delay={0.8} />
      <Node name="config/env" risk="Coupled" x="44%" y="10%" delay={1.0} />

      {/* Telemetry Readout */}
      <div className="absolute bottom-6 right-6 text-right font-mono pointer-events-none">
        <div className="text-gold-metallic text-[10px] mb-1">ANALYSIS_MODE: ACTIVE</div>
        <div className="text-neutral-500 text-[8px] uppercase">
          Latency: <span className="text-white">124ms</span> <br/>
          Confidence: <span className="text-white">92.4%</span> <br/>
          Reasoning_Budget: <span className="text-white">4096_TOKENS</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 text-xs text-neutral-500 uppercase tracking-widest flex items-center gap-2">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
          <span className="w-1.5 h-1.5 bg-gold-metallic rounded-full"></span>
          <span className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></span>
        </div>
        Semantic Blast Radius Mapping
      </div>
    </div>
  );
};