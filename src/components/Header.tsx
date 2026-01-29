
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

  // Prevent scrolling when mobile menu is open
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
      <header className="fixed top-0 left-0 right-0 z-50 cinema-glass border-b border-white/5">
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div 
            className="text-xl font-black tracking-tighter cursor-pointer flex items-center gap-1 text-violet-500"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            EN PARTANT DE RIEN <span className="font-light">CM</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[12px] font-bold text-white/70 hover:text-white transition-all tracking-[0.2em]"
              >
                {item.label}
              </button>
            ))}
            
            <button 
              onClick={() => scrollTo('contact')}
              className="px-6 py-2.5 bg-white text-black text-[12px] font-black tracking-[0.2em] rounded-sm hover:bg-violet-600 hover:text-white transition-all"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[14px] font-black text-violet-500 z-50 flex items-center gap-2"
          >
            {isMobileMenuOpen ? (
              <span className="flex items-center gap-2">
                FERMER 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                MENU
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </span>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black transition-transform duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} lg:hidden flex flex-col items-center justify-center p-6`}
      >
        {/* Background Decorative Mauve Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-600/10 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10 flex flex-col items-center space-y-8 w-full">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-3xl font-black tracking-tighter text-white hover:text-violet-500 transition-colors uppercase animate-reveal`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </button>
          ))}
          
          <button 
            onClick={() => scrollTo('contact')}
            className="mt-8 w-full max-w-xs py-5 bg-violet-600 text-white text-base font-black tracking-[0.3em] rounded-sm animate-reveal"
            style={{ animationDelay: '0.4s' }}
          >
            CONTACT
          </button>
          
          <div className="pt-16 flex space-x-8 animate-reveal" style={{ animationDelay: '0.5s' }}>
            <a href="#" className="text-[10px] font-black tracking-widest text-white/30 uppercase hover:text-violet-500">Instagram</a>
            <a href="#" className="text-[10px] font-black tracking-widest text-white/30 uppercase hover:text-violet-500">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
