
import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    quote: "L'approche créative et l'utilisation intelligente de l'IA ont permis de moderniser radicalement notre image de marque.",
    name: "SOPHIE MARTIN",
    company: "ECOMOTION",
    initials: "SM",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "Plus qu'un prestataire, un véritable partenaire stratégique qui comprend les enjeux de l'image moderne.",
    name: "MARC LEFEBVRE",
    company: "TECHFLOW",
    initials: "ML",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "Une qualité de production digne des plus grands studios. Un impact immédiat sur nos KPIs.",
    name: "JEAN-PIERRE DURAND",
    company: "LUXE & CO",
    initials: "JD",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  },
  {
    quote: "En partant de rien, ils ont réussi à créer une identité forte qui nous ressemble et qui performe réellement.",
    name: "LUCAS DUBOIS",
    company: "MODERN LAB",
    initials: "LD",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [isAnimating]);

  // Handle animation reset
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 700);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Autoplay logic: move every 10 seconds (changed from 5)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    
    return () => clearInterval(interval);
  }, [nextSlide, currentIndex]); // Reset interval when index changes manually

  return (
    <section id="témoignages" className="py-32 bg-[#080808] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="accent-text font-black tracking-[0.3em] text-xs mb-4 uppercase">Témoignages</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">ILS BÂTISSENT LEUR <br/> <span className="text-violet-500">EMPIRE</span> AVEC NOUS.</h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-violet-500 hover:text-violet-500 transition-all group active:scale-95"
              aria-label="Témoignage précédent"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:border-violet-500 hover:text-violet-500 transition-all group active:scale-95"
              aria-label="Témoignage suivant"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full shrink-0 group">
                <div className="bg-[#0a0a0a] p-10 md:p-24 border border-white/5 rounded-sm flex flex-col items-center text-center relative overflow-hidden">
                  
                  {/* Portrait photo - Larger as requested */}
                  <div className="relative z-10 w-32 h-32 md:w-56 md:h-56 mb-12 rounded-sm overflow-hidden border border-white/10 group-hover:border-violet-500/50 transition-all duration-700 bg-zinc-900 shadow-2xl">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                    />
                  </div>

                  <div className="flex-1 relative z-10 max-w-4xl">
                    <div className="mb-8">
                      <div className="font-black text-lg md:text-xl tracking-widest text-white uppercase">{t.name}</div>
                      <div className="text-[10px] md:text-xs text-violet-500 font-black tracking-[0.3em] uppercase mt-2">{t.company}</div>
                    </div>

                    <div className="accent-text text-6xl md:text-8xl mb-2 opacity-10 font-serif leading-none h-12 select-none group-hover:opacity-20 transition-opacity">“</div>
                    
                    <p className="text-xl md:text-3xl lg:text-4xl text-white/90 leading-snug font-medium italic tracking-tight mb-4">
                      {t.quote}
                    </p>
                  </div>

                  {/* Decorative subtle background circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none transition-transform duration-1000 group-hover:scale-110">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <circle cx="50" cy="50" r="45" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicators with visual timer progress - updated to 10s */}
          <div className="mt-16 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => !isAnimating && setCurrentIndex(i)}
                className="relative h-1 w-16 bg-white/10 overflow-hidden rounded-full"
                aria-label={`Aller au témoignage ${i + 1}`}
              >
                {currentIndex === i && (
                  <div className="absolute inset-0 bg-violet-500 animate-[progress_10s_linear_forwards]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;