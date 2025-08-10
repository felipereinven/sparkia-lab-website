import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const [counters, setCounters] = useState({
    revenue: 0,
    roi: 0,
    satisfaction: 0,
    clients: 0
  });

  useEffect(() => {
    const animateCounters = () => {
      const duration = 3000;
      const steps = 60;
      const stepTime = duration / steps;
      
      const targets = {
        revenue: 90,
        roi: 300,
        satisfaction: 98,
        clients: 50
      };

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          revenue: Math.round(targets.revenue * progress),
          roi: Math.round(targets.roi * progress),
          satisfaction: Math.round(targets.satisfaction * progress),
          clients: Math.round(targets.clients * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    };

    animateCounters();
  }, []);

  const stats = [
    {
      icon: "💰",
      value: `$${counters.revenue}K+`,
      label: "Ingresos Anuales Promedio",
      description: "por cliente",
      color: "text-green-400"
    },
    {
      icon: "📈",
      value: `${counters.roi}%`,
      label: "ROI Promedio",
      description: "en 12 meses",
      color: "text-blue-400"
    },
    {
      icon: "😊",
      value: `${counters.satisfaction}%`,
      label: "Satisfacción",
      description: "del cliente",
      color: "text-purple-400"
    },
    {
      icon: "🎯",
      value: `${counters.clients}+`,
      label: "Clientes Transformados",
      description: "exitosamente",
      color: "text-orange-400"
    }
  ];

  return (
    <section id="resultados" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Nuestros clientes experimentan transformaciones reales y medibles en su negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-effect rounded-2xl p-8"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4 
              }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Additional Content */}
        <motion.div 
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-white">
            <h3 className="text-3xl font-bold mb-6">Automatización 24/7 Activa</h3>
            <p className="text-xl text-white/80 mb-6">
              Nuestros sistemas trabajan las 24 horas generando leads, nutriendo prospectos y cerrando ventas mientras tú duermes.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
                <span>Chatbots inteligentes con IA</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                <span>Email marketing automatizado</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                <span>Análisis y optimización continua</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div 
              className="glass-effect rounded-2xl p-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">Automatización Activa</span>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Leads generados hoy</span>
                  <span className="text-green-400 font-semibold">+23</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Emails enviados</span>
                  <span className="text-blue-400 font-semibold">847</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Conversiones</span>
                  <span className="text-purple-400 font-semibold">12</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}