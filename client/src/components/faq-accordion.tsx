import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "Los primeros resultados se ven en 30-45 días, pero la transformación completa toma 3-6 meses dependiendo del punto de partida y objetivos."
    },
    {
      question: "¿Trabajan con negocios de cualquier tamaño?",
      answer: "Nos especializamos en emprendedores, marcas emergentes y pequeñas empresas que están listos para estructurar y escalar su negocio."
    },
    {
      question: "¿Qué incluye el diagnóstico gratuito?",
      answer: "Análisis completo de tu presencia digital actual, identificación de oportunidades y plan estratégico personalizado de 90 minutos."
    },
    {
      question: "¿Cómo funciona la automatización con IA?",
      answer: "Implementamos chatbots inteligentes, automatización de email marketing, análisis de datos en tiempo real y optimización automática de campañas."
    },
    {
      question: "¿Ofrecen garantías de resultados?",
      answer: "Garantizamos que seguiremos trabajando hasta que veas resultados tangibles. Si no mejora tu ROI en 6 meses, seguimos sin costo adicional."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Preguntas <span className="text-purple-600">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Resolvemos las dudas más comunes sobre nuestros servicios.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <motion.i 
                  className={`fas fa-chevron-down text-gray-500`}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
