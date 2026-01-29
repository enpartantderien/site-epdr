
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CaseStudy } from '../types';

export const projectsData: CaseStudy[] = [
  {
    id: 'luxe-horlogerie',
    client: 'LUXE & HORLOGERIE',
    category: 'BRAND CONTENT',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    stats: [{ label: 'Reach', value: '2.4M' }, { label: 'Engagement', value: '+210%' }],
    description: "Production d'une série de films courts pour Instagram.",
    challenge: "Comment captiver une audience exigeante sur des formats ultra-courts (Reels) tout en préservant l'héritage et le prestige d'une maison d'horlogerie ?",
    solution: "Nous avons privilégié une approche cinématographique macro, se focalisant sur le son des mécanismes et la texture des matériaux.",
    results: [
      "2.4 millions de personnes touchées organiquement",
      "Taux de complétion des vidéos supérieur à 75%",
      "Augmentation de 30% des demandes de catalogue via DM"
    ],
    gallery: [
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'gastro-lab',
    client: 'GASTRO LAB',
    category: 'STORYTELLING',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    stats: [{ label: 'Impact', value: '+35%' }, { label: 'Vues', value: '500K' }],
    description: "Captation live et création de contenus immersifs.",
    challenge: "Humaniser un laboratoire culinaire technique pour le rendre accessible et désirable sur les réseaux sociaux.",
    solution: "Une série de contenus 'Behind the Scenes' bruts et authentiques, mettant en avant le geste créatif.",
    results: [
      "Hausse de 35% des réservations directes via Instagram",
      "Gain de 15 000 abonnés qualifiés en 3 mois"
    ],
    gallery: [
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'tech-flow',
    client: 'TECH FLOW',
    category: 'CORPORATE',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200&auto=format&fit=crop',
    stats: [{ label: 'Leads', value: '850' }, { label: 'CTR', value: '12%' }],
    description: "Stratégie vidéo LinkedIn pour décideurs B2B.",
    challenge: "Casser les codes du B2B traditionnel pour générer des leads qualifiés sans paraître intrusif.",
    solution: "Développement d'une ligne éditoriale 'Thought Leadership' basée sur des vidéos pédagogiques courtes.",
    results: [
      "850 leads générés via des campagnes de contenu organique",
      "Positionnement de Tech Flow comme leader d'opinion"
    ],
    gallery: [
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'urban-groove',
    client: 'URBAN GROOVE',
    category: 'STREETWEAR',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop',
    stats: [{ label: 'Reach', value: '1.1M' }, { label: 'Sold out', value: '2h' }],
    description: "Lancement d'une collection capsule via Reels.",
    challenge: "Créer un sentiment d'urgence absolue pour une sortie de collection ultra-limitée.",
    solution: "Utilisation du montage rythmé 'fast-cut' synchronisé avec une bande sonore urbaine exclusive.",
    results: ["Collection en rupture de stock totale en moins de 2 heures", "Taux d'engagement de 18%"],
    gallery: []
  },
  {
    id: 'aqua-vita',
    client: 'AQUA VITA',
    category: 'WELLNESS',
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=1200&auto=format&fit=crop',
    stats: [{ label: 'Abonnés', value: '+12K' }, { label: 'Mood', value: 'ZEN' }],
    description: "Identité visuelle et gestion de communauté zen.",
    challenge: "Se démarquer dans la jungle du bien-être par une esthétique épurée et apaisante.",
    solution: "Colorimétrie froide et vidéos ultra-HD au ralenti pour un feed Instagram thérapeutique.",
    results: ["Hausse de 60% de l'interaction sur les Stories de conseils"],
    gallery: []
  },
  {
    id: 'night-owl',
    client: 'NIGHT OWL',
    category: 'EVENTS',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?q=80&w=1200&auto=format&fit=crop',
    stats: [{ label: 'Tickets', value: '5000' }, { label: 'Hype', value: 'MAX' }],
    description: "Couverture digitale d'un festival de musique.",
    challenge: "Retranscrire l'énergie du live instantanément pour booster la billetterie de l'édition suivante.",
    solution: "Production de contenus 'real-time' avec une équipe dédiée pour une diffusion immédiate.",
    results: ["2000 billets 'early-bird' vendus en 24h après le festival"],
    gallery: []
  }
];

interface PortfolioProps {
  onSelectProject?: (project: CaseStudy) => void;
  onViewAll?: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, onViewAll }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % 3); // On garde 3 pour le preview
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    timerRef.current = setInterval(nextSlide, 10000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isMobile, nextSlide]);

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

  const previewProjects = projectsData.slice(0, 3);

  return (
    <section id="portfolio" className="py-32 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-24 flex justify-between items-end">
          <div>
            <p className="accent-text font-black tracking-[0.3em] text-xs mb-4 uppercase">Réalisations</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">NOS DERNIERS <br/> <span className="text-violet-500">SUCCÈS</span></h2>
          </div>
          <button 
            onClick={onViewAll}
            className="hidden md:block px-8 py-3 border border-white text-[10px] font-black tracking-[0.3em] rounded-sm hover:bg-white hover:text-black transition-all uppercase"
          >
            VOIR TOUT →
          </button>
        </div>
        
        <div className="relative">
          {/* Mobile Arrows Navigation */}
          {isMobile && (
            <>
              <button 
                onClick={() => handleManualNav('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-black/60 border border-white/10 rounded-full text-white backdrop-blur-sm active:scale-95 active:border-violet-500 transition-all"
                aria-label="Projet précédent"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button 
                onClick={() => handleManualNav('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-black/60 border border-white/10 rounded-full text-white backdrop-blur-sm active:scale-95 active:border-violet-500 transition-all"
                aria-label="Projet suivant"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </>
          )}

          <div className="overflow-hidden lg:overflow-visible">
            <div 
              className="flex lg:grid lg:grid-cols-3 gap-8 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{ 
                transform: isMobile ? `translateX(-${currentSlide * 100}%)` : 'none' 
              }}
            >
              {previewProjects.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => onSelectProject?.(item)}
                  className="w-full shrink-0 lg:w-auto lg:shrink group relative aspect-[3/4] overflow-hidden bg-zinc-900 cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt={item.client} 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-black tracking-tighter mb-4 uppercase">
                      {item.client}
                    </h3>
                    <p className="text-white/60 text-sm mb-6 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 uppercase">
                      {item.description}
                    </p>
                    <div className="h-px w-0 group-hover:w-full bg-white transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Progress Indicators */}
          {isMobile && (
            <div className="flex justify-center gap-3 mt-12">
              {previewProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleManualNav(i)}
                  className="relative h-1 w-12 bg-white/10 overflow-hidden rounded-full"
                  aria-label={`Voir projet ${i + 1}`}
                >
                  {currentSlide === i && (
                    <div className="absolute inset-0 bg-violet-500 animate-[portfolioProgress_10s_linear_forwards]" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-16 md:mt-24 space-y-8">
          {/* Visible only on mobile to open full grid */}
          <button 
            onClick={onViewAll}
            className="md:hidden px-12 py-5 border border-white text-[12px] font-black tracking-[0.4em] rounded-sm hover:bg-white hover:text-black transition-all uppercase w-full max-w-xs"
          >
            VOIR TOUT →
          </button>
          
          <p className="text-white/30 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase block">
            Envie de voir votre projet ici ? {' '}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="accent-text hover:text-white underline underline-offset-4 transition-colors"
            >
              Parlons-en.
            </button>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes portfolioProgress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
