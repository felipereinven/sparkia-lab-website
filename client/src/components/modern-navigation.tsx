import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex items-center cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection('inicio')}
          >
            <div className="text-3xl font-bold gradient-text">
              Sparkia Lab
            </div>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('proceso')}
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Proceso
            </button>
            <button 
              onClick={() => scrollToSection('resultados')}
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Resultados
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Testimonios
            </button>
            <motion.button 
              onClick={() => scrollToSection('contacto')}
              className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200"
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
              className="text-foreground p-2"
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
            className="md:hidden glass-effect rounded-lg mt-4 p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left text-white hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('proceso')}
                className="block w-full text-left text-white hover:text-primary transition-colors"
              >
                Proceso
              </button>
              <button 
                onClick={() => scrollToSection('resultados')}
                className="block w-full text-left text-white hover:text-primary transition-colors"
              >
                Resultados
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="block w-full text-left text-white hover:text-primary transition-colors"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-white text-black hover:bg-white/90 w-full py-3 rounded-full text-sm font-semibold mt-4 transition-colors duration-200"
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