
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

const offers = [
  {
    id: 'labo',
    title: 'LE LABO',
    subtitle: 'PRESTATION ONE-SHOT',
    price: 'À partir de 340€',
    description: "Je viens, je filme, je monte. Une solution simple et efficace pour ceux qui savent où ils vont.",
    supplements: 'Éclairage pro, stabilisateur, deuxième caméra, montage complexe...',
    features: [
      "5 réels (moins d'une minutes/réel)",
      "Montage sobre, sous-titre statique et musique (idéal pour face caméra)",
      "1 caméra (1 point de vue) + 1 micro",
      "session de tournage (2h)*",
      "deux modifications/réel"
    ],
    cta: 'LANCER LE LABO',
    popular: false
  },
  {
    id: 'empire',
    title: 'L\'EMPIRE',
    subtitle: 'ACCOMPAGNEMENT MENSUEL',
    price: 'À partir de 890€/mois',
    description: 'Le pilotage complet de votre présence digitale. Nous ne postons pas, nous bâtissons votre autorité.',
    supplements: "éclairage pro, deuxième caméra, montage complexe, publier sur d'autres plateformes, nombre de réel/post...",
    features: [
      'Stratégie de communication 100% personnalisable',
      'Session de tournage (2h)*',
      '1 caméra (1 point de vue) + 1 micro',
      'Montage sobre, sous-titre statique et musique',
      'Publication programmé (Insta et FB) dont 1 réel et 1 post/semaine',
      'Reporting mensuel des performances ',
      'Deux modifications/réel'
    ],
    cta: 'BÂTIR MON EMPIRE',
    popular: true
  },
  {
    id: 'stratege',
    title: 'LE CRÉATEUR DE CONTENU',
    subtitle: 'PRESTATION PODCAST',
    price: 'À partir de 890€/mois',
    description: 'Tu invites, on s’occupe du reste !',
    supplements: 'Caméra supplémentaire, montage complexe, réel supplémentaire...',
    features: [
      'Session de tournage en studio (2h)*',
      'Éclairage pro avec 2 points de vue',
      'Montage sobre et envoi',
      'Podcast final de moins d’ 1 heure',
      'Création de 5 réels ',
      'Deux modifications/réel',
      'Boissons offertes'
    ],
    cta: 'LANCER MON CONTENU',
    popular: false
  }
];

const Offers: React.FC = () => {
  return (
    <section id="offres" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <p className="text-violet-500 font-black tracking-[0.3em] text-[10px] md:text-xs mb-4 uppercase">
            Nos differentes solutions
          </p>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
            CHOISISSEZ VOTRE <br/>
            <span className="text-violet-500">PRESTATION</span>
          </h2>
          <div className="w-20 h-px bg-white/20"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {offers.map((offer, index) => (
            <motion.div 
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative bg-black transition-all duration-500 group overflow-hidden h-full ${
                offer.popular ? 'z-10' : ''
              }`}
            >
              {/* Highlight for popular offer */}
              {offer.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-violet-600"></div>
              )}
              
              <div className="p-8 md:p-12 h-full flex flex-col items-start">
                <div className="mb-10">
                  <p className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-2">
                    {offer.subtitle}
                  </p>
                  <h3 className="text-3xl font-black tracking-tight uppercase group-hover:text-violet-500 transition-colors duration-300">
                    {offer.title}
                  </h3>
                </div>

                <div className="mb-8 font-black text-2xl text-white">
                  {offer.price}
                </div>

                <p className="text-sm text-white/40 font-medium leading-relaxed mb-6 min-h-[3rem]">
                  {offer.description}
                </p>

                <div className="mb-10 w-full px-4 py-3 bg-white/5 rounded border border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-violet-400 mb-1">Suppléments possibles :</p>
                  <p className="text-[11px] text-white/50 leading-relaxed font-medium italic">
                    {offer.supplements}
                  </p>
                </div>

                <div className="space-y-4 mb-12 w-full">
                  {offer.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-500/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-violet-500" />
                      </div>
                      <span className="text-xs font-medium text-white/60 tracking-wide uppercase">{feature}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[9px] text-white/30 font-medium italic mb-6 leading-tight uppercase tracking-wider">
                  *Le tarif horaire supplémentaire 40€/h et frais de déplacement non inclus.
                </p>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`mt-auto w-full py-4 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 border ${
                    offer.popular 
                    ? 'bg-violet-600 border-violet-600 text-white hover:bg-violet-700 hover:border-violet-700' 
                    : 'bg-transparent border-white/20 text-white hover:bg-white hover:text-black hover:border-white'
                  }`}
                >
                  {offer.cta}
                </motion.button>
              </div>
              
              {/* Subtle background decoration */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-violet-600/5 rounded-full blur-3xl group-hover:bg-violet-600/10 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-xs text-white/30 font-medium uppercase tracking-[0.2em]">
            Besoin d'une offre sur mesure ? <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-violet-500 hover:underline">Contactez-nous</button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;
