
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'SERVICE', id: 'services' },
    { label: 'RÉALISATIONS', id: 'portfolio' },
    { label: 'À PROPOS', id: 'à-propos' },
    { label: 'TÉMOIGNAGES', id: 'témoignages' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/5">
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div 
            className="text-lg font-black tracking-tighter cursor-pointer flex items-center gap-1 text-violet-500"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            EN PARTANT DE RIEN <span className="font-light text-white/50">CM</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[10px] font-bold text-white/50 hover:text-white transition-all tracking-[0.2em]"
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center gap-6">
              <button 
                onClick={() => scrollTo('contact')}
                className="px-6 py-2.5 bg-white text-black text-[10px] font-black tracking-[0.2em] rounded-sm hover:bg-violet-600 hover:text-white transition-all"
              >
                CONTACT
              </button>

              <a 
                href="https://www.instagram.com/en_partant_de_rien/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-violet-500 hover:text-white transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[12px] font-black text-violet-500 z-50 flex items-center gap-2"
          >
            {isMobileMenuOpen ? 'FERMER' : 'MENU'}
            <div className="flex flex-col gap-1 w-5">
              <div className={`h-0.5 w-full bg-violet-500 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`h-0.5 w-full bg-violet-500 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-0.5 w-full bg-violet-500 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black transition-transform duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} lg:hidden flex flex-col items-center justify-center p-6`}
      >
        <div className="relative z-10 flex flex-col items-center space-y-8 w-full">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-2xl font-black tracking-tighter text-white hover:text-violet-500 transition-colors uppercase"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollTo('contact')}
            className="mt-8 px-12 py-5 bg-violet-600 text-white text-sm font-black tracking-[0.3em] rounded-sm"
          >
            CONTACT
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
