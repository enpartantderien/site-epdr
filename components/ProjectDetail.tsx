import React, { useEffect, useState } from 'react';
import { CaseStudy } from '../types';

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

          <div className="mb-20">
            <p className="accent-text font-black tracking-[0.3em] text-[10px] mb-4 uppercase">Étude de cas</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9]">
              CAS CONCRET <br/> <span className="text-violet-500">AVEC UN CLIENT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8 space-y-20">
              <div>
                <h2 className="text-[10px] font-black tracking-[0.4em] accent-text uppercase mb-10">Le Challenge</h2>
                <p className="text-2xl md:text-3xl font-bold leading-tight text-white/90">
                  {project.challenge || "Définir une présence numérique impactante et cohérente."}
                </p>
              </div>

              <div>
                <h2 className="text-[10px] font-black tracking-[0.4em] accent-text uppercase mb-10">Notre Approche</h2>
                <p className="text-lg text-white/60 leading-relaxed font-medium mb-12">
                  {project.solution || "Nous avons privilégié une approche immersive, capturant l'essence du métier et les coulisses pour créer un lien authentique avec l'audience."}
                </p>

                {videos.length > 0 && (
                  <div className="mt-20 flex flex-col items-center">
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

            <div className="lg:col-span-4 lg:border-l border-white/5 lg:pl-12 space-y-16">
              <div>
                <h3 className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase mb-8">Livrables</h3>
                <ul className="space-y-4 text-xs font-bold tracking-widest uppercase text-white/80">
                  {project.deliverables && project.deliverables.length > 0 ? (
                    project.deliverables.map((item, idx) => (
                      <li key={idx}>● {item}</li>
                    ))
                  ) : (
                    <>
                      <li>● Stratégie Multicanale</li>
                      <li>● Production Vidéo Haute Qualité</li>
                      <li>● Création Graphique</li>
                      <li>● Post-Production</li>
                      <li>● Analyse de Performance</li>
                    </>
                  )}
                </ul>
              </div>

              {project.results && project.results.length > 0 && (
                <div>
                  <div className="mb-8">
                    <h3 className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase mb-2">Impact Direct</h3>
                    <p className="text-[9px] font-black tracking-widest text-violet-500 uppercase">Résultats constatés</p>
                  </div>
                  <div className="space-y-8">
                    {project.results.map((res, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-1.5 shrink-0"></div>
                        <p className="text-sm font-medium text-white/70 uppercase leading-relaxed tracking-tight">{res}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section Spécifique Régie Podcast si applicable */}
      {project.id === 'podcast-regie' && (
        <section className="py-24 bg-zinc-950/50">
          <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">Immersion Régie</h3>
              <div className="w-12 h-1 bg-violet-600 mx-auto"></div>
            </div>

            <div className="relative w-full max-w-[900px] aspect-video bg-zinc-950 border border-violet-500/30 rounded-xl overflow-hidden shadow-2xl shadow-violet-500/10">
              <iframe
                src="https://player.vimeo.com/video/1166634468?badge=0&autopause=0&player_id=0&app_id=58479&color=8b5cf6&title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Démonstration Régie Podcast"
              ></iframe>
            </div>
          </div>
        </section>
      )}

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