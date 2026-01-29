
import React, { useEffect } from 'react';
import { CaseStudy } from '../types';

interface ProjectDetailProps {
  project: CaseStudy;
  onBack: () => void;
  onNext: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNext }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  return (
    <div className="min-h-screen bg-black text-white animate-reveal">
      {/* Hero Header */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.client} 
            className="w-full h-full object-cover opacity-50 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <button 
            onClick={onBack}
            className="mb-12 text-[10px] font-black tracking-[0.4em] uppercase opacity-50 hover:opacity-100 transition-opacity flex items-center gap-4 mx-auto"
          >
            <span className="text-xl">←</span> RETOUR AUX PROJETS
          </button>
          <p className="accent-text font-black tracking-[0.5em] text-xs mb-6 uppercase">{project.category}</p>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-tight">
            {project.client}
          </h1>
          <div className="flex justify-center gap-12 md:gap-24 mt-12">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-6xl font-black accent-text mb-2">{stat.value}</div>
                <div className="text-[10px] font-black tracking-widest text-white/40 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8 space-y-20">
            <div>
              <h2 className="text-[10px] font-black tracking-[0.4em] accent-text uppercase mb-10">Le Challenge</h2>
              <p className="text-2xl md:text-3xl font-bold leading-tight text-white/90">
                {project.challenge || project.description}
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-black tracking-[0.4em] accent-text uppercase mb-10">Notre Approche</h2>
              <p className="text-lg text-white/60 leading-relaxed font-medium">
                {project.solution || "Nous avons déployé une stratégie de contenu immersive, capturant l'essence même de la marque pour créer un lien émotionnel fort avec l'audience."}
              </p>
            </div>

            {project.gallery && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
                {project.gallery.map((img, i) => (
                  <div key={i} className="aspect-square bg-zinc-900 overflow-hidden">
                    <img src={img} alt="Gallery item" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-4 lg:border-l border-white/5 lg:pl-12 space-y-16">
            <div>
              <h3 className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase mb-8">Livrables</h3>
              <ul className="space-y-4 text-xs font-bold tracking-widest uppercase text-white/80">
                <li>● Stratégie Social Media</li>
                <li>● Production de Reels</li>
                <li>● Photographie Premium</li>
                <li>● Gestion de Communauté</li>
                <li>● Analyse de Performance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-black tracking-[0.4em] text-white/40 uppercase mb-8">Impact Direct</h3>
              <div className="space-y-8">
                {project.results?.map((res, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-600 mt-1.5 shrink-0"></div>
                    <p className="text-sm font-medium text-white/70 uppercase leading-relaxed tracking-tight">{res}</p>
                  </div>
                )) || (
                  <p className="text-sm font-medium text-white/70 uppercase">Croissance organique accélérée et taux d'engagement record sur la période cible.</p>
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