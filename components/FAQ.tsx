
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Para quem é esse produto?",
      answer: "O Manual é ideal para assessores de comunicação, gestores de órgãos públicos, profissionais de marketing em empresas e qualquer pessoa responsável por zelar pela imagem institucional e que busca agilidade e padronização visual através do Canva."
    },
    {
      question: "Como funciona o Prazo de Garantia?",
      answer: "O Prazo de Garantia é o período que você tem para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório."
    },
    {
      question: "Como acessar o produto?",
      answer: "O acesso será enviado por e-mail ou disponibilizado na conta do cliente via Hotmart. Imediatamente após a confirmação do pagamento, você receberá os dados de acesso."
    },
    {
      question: "Como faço para comprar?",
      answer: "Clique no botão de 'Quero profissionalizar minha comunicação' ou qualquer botão de aquisição disponível na página. Você será redirecionado para a página de pagamento segura da Hotmart."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-heading uppercase tracking-tight">Perguntas Frequentes</h2>
            <p className="text-gray-500">Tire suas dúvidas antes de garantir o seu manual.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-brand-dark uppercase tracking-tighter">{faq.question}</span>
                  {openIndex === index ? <ChevronUp className="text-brand-purple" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openIndex === index && (
                  <div className="p-6 bg-gray-50 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
