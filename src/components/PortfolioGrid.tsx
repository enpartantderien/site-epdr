
import React, { useState, useEffect } from 'react';
import { CaseStudy } from '../types';
import { projectsData } from './Portfolio';

interface PortfolioGridProps {
  onSelectProject: (project: CaseStudy) => void;
  onBack: () => void;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectProject, onBack }) => {
  const [filter, setFilter] = useState('ALL');
  
  const categories = ['ALL', ...Array.from(new Set(projectsData.map(p => p.category)))];
  
  const filteredProjects = filter === 'ALL' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-32 px-6 animate-reveal">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div>
            <button 
              onClick={onBack}
              className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-all mb-12 flex items-center gap-4"
            >
              <span className="text-xl">←</span> RETOUR
            </button>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
              NOS <span className="text-violet-500">RÉALISATIONS</span>
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-4 border-b border-white/5 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-black tracking-widest px-6 py-2 rounded-full transition-all border ${
                  filter === cat 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer animate-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-8">
                <img 
                  src={project.image} 
                  alt={project.client}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white text-black p-4 text-center text-[10px] font-black tracking-[0.3em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    DÉCOUVRIR LE CASE STUDY
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black tracking-tighter uppercase">{project.client}</h3>
                  <div className="text-violet-500 text-xs font-black tracking-widest uppercase">{project.category}</div>
                </div>
                <p className="text-white/40 text-xs uppercase tracking-widest leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact Section Preview at the end */}
      <div className="mt-48 text-center bg-zinc-900/50 p-20 border border-white/5 rounded-sm">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-8">VOTRE PROJET <span className="text-violet-500">EST LE PROCHAIN.</span></h2>
        <button 
          onClick={() => {
            onBack();
            setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
          }}
          className="px-12 py-5 bg-violet-600 text-white font-black tracking-[0.3em] rounded-sm hover:bg-violet-500 transition-all text-[12px]"
        >
          PARLER DE VOTRE STRATÉGIE
        </button>
      </div>
    </div>
  );
};

export default PortfolioGrid;
