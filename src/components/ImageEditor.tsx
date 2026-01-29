
import React, { useState, useRef } from 'react';
import { editImageWithGemini } from '../services/geminiService';

const ImageEditor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt) return;

    setLoading(true);
    setError(null);
    try {
      const edited = await editImageWithGemini(image, prompt);
      if (edited) {
        setResult(edited);
      } else {
        setError("Impossible de traiter cette image. Merci de réessayer.");
      }
    } catch (err) {
      setError("Erreur technique de connexion au studio IA.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-32 bg-[#0c0c0c]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-24">
          <p className="accent-text font-black tracking-[0.3em] text-xs mb-4 uppercase">Post-Production IA</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">STUDIO VIRTUEL</h2>
          <p className="text-white/40 text-sm uppercase tracking-widest max-w-xl mx-auto font-bold">
            Expérimentez la puissance de notre laboratoire d'intelligence artificielle intégré.
          </p>
        </div>

        <div className="bg-black p-8 lg:p-16 border border-white/5 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-6">1. IMPORTATION MEDIA</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full h-64 border border-white/10 bg-[#080808] flex flex-col items-center justify-center cursor-pointer hover:border-white transition-all overflow-hidden relative"
                >
                  {image ? (
                    <img src={image} alt="Upload preview" className="w-full h-full object-cover opacity-60" />
                  ) : (
                    <div className="text-center px-6">
                      <div className="text-white/20 text-4xl mb-4 uppercase font-black">DROP FILE</div>
                      <p className="text-[10px] text-white/40 font-black tracking-widest uppercase">Formats : PNG, JPG, WEBP</p>
                    </div>
                  )}
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-6">2. INSTRUCTIONS DE RETOUCHE</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder='Ex: "Ajoute un éclairage de studio néon", "Convertis en noir et blanc contrasté", "Mood cyberpunk"...'
                  className="w-full h-32 bg-transparent border-b border-white/10 p-4 text-white font-bold focus:border-white outline-none transition-all resize-none text-sm placeholder:text-white/10"
                />
              </div>

              <button
                onClick={handleEdit}
                disabled={!image || !prompt || loading}
                className="w-full py-5 bg-white text-black font-black tracking-[0.3em] hover:bg-zinc-200 transition-all disabled:opacity-20 uppercase text-xs"
              >
                {loading ? 'CALCUL EN COURS...' : 'GÉNÉRER LE RENDU'}
              </button>

              {error && (
                <div className="bg-white/5 border border-white/10 p-6">
                  <p className="text-white text-[10px] font-black tracking-widest uppercase text-center">{error}</p>
                </div>
              )}
            </div>

            <div className="h-full flex flex-col">
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-6">RÉSULTAT DU STUDIO</label>
              <div className="flex-1 min-h-[450px] border border-white/10 bg-[#080808] flex items-center justify-center overflow-hidden relative">
                {result ? (
                  <img src={result} alt="Edited" className="w-full h-full object-contain" />
                ) : loading ? (
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin mb-8"></div>
                    <p className="text-white/20 font-black tracking-widest text-[10px] uppercase">Traitement des métadonnées...</p>
                  </div>
                ) : (
                  <div className="text-white/10 text-center px-10">
                    <p className="text-[10px] font-black tracking-[0.4em] uppercase">Attente de données sources</p>
                  </div>
                )}
              </div>
              {result && (
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = result;
                    link.download = 'render-cm.png';
                    link.click();
                  }}
                  className="mt-8 text-white text-[10px] font-black tracking-widest hover:underline text-center uppercase"
                >
                  TÉLÉCHARGER LE RENDU FINAL
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageEditor;
