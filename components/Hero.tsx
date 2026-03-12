
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative pt-12 pb-20 md:pt-20 md:pb-32 gradient-bg overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl -mr-48 -mt-24"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl -ml-48 -mb-24"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block px-4 py-1 rounded-full border border-brand-teal/30 text-brand-teal text-sm font-semibold mb-6 uppercase tracking-wider">
              MARKETING ESTRATÉGICO EXCLUSIVO
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 font-heading">
              Manual do <span className="text-brand-teal">Canva</span> Institucional
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Transforme a imagem da sua empresa ou órgão público com comunicação visual inteligente, técnica e profissional.
            </p>

            {/* Price Highlight as requested: Updated with original price R$ 47,90 */}
            <div className="mb-8 p-6 bg-white/5 rounded-2xl border border-white/10 inline-block w-full md:w-auto text-center md:text-left">
              <p className="text-brand-teal text-sm font-semibold mb-2 uppercase tracking-wide">Investimento único:</p>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-sm text-gray-400 line-through mb-1">De R$ 47,90 por apenas</span>
                <span className="text-4xl md:text-5xl font-extrabold text-white mb-1">
                  R$ 27,90
                </span>
                <span className="text-xl text-gray-400">
                  ou 3x de <span className="text-white font-bold">R$ 9,96</span> no cartão
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-4 uppercase font-semibold">
                PAGAMENTO 100% SEGURO COM ACESSO IMEDIATO
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://hotm.io/WXdC7kW" 
                className="btn-gradient px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl uppercase tracking-wide text-center"
              >
                Quero o Ebook
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-md aspect-[3/4] bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden group">
               {/* Mockup Placeholder */}
               <img 
                 src="https://lh3.googleusercontent.com/d/1rwm5wjv6kZxHkUVkZi7FWuYulE5tZGwt" 
                 alt="Mockup do Ebook Manual do Canva Institucional" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <div className="w-12 h-1 bg-brand-teal mb-4"></div>
                    <p className="text-white font-bold text-xl uppercase tracking-tighter">Comunicação Visual Inteligente</p>
                  </div>
               </div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-brand-purple p-6 rounded-2xl shadow-2xl hidden md:block animate-bounce duration-[3000ms]">
               <p className="text-white font-bold text-sm uppercase tracking-widest text-center">
                 Acesso <br/> Imediato
               </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Hero;
