import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-neutral-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Om Prakash Verma.
        </div>
        <div className="flex items-center space-x-2 text-xs text-neutral-600 uppercase tracking-widest">
          <span>Built with intention</span>
          <span className="text-gold-metallic/50">•</span>
          <span>Powered by AI</span>
        </div>
      </div>
    </footer>
  );
};