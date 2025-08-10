import { motion } from "framer-motion";

export default function ServicesGrid() {
  const services = [
    {
      icon: "🔍",
      title: "Diagnóstico Estratégico",
      description: "Análisis profundo de marca, mercado y objetivos con auditoría digital completa.",
      features: ["Análisis de diferenciador", "Auditoría digital completa", "Plan de acción estratégico"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📢",
      title: "Posicionamiento y Mensaje",
      description: "Desarrollo de storytelling auténtico y copywriting que conecta y convierte.",
      features: ["Propuesta de valor única", "Storytelling auténtico", "Copywriting persuasivo"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🌐",
      title: "Plataforma Web Inteligente",
      description: "Diseño y desarrollo web con enfoque en UX/UI y automatizaciones con IA.",
      features: ["Diseño UX/UI optimizado", "Automatizaciones con IA", "Analítica y CRM integrados"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "🚀",
      title: "Embudo Automatizado",
      description: "Funnel completo con lead magnets, emails y secuencias automatizadas.",
      features: ["Diseño de funnel completo", "Lead magnets estratégicos", "Email marketing automatizado"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "📊",
      title: "Acompañamiento Estratégico",
      description: "Mentoría mensual con análisis de resultados y ajustes continuos.",
      features: ["Reuniones de seguimiento", "Análisis de métricas", "Soporte técnico continuo"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "📱",
      title: "Gestión de Redes Sociales",
      description: "Estrategia completa en redes con calendario y gestión de comunidad.",
      features: ["Calendario de publicaciones", "Análisis de métricas", "Gestión de comunidad"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Solución Integral en 
            <span className="text-gradient block mt-2">Fases Estratégicas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Implementamos cada fase según la necesidad y madurez de tu negocio, garantizando resultados medibles y sostenibles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card-modern p-8 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <button className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors">
                    Conocer más →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="btn-primary px-8 py-4 rounded-full text-lg font-semibold">
            Ver Todos los Servicios
          </button>
        </motion.div>
      </div>
    </section>
  );
}