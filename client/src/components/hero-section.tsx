import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="gradient-bg pt-20 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Construye una Presencia Digital
              <span className="text-yellow-accent"> Auténtica y Automatizada</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-light mb-8 leading-relaxed">
              Ayudamos a emprendedores y pequeñas empresas a posicionar su valor, conectar con su audiencia ideal y crecer de forma estructurada con IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                onClick={scrollToContact}
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-rocket mr-2"></i>
                Solicitar Diagnóstico Gratuito
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-play mr-2"></i>
                Ver Casos de Éxito
              </motion.button>
            </div>
            <motion.div 
              className="mt-8 flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">90K+</div>
                <div className="text-blue-200 text-sm">Ingresos Anuales Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">3x</div>
                <div className="text-blue-200 text-sm">ROI Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">Automatización IA</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative animate-float">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Dashboard de automatización de marketing digital" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <motion.div 
                className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <i className="fas fa-chart-line text-xl"></i>
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <i className="fas fa-robot text-xl"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
