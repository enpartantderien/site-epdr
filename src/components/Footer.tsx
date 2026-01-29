
import React from 'react';
import { LegalPageType } from '../App';

interface FooterProps {
  onLegalClick?: (type: LegalPageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  return (
    <footer className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <div className="mb-16">
          <div className="text-3xl font-black tracking-tighter mb-6 text-violet-500 uppercase">
            EN PARTANT DE RIEN <span className="font-light">CM</span>
          </div>
          <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed tracking-widest uppercase font-bold">
            Sublimez votre présence. Maîtrisez votre impact. La passion de l'image à votre service.
          </p>
        </div>
        
        <div className="flex justify-center space-x-12 mb-16">
          <a href="#" className="text-xs font-black tracking-[0.3em] text-white/40 hover:text-violet-400 transition-colors uppercase">LinkedIn</a>
          <a href="#" className="text-xs font-black tracking-[0.3em] text-white/40 hover:text-violet-400 transition-colors uppercase">Instagram</a>
          <a href="#" className="text-xs font-black tracking-[0.3em] text-white/40 hover:text-violet-400 transition-colors uppercase">Vimeo</a>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-white/40 text-[10px] uppercase tracking-[0.3em] font-black">
          <p>© 2026 EN PARTANT DE RIEN CM. TOUS DROITS RÉSERVÉS.</p>
        </div>

        {/* Liens Légaux avec visibilité accrue */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/50 text-[9px] uppercase tracking-[0.2em] font-bold">
          <button 
            onClick={() => onLegalClick?.('mentions')}
            className="hover:text-white transition-colors"
          >
            Mentions légales
          </button>
          <button 
            onClick={() => onLegalClick?.('confidentialite')}
            className="hover:text-white transition-colors"
          >
            Politique de confidentialité
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
