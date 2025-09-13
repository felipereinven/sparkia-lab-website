import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();
  const steps = [
    {
      number: "01",
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
      icon: "🔍",
      timeline: t('process.step1.timeline'),
      deliverables: [t('process.step1.deliverable1'), t('process.step1.deliverable2'), t('process.step1.deliverable3')]
    },
    {
      number: "02",
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
      icon: "🎯",
      timeline: t('process.step2.timeline'),
      deliverables: [t('process.step2.deliverable1'), t('process.step2.deliverable2'), t('process.step2.deliverable3')]
    },
    {
      number: "03",
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
      icon: "⚡",
      timeline: t('process.step3.timeline'),
      deliverables: [t('process.step3.deliverable1'), t('process.step3.deliverable2'), t('process.step3.deliverable3')]
    },
    {
      number: "04",
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
      icon: "🚀",
      timeline: t('process.step4.timeline'),
      deliverables: [t('process.step4.deliverable1'), t('process.step4.deliverable2'), t('process.step4.deliverable3')]
    }
  ];

  return (
    <section id="proceso" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('process.title')} 
            <span className="text-gradient block mt-2">{t('process.digital')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex-1 max-w-lg">
                  <div className="card-modern p-8">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{step.icon}</div>
                      <div>
                        <div className="text-primary font-bold text-sm">{step.timeline}</div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">{t('process.deliverables')}:</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step Number */}
                <div className="relative z-10">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.number}
                  </motion.div>
                </div>

                <div className="flex-1 max-w-lg lg:block hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t('process.cta.title')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('process.cta.subtitle')}
            </p>
            <button className="btn-primary px-8 py-4 rounded-full font-semibold">
              {t('hero.cta')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}