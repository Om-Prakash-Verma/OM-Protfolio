import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Philosophy } from './components/Philosophy';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CrockeryHub } from './components/projects/CrockeryHub';
import { Flix } from './components/projects/Flix';
import { CampusPulse } from './components/projects/CampusPulse';
import { AetherSchedule } from './components/projects/AetherSchedule';
import { SEO } from './components/SEO';

// Define the valid view types as a union string type
type ViewState = 'home' | 'resume' | 'project-1' | 'project-2' | 'project-3' | 'project-4'; 

function App() {
  const [view, setView] = useState<ViewState>('home');

  // Unified navigation handler
  const handleNavigate = (newView: string, targetId?: string) => {
    // We cast string to specific view types logic if needed, or simple equality checks
    if (newView === 'resume') {
       setView('resume');
       window.scrollTo({ top: 0, behavior: "smooth" });
       return;
    }

    if (newView === 'home') {
      setView('home');
      setTimeout(() => {
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
      return;
    }
  };

  const handleProjectClick = (id: string) => {
    if (id === '1') {
      setView('project-1');
    } else if (id === '2') {
      setView('project-2');
    } else if (id === '3') {
      setView('project-3');
    } else if (id === '4') {
      setView('project-4');
    } else {
      console.log('Project detail not implemented for ID:', id);
    }
  };

  const renderMainContent = () => {
    switch (view) {
      case 'resume':
        return <Resume />;
      case 'project-1':
        return <CrockeryHub onBack={() => handleNavigate('home', 'projects')} />;
      case 'project-2':
        return <Flix onBack={() => handleNavigate('home', 'projects')} />;
      case 'project-3':
        return <CampusPulse onBack={() => handleNavigate('home', 'projects')} />;
      case 'project-4':
        return <AetherSchedule onBack={() => handleNavigate('home', 'projects')} />;
      case 'home':
      default:
        return (
          <>
            <SEO 
              title="Om Prakash Verma | System-First Thinker"
              description="Premium personal portfolio for Om Prakash Verma, an AI-Assisted Web App Builder and System-First Thinker specializing in React, Next.js, and System Architecture."
              keywords={['Portfolio', 'System Design', 'React Developer', 'AI Engineer', 'Web Architecture']}
            />
            <Hero onNavigate={(id) => handleNavigate('home', id)} />
            <About />
            <Skills />
            <Projects onProjectClick={handleProjectClick} />
            <Philosophy />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-gold-metallic selection:text-black">
      <Navbar currentView={view} onNavigate={(v, t) => handleNavigate(v, t)} />
      <main>
        {renderMainContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;