
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/enpartantderien@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nouveau projet de ${formData.name} - En Partant De Rien`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || "Une erreur est survenue lors de l'envoi.");
      }
    } catch (err) {
      console.error("Erreur d'envoi du formulaire :", err);
      // Si FormSubmit échoue ou est bloqué par un bloqueur de pub, fallback mailto
      setStatus('error');
      setErrorMessage("L'envoi automatique a rencontré une difficulté. Vous pouvez nous contacter directement par email.");
    }
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
            <div className="text-center py-16 animate-reveal">
              <div className="text-violet-500 text-6xl mb-8">✓</div>
              <h3 className="text-3xl font-black tracking-tighter mb-4 uppercase">MESSAGE TRANSMIS AVEC SUCCÈS.</h3>
              <p className="text-white/60 tracking-widest text-xs font-bold uppercase mb-8">
                NOUS AVONS BIEN REÇU VOTRE DEMANDE PAR EMAIL ET VOUS RECONTACTONS SOUS 48H.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="px-8 py-3 text-[10px] font-black tracking-[0.2em] uppercase border border-white/20 text-white hover:border-violet-500 hover:text-violet-400 transition-all"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              {status === 'error' && (
                <div className="p-4 bg-red-950/40 border border-red-500/30 rounded text-red-300 text-xs font-semibold">
                  <p>{errorMessage}</p>
                  <a
                    href={`mailto:enpartantderien@gmail.com?subject=Contact%20depuis%20le%20site&body=Nom:%20${encodeURIComponent(formData.name)}%0AEmail:%20${encodeURIComponent(formData.email)}%0A%0A${encodeURIComponent(formData.message)}`}
                    className="inline-block mt-2 underline text-red-200 hover:text-white"
                  >
                    Cliquez ici pour ouvrir votre application de messagerie
                  </a>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-violet-500">VOTRE NOM</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/10 p-2 text-xl font-bold text-violet-400 focus:border-violet-500 outline-none transition-all placeholder:text-violet-500/30"
                    placeholder="NOM PRÉNOM"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-violet-500">VOTRE EMAIL</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 p-2 text-xl font-bold text-violet-400 focus:border-violet-500 outline-none transition-all resize-none placeholder:text-violet-500/30"
                  placeholder="QUEL EST VOTRE BESOIN ?"
                ></textarea>
              </div>

              <div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-6 bg-white text-black font-black tracking-[0.3em] hover:bg-violet-600 hover:text-white transition-all disabled:opacity-50 text-sm uppercase cursor-pointer"
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
