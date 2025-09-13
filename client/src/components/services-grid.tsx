import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesGrid() {
  const { t } = useLanguage();
  const services = [
    {
      icon: "🔍",
      title: t('services.diagnostic.title'),
      description: t('services.diagnostic.description'),
      features: [t('services.diagnostic.feature1'), t('services.diagnostic.feature2'), t('services.diagnostic.feature3')],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📢",
      title: t('services.positioning.title'),
      description: t('services.positioning.description'),
      features: [t('services.positioning.feature1'), t('services.positioning.feature2'), t('services.positioning.feature3')],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🌐",
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: [t('services.web.feature1'), t('services.web.feature2'), t('services.web.feature3')],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: "🚀",
      title: t('services.funnel.title'),
      description: t('services.funnel.description'),
      features: [t('services.funnel.feature1'), t('services.funnel.feature2'), t('services.funnel.feature3')],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "📊",
      title: t('services.support.title'),
      description: t('services.support.description'),
      features: [t('services.support.feature1'), t('services.support.feature2'), t('services.support.feature3')],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "📱",
      title: t('services.social.title'),
      description: t('services.social.description'),
      features: [t('services.social.feature1'), t('services.social.feature2'), t('services.social.feature3')],
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
            {t('services.title')} 
            <span className="text-gradient block mt-2">{t('services.phases')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
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
                    {t('services.learnMore')} →
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
            {t('services.viewAll')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}