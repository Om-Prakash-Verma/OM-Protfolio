import React, { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = '', 
  direction = 'up' 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, '-50px');

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(40px)';
      case 'down': return 'translateY(-40px)';
      case 'left': return 'translateX(40px)';
      case 'right': return 'translateX(-40px)';
      default: return 'none';
    }
  };

  return (
    <div
      ref={ref}
      // Using a custom cubic-bezier (0.22, 1, 0.36, 1) for a "snappy start, slow settling finish" feel
      className={`transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getTransform(),
        // Apply delay only when fading in so resets are instant/smooth during scroll out
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};