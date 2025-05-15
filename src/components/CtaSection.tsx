import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-200 via-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comece seu negócio online hoje mesmo
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Junte-se a milhares de empreendedores que tiveram ajuda da Horizon
            </p>
            
            <div className="mb-8">
              <div className="flex items-start mb-3">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                <p>Estrutura profissional pronta para vender</p>
              </div>
              <div className="flex items-start mb-3">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                <p>Suporte especializado para tirar suas dúvidas</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0 mt-0.5" />
                <p>Sem mensalidades ou taxas escondidas</p>
              </div>
            </div>
            
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105 flex items-center">
              Quero fazer minha loja agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="md:w-2/5">
            <div className="bg-white p-8 rounded-xl shadow-xl text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Oferta Especial</h3>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-1">R$ 997</div>
                <div className="text-gray-500 line-through">R$ 1.997</div>
                <div className="bg-blue-100 text-blue-800 inline-block px-3 py-1 rounded-full text-sm font-medium mt-2">
                  50% de desconto por tempo limitado
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Acesso vitalício à plataforma</p>
                </div>
                <div className="flex items-start mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Modelos de lojas premium</p>
                </div>
                <div className="flex items-start mb-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">60 dias de garantia incondicional</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Suporte prioritário por 12 meses</p>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center">
                Garantir minha vaga agora
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Pagamento único e seguro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
