
import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Author from './components/Author';
import PricingSection from './components/PricingSection';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <PainPoints />
      <Solution />
      <Author />
      <PricingSection />
      <Guarantee />
      <FAQ />
      <Footer />
      
      {/* Sticky Bottom CTA for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 z-50">
        <a 
          href="https://hotm.io/WXdC7kW"
          className="block w-full text-center py-3 px-6 rounded-full text-white font-bold text-sm btn-gradient shadow-lg uppercase tracking-wide"
        >
          Quero o Manual Agora
        </a>
      </div>
    </div>
  );
};

export default App;
