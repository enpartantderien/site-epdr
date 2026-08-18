
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    setIsMobileMenuOpen(false);
    
    if (element) {
      // Use a small timeout to let the menu close animation start
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Prevent layout shift if possible
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'RÉALISATIONS', id: 'portfolio' },
    { label: 'À PROPOS', id: 'à-propos' },
    { label: 'TÉMOIGNAGES', id: 'témoignages' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/5 backdrop-blur-md">
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-black tracking-tighter cursor-pointer flex items-center gap-1 text-violet-500"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            EN PARTANT DE RIEN <span className="font-light text-white/50">CM</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => scrollTo(item.id)}
                className="text-[10px] font-bold text-white/50 hover:text-white transition-all tracking-[0.2em] relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-violet-500 transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6"
            >
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
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[12px] font-black text-violet-500 z-[60] flex items-center gap-3 active:scale-95 transition-transform"
          >
            <span className="tracking-widest">{isMobileMenuOpen ? 'FERMER' : 'MENU'}</span>
            <div className="flex flex-col gap-1.5 w-6">
              <motion.div 
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full bg-violet-500 origin-center"
              />
              <motion.div 
                animate={isMobileMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                className="h-0.5 w-full bg-violet-500"
              />
              <motion.div 
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-full bg-violet-500 origin-center"
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-black lg:hidden flex flex-col items-center justify-center p-6 border-b border-white/5"
          >
            <div className="flex flex-col items-center space-y-10 w-full">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => scrollTo(item.id)}
                  className="text-3xl font-black tracking-tighter text-white hover:text-violet-500 transition-colors uppercase"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollTo('contact')}
                className="mt-8 px-16 py-6 bg-violet-600 text-white text-sm font-black tracking-[0.3em] rounded-sm active:scale-95 transition-transform"
              >
                CONTACT
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
