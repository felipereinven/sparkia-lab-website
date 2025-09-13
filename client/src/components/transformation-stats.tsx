import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TransformationStats() {
  const { t } = useLanguage();
  const [counters, setCounters] = useState({
    revenue: 0,
    roi: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      
      const targets = {
        revenue: 90000,
        roi: 300,
        satisfaction: 98
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          revenue: Math.round(targets.revenue * progress),
          roi: Math.round(targets.roi * progress),
          satisfaction: Math.round(targets.satisfaction * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    };

    animateCounters();
  }, []);

  const formatRevenue = (value: number) => {
    if (value >= 1000) {
      return `$${Math.round(value / 1000)}K+`;
    }
    return `$${value}`;
  };

  return (
    <section id="transformacion" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('transformationStats.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('transformationStats.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-5xl font-bold mb-4 text-yellow-400">
              {formatRevenue(counters.revenue)}
            </div>
            <div className="text-lg text-blue-100">{t('transformationStats.revenue')}</div>
          </motion.div>
          
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-5xl font-bold mb-4 text-yellow-400">{counters.roi}%</div>
            <div className="text-lg text-blue-100">{t('transformationStats.roi')}</div>
          </motion.div>
          
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-5xl font-bold mb-4 text-yellow-400">24/7</div>
            <div className="text-lg text-blue-100">{t('transformationStats.automation')}</div>
          </motion.div>
          
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-5xl font-bold mb-4 text-yellow-400">{counters.satisfaction}%</div>
            <div className="text-lg text-blue-100">Satisfacción del Cliente</div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
            alt="Gráfico de crecimiento empresarial y transformación digital" 
            className="rounded-2xl shadow-2xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
