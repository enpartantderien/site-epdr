
import React from 'react';

const About: React.FC = () => {
  const team = [
    {
      name: "MATTEO",
      role: "MOTION & STRATEGY",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      description: "Il insuffle la vie à votre contenu. Expert en montage vidéo et réalisation de Reels, il définit la stratégie globale pour transformer votre visibilité en résultats concrets et mesurables."
    },
    {
      name: "THOMAS",
      role: "IDENTITY & STORYTELLING",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
      description: "Il façonne votre ADN visuel. De la création de votre charte graphique à la rédaction de vos posts, il donne une âme à votre marque et raconte votre histoire pour captiver votre audience."
    }
  ];

  return (
    <section id="à-propos" className="py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Column: Text Content */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10 uppercase">LES VISAGES <br/> DERRIÈRE <span className="text-violet-500">VOS RÉSEAUX.</span></h2>
            
            <div className="space-y-8 text-lg text-white/70 leading-relaxed font-medium border border-violet-500/30 p-8 bg-violet-900/5 rounded-sm">
              <p>
                En Partant de Rien CM est né de la rencontre entre deux expertises indispensables au succès digital. Nous ne nous contentons pas de poster : nous fusionnons l'art de l'image et la puissance du mouvement pour bâtir des identités qui marquent les esprits.
              </p>
            </div>
          </div>
          
          {/* Right Column: Team Portraits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group flex flex-col">
                <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-sm">
                  {/* Subtle glow behind the headshot */}
                  <div className="absolute inset-0 bg-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
                  
                  <img 
                    src={member.image} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    alt={member.name}
                  />
                  
                  {/* Thin border overlay */}
                  <div className="absolute inset-0 border border-white/5 group-hover:border-violet-500/30 transition-colors duration-500"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-violet-500"></div>
                    <h3 className="text-xl font-black tracking-tighter uppercase">{member.name}</h3>
                  </div>
                  <p className="text-[10px] font-black tracking-widest text-violet-500 uppercase">{member.role}</p>
                  <p className="text-sm text-white/40 leading-relaxed font-medium uppercase mt-4">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;