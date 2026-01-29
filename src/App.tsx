
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio, { projectsData } from './components/Portfolio';
import PortfolioGrid from './components/PortfolioGrid';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import LegalView from './components/LegalView';
import { CaseStudy } from './types';

export type LegalPageType = 'mentions' | 'confidentialite';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [viewAllProjects, setViewAllProjects] = useState(false);
  const [legalPage, setLegalPage] = useState<LegalPageType | null>(null);

  useEffect(() => {
    // Reveal animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selectedProject, viewAllProjects, legalPage]);

  const handleSelectProject = (project: CaseStudy) => {
    setSelectedProject(project);
    setViewAllProjects(false);
    setLegalPage(null);
    window.scrollTo(0, 0);
  };

  const handleOpenLegal = (type: LegalPageType) => {
    setLegalPage(type);
    setSelectedProject(null);
    setViewAllProjects(false);
    window.scrollTo(0, 0);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projectsData.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setSelectedProject(projectsData[nextIndex]);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen relative selection:bg-violet-600 selection:text-white">
      {/* Background Mauve Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] -left-20 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-[10%] -right-20 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[130px] animate-float" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="relative z-10">
        {!selectedProject && !viewAllProjects && !legalPage && <Header />}
        
        <main>
          {selectedProject ? (
            <ProjectDetail 
              project={selectedProject} 
              onBack={() => setSelectedProject(null)} 
              onNext={handleNextProject}
            />
          ) : viewAllProjects ? (
            <PortfolioGrid 
              onSelectProject={handleSelectProject} 
              onBack={() => setViewAllProjects(false)} 
            />
          ) : legalPage ? (
            <LegalView 
              type={legalPage} 
              onBack={() => setLegalPage(null)} 
            />
          ) : (
            <>
              {/* Introduction Landing */}
              <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-1000">
                <Hero />
              </div>

              {/* 1. SECTION SERVICES */}
              <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-1000">
                <Services />
              </div>
              
              {/* 2. SECTION RÉALISATIONS (PORTFOLIO) */}
              <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-1000">
                <Portfolio 
                  onSelectProject={handleSelectProject} 
                  onViewAll={() => {
                    setViewAllProjects(true);
                    window.scrollTo(0, 0);
                  }}
                />
              </div>

              {/* 3. SECTION À PROPOS */}
              <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-1000">
                <About />
              </div>

              {/* 4. SECTION TÉMOIGNAGES */}
              <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-1000">
                <Testimonials />
              </div>
              
              {/* CONTACT FINAL */}
              <div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-1000">
                <ContactForm />
              </div>
            </>
          )}
        </main>
        
        {!selectedProject && !viewAllProjects && !legalPage && (
          <Footer onLegalClick={handleOpenLegal} />
        )}
      </div>
    </div>
  );
};

export default App;
