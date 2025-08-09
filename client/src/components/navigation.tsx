import { useState } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold gradient-bg bg-clip-text text-transparent">
              Sparkia Lab
            </div>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('transformacion')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Transformación
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
              >
                Contactar
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('transformacion')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Transformación
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block px-3 py-2 bg-orange-500 text-white rounded-full text-center mx-3 mt-2"
              >
                Contactar
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
