
import React from 'react';
import { ShieldCheck, CreditCard, Zap } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4 font-heading uppercase tracking-tight">Aproveite esta oportunidade única</h2>
            <p className="text-gray-500">Adquira agora o conhecimento necessário para profissionalizar sua comunicação.</p>
          </div>

          <div className="relative p-1 bg-gradient-to-br from-brand-teal via-brand-purple to-brand-teal rounded-[3rem] shadow-2xl overflow-hidden mb-12">
            <div className="bg-white rounded-[2.8rem] p-10 md:p-16">
              <div className="mb-8">
                <p className="text-gray-400 line-through text-lg">De R$ 47,90 por apenas</p>
                <div className="flex flex-col items-center">
                  <span className="text-5xl md:text-7xl font-black text-brand-dark tracking-tighter mb-2">
                    R$ 27,90
                  </span>
                  <p className="text-xl text-brand-purple font-bold">
                    ou 3x de R$ 9,96 no cartão de crédito
                  </p>
                </div>
              </div>

              <a 
                href="https://hotm.io/WXdC7kW" 
                className="block w-full py-5 px-8 rounded-full text-white font-extrabold text-xl btn-gradient shadow-lg uppercase tracking-widest mb-8 text-center"
              >
                Quero o Ebook agora
              </a>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-500 font-semibold uppercase tracking-tighter">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  <span>Pagamento 100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span>Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-brand-purple" />
                  <span>Até 3x sem juros</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
