import React from 'react';
import { ShoppingBag, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer-gradient text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-8 w-8 text-blue-300 mr-2" />
              <span className="text-2xl font-bold text-white">Horizon</span>
            </div>
            <p className="mb-4">
              Transformando ideias em negócios online de sucesso com soluções práticas e prontas para usar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="mb-4">
              Receba atualizações, promoções e dicas exclusivas.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Seu email"
                className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 rounded-r-md transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-700 pt-8 mt-8 text-center text-blue-300 text-sm">
          <p>© {new Date().getFullYear()} Horizon. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
