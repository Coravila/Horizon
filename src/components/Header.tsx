import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <ShoppingBag className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-2xl font-bold text-gray-900">Horizon</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Benefícios</a>
          <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">Como Funciona</a>
          <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">Perguntas Frequentes</a>
        </nav>
        
        <button 
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all transform hover:scale-105"
        >
          Começar Agora
        </button>
        
        <button 
          className="md:hidden text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#beneficios" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#como-funciona" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Perguntas Frequentes
            </a>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              Começar Agora
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;