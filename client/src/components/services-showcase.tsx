import { motion } from "framer-motion";

export default function ServicesShowcase() {
  const services = [
    {
      icon: "fas fa-search",
      title: "Diagnóstico Estratégico",
      description: "Análisis profundo de marca, mercado y objetivos. Auditoría digital completa con plan de acción estratégico.",
      features: [
        "Análisis de diferenciador y cliente ideal",
        "Auditoría digital completa",
        "Plan de acción estratégico"
      ]
    },
    {
      icon: "fas fa-bullhorn",
      title: "Posicionamiento y Mensaje",
      description: "Desarrollo de storytelling auténtico y copywriting persuasivo que conecta y convierte.",
      features: [
        "Desarrollo de propuesta de valor",
        "Storytelling auténtico",
        "Copywriting persuasivo"
      ]
    },
    {
      icon: "fas fa-globe",
      title: "Plataforma Web",
      description: "Diseño y desarrollo web con enfoque en UX/UI, conversión y automatizaciones inteligentes.",
      features: [
        "Diseño UX/UI optimizado",
        "Automatizaciones con IA",
        "Analítica y CRM integrados"
      ]
    },
    {
      icon: "fas fa-funnel-dollar",
      title: "Embudo Automatizado",
      description: "Funnel de ventas completo con lead magnets, emails y secuencias automatizadas.",
      features: [
        "Diseño de funnel completo",
        "Lead magnets estratégicos",
        "Secuencias de email marketing"
      ]
    },
    {
      icon: "fas fa-chart-line",
      title: "Acompañamiento",
      description: "Mentoría estratégica mensual con análisis de resultados y ajustes continuos.",
      features: [
        "Reuniones de seguimiento",
        "Análisis de métricas",
        "Soporte técnico continuo"
      ]
    },
    {
      icon: "fas fa-share-alt",
      title: "Gestión de Redes",
      description: "Estrategia completa en redes sociales con calendario y gestión de comunidad.",
      features: [
        "Calendario de publicaciones",
        "Análisis de métricas",
        "Gestión de comunidad"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Solución Integral en <span className="text-purple-600">Fases Estratégicas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Implementamos cada fase según la necesidad y madurez de tu negocio, garantizando resultados medibles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 text-sm text-gray-500">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
