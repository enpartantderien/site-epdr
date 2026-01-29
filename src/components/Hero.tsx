
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
        {/* Subtle Mauve Glow behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/5 blur-[120px] z-5 rounded-full"></div>
        
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
          alt="Cinema Background"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <p className="text-[12px] md:text-[14px] font-black tracking-[0.5em] text-white/50 mb-8 animate-reveal uppercase">
          Production Digitale & Stratégie Social Media
        </p>
        <h1 className="text-[32px] md:text-[65px] lg:text-[85px] font-black hero-title mb-10 animate-reveal uppercase" style={{ animationDelay: '0.2s' }}>
          CRÉEZ VOTRE <br /> 
          EMPIRE DIGITAL <br /> 
          <span className="text-violet-500">EN PARTANT DE RIEN.</span>
        </h1>
        <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed animate-reveal" style={{ animationDelay: '0.4s' }}>
          De la stratégie éditoriale à la création de contenu, nous bâtissons une communauté engagée autour de vos valeurs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-violet-600 text-white font-black tracking-[0.2em] rounded-sm hover:bg-violet-700 transition-all text-sm w-full sm:w-auto shadow-lg shadow-violet-900/20"
          >
            PASSER À L'ACTION
          </button>
          <button 
             onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 border border-white/20 text-white font-black tracking-[0.2em] rounded-sm hover:bg-white hover:text-black transition-all text-sm w-full sm:w-auto backdrop-blur-sm"
          >
            NOS RÉALISATIONS
          </button>
        </div>
      </div>

      {/* Scroll indicator with subtle purple pulse */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-violet-600/0 via-violet-600 to-violet-600/0"></div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M7 13l5 5 5-5"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
