
// Fix: Correctly separate imports and project data definitions
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CaseStudy } from '../types';

// Fix: Exporting projectsData correctly as a named export so it can be used in other components
export const projectsData: CaseStudy[] = [
  {
    id: 'immobilier',
    client: 'COMMUNITY MANAGEMENT',
    category: 'PRESTATION MENSUELLE',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    stats: [{ label: 'clics lien externes', value: '+2.6K' }, { label: 'VUES', value: '+3.5M' }],
    description: "Le Community Management est l'art de fédérer et d'animer une communauté engagée autour de votre identité. Nous pilotons votre présence digitale de A à Z : de la co-construction d'une stratégie sur-mesure à la production de contenus (tournage et montage), jusqu'à la planification de vos publications. Chaque mois, un reporting détaillé vous permet de mesurer l'impact réel et l'évolution de votre empire numérique.",
    challenge: "Déploiement d'un écosystème de contenu conçu pour convertir l'audience sociale en prospects directs au cœur du tunnel de vente.",
    solution: "De la capture spontanée en session de coaching aux conseils techniques sur le terrain, nous scénarisons la réalité du métier pour affirmer l'autorité du coach et convertir son audience par la preuve.",
    results: [
      "3,5 MILLIONS DE VUES CIBLÉES",
      "+2.6K CLICS SUR LIENS EXTERNES (↗ 32.7K%)",
      "+720 ABONNÉES (↗ 5.8K%)"
    ],
    deliverables: [
      "Stratégie sur-mesure",
      "Tournage et montage",
      "Planification des posts",
      "Reporting mensuel",
      "Modération"
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/CIiXCYRimvg?si=tVjrOJxCm-38ge94&start=1",
    videoUrls: [
      "https://player.vimeo.com/video/1165985359?badge=0&autopause=0&player_id=0&app_id=58479&color=8b5cf6&title=0&byline=0&portrait=0",
      "https://player.vimeo.com/video/1165988807?badge=0&autopause=0&player_id=0&app_id=58479&color=8b5cf6&title=0&byline=0&portrait=0",
      "https://player.vimeo.com/video/1165988838?badge=0&autopause=0&player_id=0&app_id=58479&color=8b5cf6&title=0&byline=0&portrait=0"
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687940-c52af0b0539b?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'gastro-lab',
    client: 'PRESTATION ONE-SHOT',
    category: 'IMPACT IMMÉDIAT',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    stats: [{ label: 'Impact', value: '+35%' }, { label: 'Vues', value: '500K' }],
    description: "Tournage, montage, livraison. La solution One-Shot est conçue pour ceux qui ont besoin d'un stock de contenus qualitatifs en un temps record. Nous filmons vos moments forts et vous livrons des réels dynamiques et des photos épurées, prêts à l'emploi.",
    challenge: "Humaniser une PME technique pour la rendre accessible et désirable sur les réseaux sociaux.",
    solution: "Nous avons choisi de filmer l'humain. En interrogeant directement les utilisateurs sur leur usage de l'outil, nous avons créé des réels qui répondent aux vraies questions : comment l'outil transforme leur productivité et quel est leur ressenti sur le terrain. Une stratégie de contenu basée sur la preuve et la confiance.",
    results: [
      "Hausse de 35% des réservations directes via Instagram",
      "Gain de 15 000 abonnés qualifiés en 3 mois"
    ],
    deliverables: [
      "Tournage sur site",
      "Montage dynamique",
      "Pack de 10 réels",
      "Pack de 20 photos"
    ],
    gallery: [
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop'
    ]
  },
  {
    id: 'podcast-regie',
    client: 'RÉGIE DE PODCAST',
    category: 'EXPERTISE AUDIO/VIDÉO',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop',
    stats: [{ label: 'Épisodes', value: '50+' }, { label: 'Audience', value: '+200K' }],
    description: "Votre podcast, version grand écran. De l’installation technique du studio à la réalisation en régie live, nous gérons toute l'infrastructure de votre émission. Concentrez-vous sur votre invité, nous nous occupons des angles de vue, de la lumière et du montage final. En bonus, nous extrayons pour vous les 5 moments les plus viraux au format réel pour inonder vos réseaux sociaux de contenus haute performance.",
    challenge: "Lancer une émission de haute qualité avec un rendu visuel cinématographique pour une autorité maximale.",
    solution: "Mise à disposition d'un studio équipé, montage multi-caméras et extraits viraux (clips) optimisés pour TikTok/Reels.",
    results: [],
    deliverables: [
      "Préparation du studio",
      "Enregistrement multipistes",
      "Post-production",
      "Création de 5 réels",
      "Envoie du podcast et réels"
    ],
    gallery: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?q=80&w=800&auto=format&fit=crop'
    ]
  }
];

interface PortfolioProps {
  onSelectProject?: (project: CaseStudy) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
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
    if (projectsData.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % projectsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    if (projectsData.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  }, []);

  useEffect(() => {
    if (!isMobile || projectsData.length <= 1) return;
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

    if (isMobile && projectsData.length > 1) {
      timerRef.current = setInterval(nextSlide, 10000);
    }
  };

  const previewProjects = projectsData;

  return (
    <section id="portfolio" className="py-32 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-24">
          <p className="accent-text font-black tracking-[0.3em] text-xs mb-4 uppercase">Nos Offres & Projets</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">NOS OFFRES <br/> <span className="text-violet-500">EXCLUSIVES</span></h2>
        </div>
        
        <div className="relative">
          {/* Mobile Arrows Navigation */}
          {isMobile && projectsData.length > 1 && (
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
              className={`flex lg:grid ${projectsData.length === 3 ? 'lg:grid-cols-3' : projectsData.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-8 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]`}
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
                  {/* Dégradé noir plus dense en bas pour assurer le contraste des textes blancs */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Alignement vertical : on utilise un offset de 100% (caché) avec un translate négatif pour l'état initial */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end transform translate-y-[calc(100%-80px)] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    <div className="mb-4">
                      <div className="text-violet-500 text-[10px] font-black tracking-[0.3em] uppercase mb-2 drop-shadow-md">
                        {item.category}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none drop-shadow-lg min-h-[1.2em]">
                        {item.client}
                      </h3>
                    </div>
                    
                    <p className="text-white/80 text-[10.5px] mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 uppercase leading-relaxed font-medium">
                      {item.description}
                    </p>
                    <div className="h-px w-0 group-hover:w-full bg-white transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Progress Indicators */}
          {isMobile && projectsData.length > 1 && (
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
          <p className="text-white/30 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase block">
            Envie de lancer votre projet ? {' '}
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
