
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-brand-dark text-white border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-black text-brand-teal mb-2 font-heading tracking-tighter">DIEGO ARAÚJO</div>
            <p className="text-gray-400 text-sm max-w-xs">
              Especialista em comunicação visual institucional e estratégica para o setor público e privado.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
             <div className="flex gap-6 text-sm text-gray-400 font-semibold uppercase tracking-widest">
               <a href="#" className="hover:text-brand-teal transition-colors">Políticas</a>
               <a href="#" className="hover:text-brand-teal transition-colors">Termos</a>
               <a href="#" className="hover:text-brand-teal transition-colors">Suporte</a>
             </div>
             <p className="text-gray-500 text-xs">
               Copyright © {new Date().getFullYear()} Todos os direitos reservados.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
