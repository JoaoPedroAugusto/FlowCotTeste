import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf size={24} className="text-primary-400" />
              <span className="text-xl font-semibold">AlgodãoTech</span>
            </div>
            <p className="text-gray-400 mb-4">
              Disseminando conhecimento e oferecendo soluções para a redução do yield gap na cotonicultura brasileira.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Início</Link></li>
              <li><Link to="/what-is-yield-gap" className="text-gray-400 hover:text-primary-400 transition-colors">O que é Yield Gap</Link></li>
              <li><Link to="/historical-evolution" className="text-gray-400 hover:text-primary-400 transition-colors">Evolução Histórica</Link></li>
              <li><Link to="/tools-for-yield-gap" className="text-gray-400 hover:text-primary-400 transition-colors">Ferramentas</Link></li>
              <li><Link to="/solve-yield-gap" className="text-gray-400 hover:text-primary-400 transition-colors">Soluções</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><Link to="/minecraft-yield-gap" className="text-gray-400 hover:text-primary-400 transition-colors">Minecraft e o Yield Gap</Link></li>
              <li><Link to="/steps-to-avoid" className="text-gray-400 hover:text-primary-400 transition-colors">Passos Práticos</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:contato@algodaotech.com.br" className="hover:text-primary-400 transition-colors">
                  contato@algodaotech.com.br
                </a>
              </p>
            </div>
            <div className="mt-6">
              <Link to="/about-us" className="btn btn-outline text-primary-400 border-primary-400 hover:bg-primary-400 hover:text-white text-sm px-4 py-2">
                Sobre Nós
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AlgodãoTech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;