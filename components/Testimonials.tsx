
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
    quote: "Je redoutais la technique pour mon podcast, mais l'équipe a tout géré. La configuration du studio, incluant l'installation multi-caméras et la scénarisation des lumières, était irréprochable.. La réalisation en direct change tout au rendu final. Les 5 extraits réels fournis après chaque épisode sont devenus ma source principale de visibilité.",
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

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 700);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [nextSlide, currentIndex]);

  return (
    <section id="témoignages" className="py-32 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <p className="accent-text font-black tracking-[0.3em] text-xs mb-4 uppercase">Témoignages</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">ILS BÂTISSENT LEUR <br/> <span className="text-violet-500">EMPIRE</span> AVEC NOUS.</h2>
        </div>

        <div className="relative max-w-[1000px] mx-auto">
          <button 
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black border border-white/10 rounded-full text-white/50 hover:text-violet-500 hover:border-violet-500 transition-all active:scale-90"
            aria-label="Témoignage précédent"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black border border-white/10 rounded-full text-white/50 hover:text-violet-500 hover:border-violet-500 transition-all active:scale-90"
            aria-label="Témoignage suivant"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full shrink-0 group">
                  <div className="bg-black p-10 md:p-20 border border-white/5 rounded-sm flex flex-col items-center text-center relative overflow-hidden mx-2">
                    <div className="relative z-10 w-28 h-28 md:w-44 md:h-44 mb-10 rounded-sm overflow-hidden border border-white/10 group-hover:border-violet-500/50 transition-all duration-700 bg-zinc-950 shadow-2xl">
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 relative z-10 max-w-2xl">
                      <div className="mb-8">
                        <div className="font-black text-base md:text-lg tracking-widest text-white uppercase">{t.name}</div>
                      </div>
                      <div className="accent-text text-5xl md:text-7xl mb-1 opacity-10 font-serif leading-none h-10 select-none group-hover:opacity-20 transition-opacity">“</div>
                      <p className="text-lg md:text-2xl lg:text-3xl text-white/90 leading-snug font-medium italic tracking-tight mb-4 px-4 md:px-0">
                        {t.quote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => !isAnimating && setCurrentIndex(i)}
                className="relative h-1 w-12 bg-white/10 overflow-hidden rounded-full"
                aria-label={`Aller au témoignage ${i + 1}`}
              >
                {currentIndex === i && (
                  <div className="absolute inset-0 bg-violet-500 animate-[testimonialProgress_10s_linear_forwards]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes testimonialProgress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
