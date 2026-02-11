
import React from 'react';
import { Award } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-teal/20 rounded-full blur-2xl"></div>
            <Award className="w-32 h-32 text-brand-teal relative z-10" />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 font-heading uppercase tracking-tighter">Garantia incondicional de 7 dias</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Seu dinheiro de volta sem perguntas até 7 dias após a compra. <br className="hidden md:block"/>
              Teste o material, aplique na sua instituição e, se não gostar, devolvemos 100% do valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
