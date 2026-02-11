
import React from 'react';
import { AlertCircle, Clock, Users, ShieldAlert } from 'lucide-react';
import { PainPoint } from '../types';

const PainPoints: React.FC = () => {
  const pains: PainPoint[] = [
    {
      title: "Materiais Desatualizados",
      description: "Documentos e artes com design antigo que não refletem a modernidade da sua instituição.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Falta de Padrão Visual",
      description: "Cada departamento cria de um jeito, gerando uma bagunça visual que confunde o público.",
      icon: <AlertCircle className="w-8 h-8" />
    },
    {
      title: "Dependência de Terceiros",
      description: "Ficar travado aguardando agências ou freelancers para alterações simples do dia a dia.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Perda de Credibilidade",
      description: "Uma comunicação visual amadora transmite insegurança e falta de profissionalismo institucional.",
      icon: <ShieldAlert className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading">
            Sua instituição enfrenta esses problemas?
          </h2>
          <div className="w-20 h-1.5 bg-brand-teal mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pains.map((pain, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="text-brand-purple mb-6 group-hover:scale-110 transition-transform duration-300">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 uppercase tracking-tighter">
                {pain.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-brand-purple italic">
            “Se você já passou por isso, este manual é para você.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
