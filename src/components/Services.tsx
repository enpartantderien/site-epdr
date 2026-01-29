
import React, { useState, useEffect, useCallback, useRef } from 'react';

const services = [
  {
    title: "STRATÉGIE & IDENTITÉ",
    desc: "Nous définissons votre ligne éditoriale et votre identité visuelle pour que vous soyez reconnaissable au premier coup d'œil.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12.99 6.74 1.93 3.44"/>
        <path d="M19.18 17.52 15.5 11l-2.24-4a2 2 0 0 0-3.52 0L3.06 19.38"/>
        <path d="m8.5 11 1.93 3.44"/>
        <path d="M5.3 18h13.4"/>
        <circle cx="12" cy="5" r="2"/>
      </svg>
    )
  },
  {
    title: "CRÉATION DE CONTENU PREMIUM",
    desc: "Photos, vidéos (Reels), stories et rédactions percutantes. Nous produisons le carburant qui fait vivre vos réseaux.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
      </svg>
    )
  },
  {
    title: "COMMUNITY MANAGEMENT",
    desc: "Gestion quotidienne, modération et engagement pour faire battre le cœur de votre communauté.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: "REPORTING",
    desc: "Analyse détaillée des performances chaque mois pour ajuster la stratégie et maximiser votre ROI.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  // Fix: Replace NodeJS.Timeout with ReturnType<typeof setInterval> to fix 'Cannot find namespace NodeJS' error in browser environments
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Détection de la version mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  // Logique d'auto-play toutes les 10 secondes (uniquement sur mobile)
  useEffect(() => {
    if (!isMobile) return;

    timerRef.current = setInterval(nextSlide, 10000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isMobile, nextSlide]);

  // Reset timer on manual navigation
  const handleManualNav = (direction: 'next' | 'prev' | number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    if (typeof direction === 'number') {
      setCurrentSlide(direction);
    } else if (direction === 'next') {
      nextSlide();
    } else {
      prevSlide();
    }

    if (isMobile) {
      timerRef.current = setInterval(nextSlide, 10000);
    }
  };

  return (
    <section id="services" className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="accent-text font-black tracking-[0.3em] text-xs mb-4 uppercase">Notre expertise</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
              L'APPROCHE <span className="text-violet-500">EN</span> <br/> 
              <span className="text-violet-500">PARTANT DE RIEN</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-md text-sm leading-relaxed font-medium uppercase tracking-widest">
            Une approche 360° pour transformer votre présence en ligne en un actif puissant et rentable. Nous ne postons pas seulement, nous bâtissons.
          </p>
        </div>
        
        {/* Container principal : Grille sur Desktop, Carrousel sur Mobile */}
        <div className="relative group">
          
          {/* Mobile Arrows Navigation */}
          {isMobile && (
            <>
              <button 
                onClick={() => handleManualNav('prev')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/50 border border-white/10 rounded-full text-white/50 active:scale-95 active:text-violet-500 active:border-violet-500/50 transition-all"
                aria-label="Service précédent"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button 
                onClick={() => handleManualNav('next')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/50 border border-white/10 rounded-full text-white/50 active:scale-95 active:text-violet-500 active:border-violet-500/50 transition-all"
                aria-label="Service suivant"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </>
          )}

          <div className="overflow-hidden md:overflow-visible mx-2 md:mx-0">
            <div 
              className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ 
                transform: isMobile ? `translateX(-${currentSlide * 100}%)` : 'none' 
              }}
            >
              {services.map((service, idx) => (
                <div 
                  key={idx}
                  className="w-full shrink-0 md:w-auto md:shrink bg-[#0a0a0a]/80 backdrop-blur-md p-12 hover:bg-zinc-900/90 transition-all group cursor-default mauve-glow-hover min-h-[400px] flex flex-col justify-center"
                >
                  <div className="text-violet-500 mb-8 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black mb-6 tracking-tight uppercase leading-tight">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Indicateurs de progression (visibles uniquement sur mobile) */}
          {isMobile && (
            <div className="flex justify-center gap-3 mt-12">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleManualNav(i)}
                  className="relative h-1 w-12 bg-white/10 overflow-hidden rounded-full"
                  aria-label={`Voir service ${i + 1}`}
                >
                  {currentSlide === i && (
                    <div className="absolute inset-0 bg-violet-500 animate-[serviceProgress_10s_linear_forwards]" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes serviceProgress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Services;
