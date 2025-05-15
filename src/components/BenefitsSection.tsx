import React from 'react';
import { CheckCircle, Zap, LineChart, ThumbsUp, HeadphonesIcon } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Entrega rápida",
      description: "Você recebe sua loja pronta em poucos dias, sem processos complicados ou demora desnecessária."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Liberdade para personalizar depois",
      description: "Após a entrega, você pode ajustar produtos, banners e textos com facilidade, sempre que quiser."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Alta Conversão",
      description: "Design pensado para converter visitantes em clientes, com elementos estrategicamente posicionados e copy persuasivo."
    },
    {
      icon: <ThumbsUp className="h-8 w-8" />,
      title: "Ideal para Iniciantes",
      description: "Interface intuitiva que não exige conhecimentos técnicos, permitindo que você comece a vender no mesmo dia."
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Suporte Incluso",
      description: "Acesso a suporte especializado para tirar dúvidas e ajudar com qualquer necessidade durante sua jornada empreendedora."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Horizon?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Oferecemos tudo o que você precisa para iniciar seu negócio online 
            com a melhor estrutura e sem complicações técnicas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;