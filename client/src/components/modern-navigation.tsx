import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoWhite from "@assets/8-removebg-preview (1)_1757780913071.png";

export default function ModernNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10' 
          : 'bg-black/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div 
            className="flex items-center cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection('inicio')}
          >
            <div className="flex items-center space-x-3">
              <img 
                src={logoWhite} 
                alt="Sparkia Lab"
                className="h-8 md:h-10 w-auto object-contain"
                data-testid="logo-sparkia-lab"
              />
              <div className="text-xl md:text-2xl font-bold text-white">
                Sparkia Lab
              </div>
            </div>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-white/90 hover:text-white transition-colors duration-200 text-sm lg:text-base font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('proceso')}
              className="text-white/90 hover:text-white transition-colors duration-200 text-sm lg:text-base font-medium"
            >
              Proceso
            </button>
            <button 
              onClick={() => scrollToSection('resultados')}
              className="text-white/90 hover:text-white transition-colors duration-200 text-sm lg:text-base font-medium"
            >
              Resultados
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-white/90 hover:text-white transition-colors duration-200 text-sm lg:text-base font-medium"
            >
              Testimonios
            </button>
            <motion.button 
              onClick={() => scrollToSection('contacto')}
              className="bg-white text-black hover:bg-gray-100 hover:shadow-lg px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-semibold transition-all duration-200 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Empezar Ahora
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-black/95 backdrop-blur-md border border-white/10 rounded-lg mt-4 p-6 mx-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left text-white hover:text-gray-300 transition-colors py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('proceso')}
                className="block w-full text-left text-white hover:text-gray-300 transition-colors py-2"
              >
                Proceso
              </button>
              <button 
                onClick={() => scrollToSection('resultados')}
                className="block w-full text-left text-white hover:text-gray-300 transition-colors py-2"
              >
                Resultados
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="block w-full text-left text-white hover:text-gray-300 transition-colors py-2"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-white text-black hover:bg-gray-100 w-full py-3 rounded-full text-base font-semibold mt-6 transition-all duration-200 shadow-md"
              >
                Empezar Ahora
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}