import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none" 
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-600" />
        )}
      </button>
      <div 
        className={`mt-2 text-gray-700 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso ter conhecimento técnico para usar a plataforma?",
      answer: "Não, nossa plataforma foi projetada para ser extremamente intuitiva e amigável. Todo o processo é guiado e não exige conhecimentos de programação ou design. Você consegue configurar e gerenciar sua loja com facilidade, mesmo sendo iniciante no mundo digital."
    },
    {
      question: "Como funciona o pagamento das vendas?",
      answer: "As lojas vêm com integração aos principais gateways de pagamento do mercado. Você pode conectar sua conta do Mercado Pago, PagSeguro, Stripe ou outras opções populares. Os pagamentos são processados automaticamente e transferidos diretamente para sua conta, com taxas transparentes."
    },
    {
      question: "Quanto tempo leva para ter minha loja funcionando?",
      answer: "Com a Horizon, você pode ter sua loja online pronta para vender em menos de 24 horas! Após a compra, você recebe acesso imediato à plataforma, onde pode personalizar sua loja e adicionar produtos. O processo completo geralmente leva apenas algumas horas."
    },
    {
      question: "Posso personalizar o design da loja?",
      answer: "Sim! Nossas lojas permitem personalização das cores, fontes, logo e layout, mantendo sempre o design otimizado para conversão. Você pode adaptar a identidade visual para refletir sua marca, sem perder as características que fazem sua loja vender mais."
    },
    {
      question: "Existe suporte técnico ou ajuda disponível?",
      answer: "Absolutamente! Oferecemos suporte completo via chat, e email. Nossa equipe está disponível para auxiliar com dúvidas técnicas, estratégias de venda e otimizações. Além disso, você tem acesso a uma comunidade de empreendedores usando nossas lojas."
    }
  ];

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-indigo-50 via-indigo-100 to-indigo-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tudo que você precisa saber antes de começar sua jornada empreendedora
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
