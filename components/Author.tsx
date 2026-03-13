
import React from 'react';

const Author: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch">
          
          <div className="w-full md:w-2/5 relative">
            {/* Espaço reservado para foto do autor */}
            <div className="h-96 md:h-full bg-gray-200 overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/d/1-nOoFCjUH_kwtII3h9GetnN9LjIAogLJ" 
                alt="Diego Araújo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-brand-dark/80 backdrop-blur-md rounded-xl md:hidden">
               <h3 className="text-white font-bold text-2xl uppercase tracking-tight">Diego Araújo</h3>
            </div>
          </div>

          <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-brand-teal font-bold uppercase tracking-[0.2em] mb-4">Sobre o autor</h2>
            
            <h3 className="text-4xl md:text-5xl font-black text-brand-dark mb-8 uppercase tracking-tighter">
              Diego Araújo
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 italic border-l-4 border-brand-purple pl-6">
              “Sou Diego Araújo, publicitário e designer com mais de 20 anos de experiência em comunicação visual, marketing e audiovisual. Atuo na criação de identidades visuais, materiais institucionais e comunicação estratégica para empresas e órgãos públicos, unindo técnica, clareza e profissionalismo.”
            </p>

            <div className="flex gap-4">
              <div className="bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-lg font-bold text-xs uppercase">+20 Anos Experiência</div>
              <div className="bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-lg font-bold text-xs uppercase">Comunicação Visual</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Author;
