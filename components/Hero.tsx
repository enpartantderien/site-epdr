
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-start bg-black overflow-hidden pt-32 md:pt-48">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* Overlay pour noir pur et profondeur */}
        <div className="absolute inset-0 bg-black/75 z-10"></div>
        
        {/* Vidéo repositionnée */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1166640562?background=1&autoplay=1&loop=1&muted=1&color=8b5cf6"
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none top-0 h-[110%] w-[247%] md:h-[115%] md:w-[115%] md:top-1/2 md:-translate-y-1/2 object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="Hero Background Video"
          ></iframe>
        </div>
      </div>

      {/* Contenu - Remonté vers le haut avec justify-start */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Surtitre - Très compact */}
        <p className="text-[8px] md:text-[10px] font-black tracking-[0.5em] text-white/30 mb-3 md:mb-6 animate-reveal uppercase">
          PRODUCTION DIGITALE & STRATÉGIE SOCIAL MEDIA
        </p>
        
        {/* Titre : Reste en haut */}
        <div className="mb-4 md:mb-14 animate-reveal" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-black hero-title uppercase flex flex-col items-center">
            <span className="text-[18px] sm:text-[24px] md:text-[45px] lg:text-[60px] leading-[1.2] text-white tracking-tight whitespace-nowrap">
              CRÉEZ VOTRE EMPIRE DIGITAL
            </span>
            <span className="text-[26px] sm:text-[32px] md:text-[60px] lg:text-[85px] leading-[1] text-violet-500 tracking-tighter whitespace-nowrap">
              EN PARTANT DE RIEN.
            </span>
          </h1>
        </div>

        {/* Description : mt-16 sur mobile pour descendre ce bloc par rapport au titre */}
        <div className="mt-16 md:mt-0 animate-reveal" style={{ animationDelay: '0.4s' }}>
          <p className="text-[9px] md:text-sm text-white/40 max-w-lg mx-auto mb-8 md:mb-24 font-medium leading-relaxed uppercase tracking-[0.25em]">
            De la stratégie éditoriale à la création de contenu, nous bâtissons une communauté engagée autour de vos valeurs.
          </p>
        </div>

        {/* Boutons - Suivent le mouvement vers le bas */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-reveal w-full sm:w-auto mb-4" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 md:px-16 md:py-7 bg-violet-600 text-white font-black tracking-[0.2em] rounded-sm hover:bg-violet-700 transition-all text-[10px] md:text-[13px] w-full sm:w-auto shadow-xl shadow-violet-900/10"
          >
            PASSER À L'ACTION
          </button>
          <button 
             onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 md:px-16 md:py-7 border border-white/10 text-white font-black tracking-[0.2em] rounded-sm hover:bg-white hover:text-black transition-all text-[10px] md:text-[13px] w-full sm:w-auto bg-black"
          >
            NOS RÉALISATIONS
          </button>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-10 hidden md:block">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M7 13l5 5 5-5"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
