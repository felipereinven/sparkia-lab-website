import { motion } from "framer-motion";

export default function ModernHero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-bg opacity-90"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white mb-8"
            >
              🚀 Agencia Digital Estratégica
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-white">Construye una</span>
              <span className="text-gradient block mt-2">
                Presencia Digital
              </span>
              <span className="text-white">
                Auténtica y Automatizada
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl">
              Ayudamos a emprendedores y pequeñas empresas a posicionar su valor, conectar con su audiencia ideal y crecer de forma estructurada con IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <motion.button 
                onClick={scrollToContact}
                className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Diagnóstico Gratuito
              </motion.button>
              
              <motion.button 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver Casos de Éxito
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div 
              className="mt-16 grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">$90K+</div>
                <div className="text-white/70 text-sm mt-1">Ingresos Anuales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">300%</div>
                <div className="text-white/70 text-sm mt-1">ROI Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">24/7</div>
                <div className="text-white/70 text-sm mt-1">Automatización</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Dashboard */}
              <motion.div 
                className="glass-effect rounded-2xl p-8 max-w-md w-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                  <div className="h-3 bg-muted rounded-full w-3/4"></div>
                  <div className="h-3 bg-muted rounded-full w-1/2"></div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-card rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400">+250%</div>
                      <div className="text-xs text-muted-foreground">Conversión</div>
                    </div>
                    <div className="bg-card rounded-lg p-4">
                      <div className="text-2xl font-bold text-cyan-400">98%</div>
                      <div className="text-xs text-muted-foreground">Satisfacción</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center neon-glow"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  y: [0, -10, 0] 
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1 
                }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}