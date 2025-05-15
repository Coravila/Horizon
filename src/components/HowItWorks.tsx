import React from 'react';
import { MousePointer, ShoppingCart, CreditCard, BarChart3 } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="bg-blue-600 text-white h-16 w-16 rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 bg-purple-600 text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Especifique suas preferencias",
      description: "Você preenche um formulário rápido informando seu estilo preferido, cores, referências e outros detalhes visuais. Nada técnico!",
      icon: <MousePointer className="h-6 w-6" />
    },
    {
      number: 2,
      title: "Criamos a interface completa pra você",
      description: "Criamos uma loja moderna, profissional e focada nas suas preferências. Pronta para você começar a vender.",
      icon: <ShoppingCart className="h-6 w-6" />
    },
    {
      number: 3,
      title: "Comece a vender",
      description: "Sua loja está pronta para receber pedidos e processar pagamentos automaticamente.",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      number: 4,
      title: "Analise e cresça",
      description: "Acompanhe métricas, otimize sua loja e expanda seu negócio com nosso suporte.",
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Processo simples e rápido para ter sua loja online funcionando em pouco tempo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <Step 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;