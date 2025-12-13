import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: 'home' | 'resume', targetId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, link: {name: string, href: string}) => {
    e.preventDefault();
    if (link.name === 'Resume') {
      onNavigate('resume');
      setIsMobileMenuOpen(false);
      return;
    }

    const targetId = link.href.replace('#', '');
    
    // Check if we are in a sub-view (like a project details page)
    const isHome = currentView === 'home';
    
    if (isHome) {
      // We are already on home, just scroll
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else if (link.href === '#') {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // We are on resume or a project page, switch to home then scroll
      onNavigate('home', targetId);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Approach', href: '#approach' },
    { name: 'Projects', href: '#projects' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Resume', href: '#' }, // Href is placeholder, handled by onClick
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled || isMobileMenuOpen
            ? 'bg-black/80 backdrop-blur-md border-white/10 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigate('home'); setIsMobileMenuOpen(false); }}
            className="font-display font-bold text-xl tracking-wider text-white hover:text-gold-metallic transition-colors"
          >
            OM PRAKASH <span className="text-gold-metallic">VERMA</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm uppercase tracking-widest transition-colors relative group cursor-pointer ${
                  (link.name === 'Resume' && currentView === 'resume') 
                    ? 'text-gold-metallic' 
                    : 'text-neutral-400 hover:text-gold-metallic'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold-metallic transition-all duration-300 ${
                   (link.name === 'Resume' && currentView === 'resume') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
            <button
              onClick={(e) => handleNavClick(e as any, { name: 'Contact', href: '#contact' })}
              className="px-5 py-2 border border-gold-metallic/30 text-gold-metallic text-xs uppercase tracking-widest rounded hover:bg-gold-metallic hover:text-black transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-transform duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-0.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-0.5 bg-white transition-transform duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-0.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
         <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-2xl font-display font-medium tracking-widest cursor-pointer transition-transform duration-500 ${
                  (link.name === 'Resume' && currentView === 'resume') 
                    ? 'text-gold-metallic' 
                    : 'text-neutral-300 hover:text-white'
                } ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <button
               onClick={(e) => handleNavClick(e as any, { name: 'Contact', href: '#contact' })}
               className={`mt-8 px-8 py-3 border border-gold-metallic text-gold-metallic text-sm uppercase tracking-widest rounded hover:bg-gold-metallic hover:text-black transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
               style={{ transitionDelay: `${navLinks.length * 50 + 100}ms` }}
            >
              Hire Me
            </button>
         </div>
      </div>
    </>
  );
};