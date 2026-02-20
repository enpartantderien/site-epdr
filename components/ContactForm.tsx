
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">PRÊT À BÂTIR <br/> VOTRE EMPIRE ?</h2>
          <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-bold">MATTEO OU THOMAS VOUS RÉPONDRA PERSONNELLEMENT SOUS 48H</p>
        </div>

        <div className="bg-black p-10 md:p-20 border border-white/5 rounded-sm">
          {status === 'success' ? (
            <div className="text-center py-20 animate-reveal">
              <div className="text-white text-6xl mb-10">●</div>
              <h3 className="text-3xl font-black tracking-tighter mb-4 uppercase">MESSAGE REÇU.</h3>
              <p className="text-white/40 tracking-widest text-xs font-bold uppercase">PRÉPARATION DE VOTRE DOSSIER EN COURS.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-violet-500">VOTRE NOM</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-white/10 p-2 text-xl font-bold text-violet-400 focus:border-violet-500 outline-none transition-all placeholder:text-violet-500/30"
                    placeholder="NOM PRÉNOM"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-violet-500">VOTRE EMAIL</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-transparent border-b border-white/10 p-2 text-xl font-bold text-violet-400 focus:border-violet-500 outline-none transition-all placeholder:text-violet-500/30"
                    placeholder="EMAIL@WORK.COM"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-violet-500">DÉTAILS DU PROJET</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 p-2 text-xl font-bold text-violet-400 focus:border-violet-500 outline-none transition-all resize-none placeholder:text-violet-500/30"
                  placeholder="QUEL EST VOTRE BESOIN ?"
                ></textarea>
              </div>

              <div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-6 bg-white text-black font-black tracking-[0.3em] hover:bg-violet-600 hover:text-white transition-all disabled:opacity-50 text-sm uppercase"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
                  ) : (
                    "ENVOYER"
                  )}
                </button>
                
                <div className="text-center mt-10">
                  <a 
                    href="mailto:enpartantderien@gmail.com" 
                    className="text-[10px] font-black tracking-[0.4em] text-violet-500 hover:text-violet-400 transition-all uppercase"
                  >
                    enpartantderien@gmail.com
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
