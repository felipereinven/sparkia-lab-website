import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ModernHero() {
  const { t } = useLanguage();
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >


            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-normal mb-6 md:mb-8">
              <span className="text-white block mb-2">{t('hero.build')}</span>
              <span className="text-blue-400 block mb-2 font-extrabold">
                {t('hero.digital')}
              </span>
              <span className="text-gray-100 block">
                {t('hero.authentic')}
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
              <motion.button 
                onClick={scrollToContact}
                className="bg-white text-black hover:bg-gray-100 hover:shadow-lg px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold inline-flex items-center justify-center transition-all duration-200 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
{t('hero.cta')}
              </motion.button>
              
              <motion.button 
                className="border-2 border-white/80 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold inline-flex items-center justify-center transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
{t('nav.results')}
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div 
              className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">$90K+</div>
                <div className="text-white/80 text-xs sm:text-sm mt-1">{t('stats.revenue')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">300%</div>
                <div className="text-white/80 text-xs sm:text-sm mt-1">{t('stats.roi')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">24/7</div>
                <div className="text-white/80 text-xs sm:text-sm mt-1">{t('stats.automation')}</div>
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
                      <div className="text-xs text-muted-foreground">{t('stats.conversion')}</div>
                    </div>
                    <div className="bg-card rounded-lg p-4">
                      <div className="text-2xl font-bold text-cyan-400">98%</div>
                      <div className="text-xs text-muted-foreground">{t('stats.satisfaction')}</div>
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