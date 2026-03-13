
import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Silva",
    role: "Designer Júnior",
    content: "O ebook mudou minha visão sobre design institucional. Prático e direto!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 2,
    name: "Roberto Almeida",
    role: "Diretor Executivo",
    content: "Excelente material para padronizar a comunicação da minha empresa. Recomendo.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Social Media",
    content: "Dicas incríveis que economizam horas de trabalho no Canva. Vale cada centavo!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 4,
    name: "Juliana Mendes",
    role: "Consultora",
    content: "Conteúdo técnico de alta qualidade. Minhas apresentações agora são profissionais.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 5,
    name: "Beatriz Santos",
    role: "Empreendedora",
    content: "Finalmente um guia que foca no mercado institucional. Muito bem estruturado!",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: 6,
    name: "Carla Oliveira",
    role: "Gestora de Projetos",
    content: "Resultados imediatos na identidade visual da minha marca. Simplesmente amei!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -ml-32 -mt-32"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl -mr-32 -mb-32"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-heading">
            O que dizem os <span className="text-brand-teal">clientes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Junte-se a centenas de profissionais que já transformaram sua comunicação visual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-brand-teal/50 transition-colors group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-teal text-brand-teal" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-teal/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-brand-teal text-xs uppercase tracking-wider font-semibold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
