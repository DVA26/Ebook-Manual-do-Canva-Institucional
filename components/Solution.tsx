
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mb-8 leading-tight font-heading">
            Este manual resolve, na prática, os principais desafios da comunicação institucional.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Aprenda a utilizar o Canva não apenas como uma ferramenta de design, mas como um aliado estratégico para manter a integridade visual da sua marca.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              "Criação de Identidade Visual Coesa",
              "Templates Adaptáveis para Equipes",
              "Agilidade sem Perder a Qualidade",
              "Linguagem Visual para Órgãos Públicos",
              "Padronização de Documentos e Ofícios",
              "Comunicação Estratégica Digital"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-teal flex-shrink-0" />
                <span className="font-semibold text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-dark rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold mb-8 font-heading">
              Pronto para elevar o nível da sua comunicação?
            </h3>
            <a 
              href="https://hotm.io/WXdC7kW"
              className="inline-block px-10 py-5 rounded-full text-white font-extrabold text-lg btn-gradient shadow-2xl uppercase tracking-widest"
            >
              Quero acesso ao manual
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
