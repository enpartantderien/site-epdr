
import React, { useEffect } from 'react';
import { LegalPageType } from '../App';

interface LegalViewProps {
  type: LegalPageType;
  onBack: () => void;
}

const LegalView: React.FC<LegalViewProps> = ({ type, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const renderContent = () => {
    switch (type) {
      case 'mentions':
        return (
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-black mb-6 uppercase tracking-widest text-violet-500">Informations Générales</h2>
              <div className="space-y-4 text-white/60 leading-relaxed font-medium">
                <p><strong>Nom du site :</strong> <a href="https://www.enpartantderien.be/" className="hover:text-violet-400 transition-colors">https://www.enpartantderien.be/</a></p>
                <p><strong>Directeur de la publication :</strong> Mr Thomas THIÉBAUT</p>
                <p><strong>Email :</strong> <a href="mailto:enpartantderien@gmail.com" className="hover:text-violet-400 transition-colors">enpartantderien@gmail.com</a></p>
                <p><strong>Adresse :</strong> Rue basse 49, 7350 Hensies</p>
                <p><strong>Raison sociale :</strong> Personne physique</p>
                <p><strong>N°TVA :</strong> BE1030257685</p>
                <p><strong>Hébergement :</strong> Vercel Inc.</p>
              </div>
            </div>
          </div>
        );
      case 'confidentialite':
        return (
          <div className="space-y-12 text-white/60 leading-relaxed font-medium">
            <section>
              <h2 className="text-xl font-black mb-6 uppercase tracking-widest text-violet-500">1. INFORMATIONS LÉGALES</h2>
              <p>Le présent site est la propriété de la société <strong>En Partant De Rien CM</strong>.</p>
              <p className="mt-2"><strong>Responsables de publication :</strong> Thomas THIÉBAUT.</p>
              <p className="mt-2"><strong>Siège social :</strong> Rue basse 49, 7350 Hensies.</p>
              <p className="mt-2"><strong>Numéro d'entreprise / TVA :</strong> BE1030257685.</p>
              <p className="mt-2"><strong>Contact :</strong> enpartantderien@gmail.com</p>
              <p className="mt-2"><strong>Hébergement :</strong> Vercel Inc., situé au 340 S Lemon Ave #4133 Walnut, CA 91789, USA.</p>
            </section>

            <section>
              <h2 className="text-xl font-black mb-6 uppercase tracking-widest text-violet-500">2. PROTECTION DES DONNÉES (RGPD)</h2>
              <p>Nous accordons une importance capitale à la protection de votre vie privée.</p>
              <p className="mt-4"><strong>Données collectées :</strong> Seules les données envoyées via notre formulaire de contact (Nom, e-mail, détails du projet) sont traitées.</p>
              <p className="mt-2"><strong>Finalité :</strong> Ces informations servent exclusivement à répondre à vos demandes de devis et à la gestion de nos projets communs.</p>
              <p className="mt-2"><strong>Confidentialité :</strong> Vos données ne sont jamais vendues, louées ou partagées avec des tiers. Elles ne sont consultées que par l’équipe de En Partant De Rien CM.</p>
              <p className="mt-2"><strong>Durée :</strong> Vos données sont conservées pour la durée de notre relation commerciale, puis archivées selon les obligations légales belges.</p>
            </section>

            <section>
              <h2 className="text-xl font-black mb-6 uppercase tracking-widest text-violet-500">3. ZÉRO COOKIE</h2>
              <p>Le site En Partant De Rien CM est conçu pour respecter votre anonymat.</p>
              <p className="mt-2">Nous n'utilisons aucun cookie de traçage, publicitaire ou statistique nécessitant un consentement.</p>
              <p className="mt-2">Aucun bandeau de cookie ne s'affiche car aucune donnée de navigation n'est collectée à votre insu.</p>
            </section>

            <section>
              <h2 className="text-xl font-black mb-6 uppercase tracking-widest text-violet-500">4. VOS DROITS</h2>
              <p>Conformément à la législation européenne, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.</p>
              <p className="mt-2">Pour toute demande, contactez-nous par e-mail à : <strong>enpartantderien@gmail.com</strong>.</p>
              <p className="mt-2">En cas de besoin, vous pouvez contacter l’Autorité de Protection des Données (APD) : Rue de la Presse 35, 1000 Bruxelles.</p>
            </section>

            <section>
              <h2 className="text-xl font-black mb-6 uppercase tracking-widest text-violet-500">5. PROPRIÉTÉ INTELLECTUELLE</h2>
              <p>Tous les contenus présents sur ce site (textes, logos, montages vidéo, stratégies) sont protégés par le droit d'auteur. Toute reproduction ou utilisation sans accord préalable écrit de <strong>En Partant De Rien CM</strong> est strictement interdite.</p>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'mentions': return 'Mentions Légales';
      case 'confidentialite': return 'Confidentialité';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-32 px-6 animate-reveal">
      <div className="max-w-[800px] mx-auto">
        <button 
          onClick={onBack}
          className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-all mb-16 flex items-center gap-4"
        >
          <span className="text-xl">←</span> RETOUR À L'ACCUEIL
        </button>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-20">
          {getTitle()}
        </h1>

        <div className="bg-zinc-900/30 border border-white/5 p-8 md:p-16 rounded-sm">
          {renderContent()}
        </div>

        <div className="mt-20 pt-20 border-t border-white/5 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-black">
            En Partant de Rien CM © 2026 — Transparence & Impact
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalView;
