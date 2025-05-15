import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Tenha sua loja online pronta para vender em poucos dias
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              A Horizon cria lojas online profissionais e prontas para você começar a vender imediatamente, sem complicações técnicas ou conhecimentos avançados.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center">
                Quero fazer minha loja agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent hover:bg-gray-100 text-gray-700 font-medium py-3 px-8 border border-gray-300 rounded-full transition-all">
                Saiba mais
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6634181/pexels-photo-6634181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Loja online Horizon" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white py-2 px-6 rounded-full transform rotate-3 shadow-lg">
                  Pronta para vender!
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-blue-100 rounded-full p-2 shadow-md">
                <div className="bg-blue-600 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-xl">
                  100%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;