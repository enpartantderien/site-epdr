import React, { useEffect, useState } from 'react';
import { CaseStudy } from '../types';

const servicesData = [
  {
    title: "STRATÉGIE & IDENTITÉ",
    desc: "Nous coconstruisons une stratégie sur mesure de votre identité visuelle à la ligne éditoriale, pour que vous soyez reconnaissable au premier coup d'œil.",
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

interface ProjectDetailProps {
  project: CaseStudy;
  onBack: () => void;
  onNext: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNext }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  // Récupération des vidéos : soit la liste multiple, soit l'URL unique encapsulée dans un tableau
  const videos = project.videoUrls && project.videoUrls.length > 0 
    ? project.videoUrls 
    : project.videoUrl ? [project.videoUrl] : [];

  const handleNextVideo = () => {
    setActiveVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrevVideo = () => {
    setActiveVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="min-h-screen bg-black text-white animate-reveal">
      {/* Hero Header */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.client} 
            className="w-full h-full object-cover opacity-40 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <button 
            onClick={onBack}
            className="mb-12 text-[10px] font-black tracking-[0.4em] uppercase opacity-50 hover:opacity-100 transition-opacity flex items-center gap-4 mx-auto"
          >
            <span className="text-xl">←</span> RETOUR AUX PROJETS
          </button>
          <p className="accent-text font-black tracking-[0.5em] text-xs mb-6 uppercase">{project.category}</p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-tight drop-shadow-2xl">
            {project.client}
          </h1>
        </div>
      </section>

      {/* Intro Description & Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-24 lg:mb-32">
             <div className="max-w-4xl border-l-2 border-violet-500 pl-8 md:pl-12 py-2">
                <p className="text-lg md:text-2xl font-medium leading-relaxed text-white/80 uppercase tracking-tight italic">
                  "{project.description}"
                </p>
             </div>
          </div>

      {/* Section Expertise pour Community Management */}
      {project.id === 'immobilier' && (
        <section className="py-24 bg-zinc-950/30 border-y border-white/5">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-16">
              <p className="accent-text font-black tracking-[0.3em] text-[10px] mb-4 uppercase">Notre Expertise</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
                LES PILIERS DE NOTRE <br/> <span className="text-violet-500">ACCOMPAGNEMENT</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
              {servicesData.map((service, idx) => (
                <div 
                  key={idx}
                  className="bg-black p-10 hover:bg-zinc-950 transition-all group flex flex-col justify-center min-h-[300px]"
                >
                  <div className="text-violet-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black mb-4 tracking-tight uppercase">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

          <div className="mb-20">
            <p className="accent-text font-black tracking-[0.3em] text-[10px] mb-4 uppercase">Étude de cas</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
              CAS CONCRET <br/> <span className="text-violet-500">AVEC UN CLIENT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-12 space-y-20">
              {/* Vidéo horizontale spécifique pour Promotion Vidéo / Régie */}
              {project.id === 'podcast-regie' && (
                <div className="relative w-full aspect-video bg-zinc-950 border border-violet-500/30 rounded-xl overflow-hidden shadow-2xl shadow-violet-500/10">
                  <iframe
                    src="https://player.vimeo.com/video/1166634468?badge=0&autopause=0&player_id=0&app_id=58479&color=8b5cf6&title=0&byline=0&portrait=0"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Démonstration Vidéo Promotionnelle"
                  ></iframe>
                </div>
              )}

              <div>
                {videos.length > 0 && (
                  <div className="flex flex-col items-center mt-20">
                    <div className="relative w-full max-w-[420px] group">
                      {videos.length > 1 && (
                        <>
                          <button 
                            onClick={handlePrevVideo}
                            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/80 border border-violet-500/30 rounded-full text-white hover:border-violet-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all active:scale-95"
                            aria-label="Vidéo précédente"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                          </button>
                          <button 
                            onClick={handleNextVideo}
                            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/80 border border-violet-500/30 rounded-full text-white hover:border-violet-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all active:scale-95"
                            aria-label="Vidéo suivante"
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                          </button>
                        </>
                      )}

                      <div className="relative aspect-[9/16] bg-zinc-950 border border-violet-500/20 rounded-3xl overflow-hidden shadow-[0_0_80px_-20px_rgba(139,92,246,0.2)]">
                        <iframe
                          key={`vimeo-${activeVideoIndex}`}
                          src={videos[activeVideoIndex]}
                          className="absolute inset-0 w-full h-full"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          allowFullScreen
                          title={`Vidéo ${activeVideoIndex + 1}`}
                        ></iframe>
                      </div>

                      {videos.length > 1 && (
                        <div className="flex justify-center gap-3 mt-10">
                          {videos.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveVideoIndex(i)}
                              className={`h-1.5 transition-all duration-300 rounded-full ${activeVideoIndex === i ? 'w-10 bg-violet-500' : 'w-4 bg-white/10 hover:bg-white/30'}`}
                              aria-label={`Aller à la vidéo ${i + 1}`}
                            />
                          ))}
                        </div>
                      )}
                      
                      <p className="text-center mt-6 text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">
                        Vidéo {activeVideoIndex + 1} / {videos.length}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-white/30 text-[10px] font-black tracking-[0.4em] uppercase mb-12">Prochain Projet</p>
          <button 
            onClick={onNext}
            className="group inline-block"
          >
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase group-hover:accent-text transition-colors duration-500">
              DÉCOUVRIR LA SUITE <span className="inline-block transform group-hover:translate-x-4 transition-transform duration-500">→</span>
            </h3>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;